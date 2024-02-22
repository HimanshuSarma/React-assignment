interface EventType {
  id: string;
  name: string;
  // data: any;
  eventStart: number;
  eventEnd: number;
  clientName: string;
  contactInfo: string;
  venue: string;
  positions: Array<PositionType>;
};

interface EventDetailsPropType {
  getEventHandler: (eventId: string) => void;
};

interface TabButtonPropType {
  title: string;
  tabChangeHandler: (tab: string) => void,
  className: string;
};

interface EventDetailsTab {
  title: string;
  id: string;
};

interface MeetingRoom {
  id: string,
  title: string,
  start: number,
  end: number,
  totalPositions: number
};

interface PositionType {
  id: string,
  value: string,
  timeRange: [number, number],
  info: string,
  qty: number,
  contractor: string,
};

export type { EventType, EventDetailsPropType, TabButtonPropType, EventDetailsTab, MeetingRoom, PositionType };