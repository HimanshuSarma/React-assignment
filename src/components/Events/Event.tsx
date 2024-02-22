import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { CiLogout } from "react-icons/ci";

import EventRequests from './EventRequests';
import EventDetails from './EventDetails';
import DirectoryStructure from '../DirectoryStructure/DirectoryStructure';

import { leftSidebarDirectory } from '../../staticData/events';
import { EventType } from '../../types/events';
import { DirectoryType } from '../../types/components/directoryStructure'

import './Event.css';

interface EventPropType {
  events: Array<EventType>;
};

const Event: React.FC<EventPropType> = ({ events }): JSX.Element => {
  const [leftSidebar, setLeftSidebar] = useState<Array<DirectoryType>>(leftSidebarDirectory);

  return (
    <div
      className={`event-root-container`}
    >
      <div
        className={`event-1-1`}
      >
        <div
          className={`event-1-1-1`}
        >
          <DirectoryStructure
            directory={leftSidebar}
          />

          <div
            className={`logout-btn-container`}
          >
            <CiLogout />
            <button>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div
        className={`event-1-2`}
      >
        <Routes>
          <Route
            path='/'
            element={<EventRequests events={events} />}
          />

          <Route
            path="event-details/:id"
            element={<EventDetails />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Event;