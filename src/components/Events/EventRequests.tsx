import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";

import PaginationView from '../Pagination/PaginationView';

import { ViewComponentProps } from '../../types/components/viewComponentTypes';
import { EventType } from '../../types/events';

import './EventRequests.css';

type sortingCriterias = 'name' | 'eventStart' | 'eventEnd' | 'clientName';

interface SortingObj {
  name: 'asc' | 'desc';
  eventStart: 'asc' | 'desc';
  eventEnd: 'asc' | 'desc';
  clientName: 'asc' | 'desc';
};

interface EventRequestsProps {
  events: Array<EventType>;
};

const ViewComponent: React.FC<ViewComponentProps> = ({ paginatedList, searchQuery, sortData }): JSX.Element => {

  const navigate = useNavigate();

  const [sorting, setSorting] = useState<SortingObj>({
    'name': 'asc',
    'eventStart': 'asc',
    'eventEnd': 'asc',
    'clientName': 'asc',
  });

  const sortingChangeHandler = (sortingCriteria: sortingCriterias) => {
    sortData?.(sorting[sortingCriteria] === 'asc' ? 'desc' : 'asc', 'name');
    setSorting((sorting: SortingObj) => {
      return {
        ...sorting,
        [sortingCriteria]: sorting[sortingCriteria] === 'asc' ? 'desc' : 'asc',
      };
    })
  }

  console.log('viewcomp', paginatedList);
  return (
    <table
      className={`event-table`}
    >
      <thead
        className={`event-table-head`}
      >
        <tr
          className={`event-table-head-table-row`}
        >
          <th>
            <div
              onClick={e => {
                sortingChangeHandler('name');
              }}
            >
              <p>Event Name</p>
              {sorting['name'] === 'asc' ? <IoMdArrowDropdownCircle size={20} /> : <IoMdArrowDropupCircle size={20} />}
            </div></th>
          <th>
            <div
              onClick={e => {
                sortingChangeHandler('eventStart');
              }}
            >
              <p>Event Start</p>
              {sorting['eventStart'] === 'asc' ? <IoMdArrowDropdownCircle size={20} /> : <IoMdArrowDropupCircle size={20} />}
            </div>
          </th>
          <th>
            <div
              onClick={e => {
                sortingChangeHandler('eventEnd');
              }}
            >
              <p>Event End</p>
              {sorting['eventEnd'] === 'asc' ? <IoMdArrowDropdownCircle size={20} /> : <IoMdArrowDropupCircle size={20} />}
            </div>
          </th>
          <th>
            <div
              onClick={e => {
                sortingChangeHandler('clientName');
              }}
            >
              <p>Client Name</p>
              {sorting['clientName'] === 'asc' ? <IoMdArrowDropdownCircle size={20} /> : <IoMdArrowDropupCircle size={20} />}
            </div>
          </th>
          <th>Contact Info</th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody

      >
        {paginatedList?.
          filter((event: EventType) => {
            return (event.name?.toLowerCase()?.includes(searchQuery?.toLowerCase() || ''));
          })?.
          map((event: EventType, idx: number) => {
            return (
              <React.Fragment
                key={event.id}
              >
                <tr
                  className={`event-table-body-row`}
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    navigate('event-details/' + event.id, {
                      state: event
                    });
                  }}
                >
                  <td>{event.name}</td>
                  <td>{`${(new Date(event.eventStart)).getDate()} - ${(new Date(event.eventStart)).getMonth()} - ${(new Date(event.eventStart)).getFullYear()}`}</td>
                  <td>{`${(new Date(event.eventEnd)).getDate()} - ${(new Date(event.eventEnd)).getMonth()} - ${(new Date(event.eventEnd)).getFullYear()}`}</td>
                  <td>{event.clientName}</td>
                  <td>{event.contactInfo}</td>
                  <td>{event.venue}</td>
                </tr>
              </React.Fragment>
            )
          })}
      </tbody>
    </table>
  );
};

const EventRequests: React.FC<EventRequestsProps> = ({ events }): JSX.Element => {
  const [limit, setLimit] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(events.length / limit));

  const [searchQuery, setSearchQuery] = useState<string>('');

  const getDataHandler = (pageNo: number, limit: number) => {
    console.log('getDataHandler', pageNo, limit);
    return [...events].slice((pageNo - 1) * limit, ((pageNo - 1) * limit) + limit);
  };

  return (
    <>
      <h1
        className={`event-1-2-primary-header`}
      >Event Requests</h1>
      <PaginationView
        cacheSize={3}
        totalClubbedPages={5}
        limit={limit}
        totalCols={"2"}
        colWidth={"600px"}
        View={ViewComponent}
        extractData={(res: Array<EventType>) => {
          return res;
        }}
        totalPages={totalPages}
        paginationListItemKey={'name'}
        paginationListItemFilterHandler={(searchQuery: string, paginatedListItem: any) => {
          return (paginatedListItem?.name?.toLowerCase()?.includes(searchQuery.toLowerCase()));
        }}
        getData={(pageNo: number, limit: number): Array<EventType> => {
          return (getDataHandler(pageNo, limit));
        }}
        searchQuery={searchQuery}
        updateSearchQuery={(value: string) => {
          setSearchQuery(value);
        }}
        showSearchBar={true}
      />
    </>
  );
};

export default EventRequests;