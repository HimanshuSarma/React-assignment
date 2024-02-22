import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PaginationView from '../Pagination/PaginationView';
import Dropdown from '../Dropdown/Dropdown';
import PrimaryBtn from '../buttons/PrimaryBtn';

import { getFormattedDate, getHoursIn12HourFormat } from '../../utils/dateHandlers';
import { EventDetailsPropType, EventType, TabButtonPropType, EventDetailsTab, MeetingRoom, PositionType } from '../../types/events';
import { ViewComponentProps } from '../../types/components/viewComponentTypes';

import { meetingRoomList } from '../../staticData/events';

import './EventDetails.css';

const ViewComponent: React.FC<ViewComponentProps> = ({ paginatedList, searchQuery }): JSX.Element => {

  const navigate = useNavigate();

  console.log('viewcomp', paginatedList);
  return (
    <div
      className={`event-details-vc-container`}
    >
      <table
        className={`event-details-vc-container-table`}
      >
        <thead
          className={`event-details-vc-container-table-thead`}
        >
          <tr
          >
            <th>Position</th>
            <th>Time</th>
            <th>Info</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody

        >
          {paginatedList?.
            filter((event: PositionType) => {
              return (event.value?.toLowerCase()?.includes(searchQuery?.toLowerCase() || ''));
            })?.
            map((event: PositionType, idx: number) => {
              return (
                <React.Fragment
                  key={event.id}
                >
                  <tr>
                    <td>{event.value}</td>
                    <td>{`${getHoursIn12HourFormat(event.timeRange[0])} - ${getHoursIn12HourFormat(event.timeRange[1])}`}</td>
                    <td>{event.info}</td>
                    <td>{event.qty}</td>
                  </tr>
                </React.Fragment>
              )
            })}
        </tbody>
      </table>
    </div >
  );
};

const TabButton: React.FC<TabButtonPropType> = ({ title, tabChangeHandler, className }): JSX.Element => {
  return (
    <button
      onClick={() => {
        tabChangeHandler(title);
      }}
      className={`${className} tab-btn`}
    >{title}</button>
  );
};

const EventDetails: React.FC<any> = (): JSX.Element => {

  const location = useLocation();
  const eventId = location.pathname.split('/')[2];

  const [limit, setLimit] = useState<number>(5);
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(location.state.positions.length / limit));

  const [searchQuery, setSearchQuery] = useState<string>('');

  const [meetingRooms, setMeetingRooms] = useState<Array<MeetingRoom>>(meetingRoomList);
  const [currentMeetingRoom, setCurrentMeetingRoom] = useState<MeetingRoom>(meetingRoomList[0]);

  const [currentTab, setCurrentTab] = useState<string>('assign-coordinator/coordinator');
  const [allTabs, setAllTabs] = useState<Array<EventDetailsTab>>([
    {
      title: 'Event Details',
      id: 'event-details',
    },
    {
      title: 'Assign-Coordinator/Coordinator',
      id: 'assign-coordinator/coordinator',
    },
    {
      title: 'Session Management',
      id: 'session-management',
    },
    {
      title: 'Generate Sow',
      id: 'generate-sow'
    }]);


  const getDataHandler = (pageNo: number, limit: number) => {
    console.log('getDataHandler', pageNo, limit);
    return [...location.state.positions].slice((pageNo - 1) * limit, ((pageNo - 1) * limit) + limit);
  };

  const tabChangeHandler = (tab: string) => {
    setCurrentTab(tab);
  };

  console.log('eventDetails', eventId, location.state);

  return (
    <div>
      <h1
        className={`event-1-1-primary-header`}
      >Event Name <span className={`fs-20`}>(Venue Details)</span></h1>
      <div>
        {allTabs.map((tab: EventDetailsTab) => {
          return (
            <React.Fragment key={tab.id}>
              <TabButton
                title={tab.id}
                tabChangeHandler={tabChangeHandler}
                className={currentTab === tab.id ? `active` : `inactive`}
              />
            </React.Fragment>
          )
        })}

        <div
          className={`event-details-section-2`}
        >
          <div
            className={`section-2-flex-container`}
          >
            <h2>Assign Coordinator</h2>
            <Dropdown
              placeholder='Search Coordinator'
              options={[]}
            />
            <button
              className={`section-2-btn`}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                alert(`No functionality added right now!`);
              }}
            >Add New Contractor</button>
          </div>

          <div
            className={`event-details-section-2-event-details`}
          >
            <h2>Event Name (Venue Here)</h2>
            <div
              className={`event-details-timings`}
            >
              <p>Starts: {getFormattedDate(location.state?.eventStart)}</p>
              <p>Ends: {getFormattedDate(location.state?.eventEnd)}</p>
            </div>

            <div
              className={`event-details-timings`}
            >
              <p>Venue Address: {location.state?.venue}</p>
            </div>
          </div>
        </div>

        <div
          className={`event-details-section-3`}
        >
          <h2>Assign Contractor</h2>
          <div
            className={`section-3-flex-container`}
          >
            <div
              className={`section-3-flex-container-left`}
            >
              <div
                className={`section-3-flex-container-left-flex-container`}
              >
                {meetingRooms.map((meetingRoom: MeetingRoom, meetingRoomIdx: number) => {
                  return (
                    <React.Fragment key={meetingRoom.id}>
                      <div
                        className={`section-3-flex-container-left-flex-container-container ${currentMeetingRoom.id === meetingRoom.id ? `active-meeting-room` : `inactive-meeting-room`}`}
                      >
                        <div
                          className={`section-3-flex-container-left-item-left`}
                        >
                          <p>{meetingRoom.title}</p>
                          <p>{meetingRoom.totalPositions} Positions</p>
                        </div>
                        <div
                          className={`section-3-flex-container-left-item-right`}
                        >
                          <p>Starts from {getFormattedDate(meetingRoom.start)} - Ends at {getFormattedDate(meetingRoom.end)}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
            <div
              className={`section-3-flex-container-right`}
            >
              <h3
                className={`section-3-flex-container-right-title`}
              >Positions</h3>
              <PaginationView
                cacheSize={3}
                totalClubbedPages={5}
                limit={limit}
                totalCols={"2"}
                colWidth={"100%"}
                View={ViewComponent}
                extractData={(res: Array<PositionType>): Array<PositionType> => {
                  return res;
                }}
                totalPages={totalPages}
                paginationListItemKey={'name'}
                paginationListItemFilterHandler={(searchQuery: string, paginatedListItem: any) => {
                  return (paginatedListItem?.name?.toLowerCase()?.includes(searchQuery.toLowerCase()));
                }}
                getData={(pageNo: number, limit: number) => {
                  return (getDataHandler(pageNo, limit));
                }}
                searchQuery={searchQuery}
                updateSearchQuery={(value: string) => {
                  setSearchQuery(value);
                }}
                showSearchBar={false}
              />
            </div>
          </div>
        </div>

        <div
          className={`event-details-save-section`}
        >
          <PrimaryBtn
            title={`Save Edits`}
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;