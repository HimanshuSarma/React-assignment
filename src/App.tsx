import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { v1 } from 'uuid';

import Event from './components/Events/Event';
import EventDetails from './components/Events/EventDetails';

import { eventList } from './staticData/events';
import { EventType } from './types/events';

import './App.css'

export default function App() {

  const [events, setEvents] = useState<Array<EventType>>(eventList);

  // useEffect(() => {
  //   const meetingRoomsArr = [];
  //   for (let i = 0; i < 50; i++) {
  //     const meetingRoom = {
  //       id: v1(),
  //       title: `Meeting Room ${i + 1}`,
  //       totalPositions: i + 1,
  //       start: Date.now(),
  //       end: Date.now() + 1000,
  //     };

  //     meetingRoomsArr.push(meetingRoom);
  //   }

  //   console.log(meetingRoomsArr);
  // }, []);

  // useEffect(() => {
  //   const eventsArr = [];
  //   for (let i = 0; i < 15; i++) {
  //     const event: EventType = {
  //       id: v1(),
  //       name: `Meeting Room ${i + 1}`,
  //       eventStart: Date.now(),
  //       eventEnd: Date.now() + 1000,
  //       clientName: `client ${i + 1}`,
  //       contactInfo: `${i + 1}`,
  //       venue: `venue ${i + 1}`,
  //       positions: Array.from(Array(10).keys()).map((item, idx) => {
  //         return {
  //           id: v1(),
  //           value: `position ${idx + 1}`,
  //           timeRange: [9, 19],
  //           info: `info ${idx + 1}`,
  //           qty: idx + 1,
  //           contractor: `contractor ${idx + 1}`
  //         }
  //       })
  //     };

  //     eventsArr.push(event);
  //   }

  //   console.log(eventsArr);
  // }, []);

  return (
    <main>
      <Event
        events={events}
      />
    </main >
  )
}