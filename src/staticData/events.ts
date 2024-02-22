import { v1 } from 'uuid';

import { EventType } from "../types/events";
import { DirectoryType } from '../types/components/directoryStructure';

const eventList: Array<EventType> = [
  {
    "id": "41f2c8f0-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 1",
    "eventStart": 1708544510719,
    "eventEnd": 1708544511719,
    "clientName": "client 1",
    "contactInfo": "1",
    "venue": "venue 1",
    "positions": [
      {
        "id": "41f2c8f1-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2c8f2-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2c8f3-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2c8f4-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2c8f5-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2c8f6-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2c8f7-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2c8f8-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2c8f9-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2c8fa-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2c8fb-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 2",
    "eventStart": 1708544510719,
    "eventEnd": 1708544511719,
    "clientName": "client 2",
    "contactInfo": "2",
    "venue": "venue 2",
    "positions": [
      {
        "id": "41f2c8fc-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2c8fd-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2c8fe-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2c8ff-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2c900-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2c901-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2c902-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2c903-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2c904-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2c905-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2c906-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 3",
    "eventStart": 1708544510719,
    "eventEnd": 1708544511719,
    "clientName": "client 3",
    "contactInfo": "3",
    "venue": "venue 3",
    "positions": [
      {
        "id": "41f2c907-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2c908-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2c909-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f000-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f001-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f002-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f003-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f004-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f005-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f006-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f007-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 4",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 4",
    "contactInfo": "4",
    "venue": "venue 4",
    "positions": [
      {
        "id": "41f2f008-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f009-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f00a-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f00b-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f00c-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f00d-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f00e-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f00f-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f010-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f011-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f012-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 5",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 5",
    "contactInfo": "5",
    "venue": "venue 5",
    "positions": [
      {
        "id": "41f2f013-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f014-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f015-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f016-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f017-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f018-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f019-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f01a-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f01b-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f01c-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f01d-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 6",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 6",
    "contactInfo": "6",
    "venue": "venue 6",
    "positions": [
      {
        "id": "41f2f01e-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f01f-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f020-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f021-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f022-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f023-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f024-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f025-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f026-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f027-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f028-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 7",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 7",
    "contactInfo": "7",
    "venue": "venue 7",
    "positions": [
      {
        "id": "41f2f029-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f02a-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f02b-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f02c-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f02d-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f02e-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f02f-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f030-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f031-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f032-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f033-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 8",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 8",
    "contactInfo": "8",
    "venue": "venue 8",
    "positions": [
      {
        "id": "41f2f034-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f035-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f036-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f037-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f038-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f039-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f03a-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f03b-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f03c-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f03d-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f03e-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 9",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 9",
    "contactInfo": "9",
    "venue": "venue 9",
    "positions": [
      {
        "id": "41f2f03f-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f040-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f041-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f042-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f043-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f044-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f045-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f046-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f047-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f048-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f049-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 10",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 10",
    "contactInfo": "10",
    "venue": "venue 10",
    "positions": [
      {
        "id": "41f2f04a-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f04b-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f04c-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f04d-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f04e-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f04f-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f050-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f051-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f052-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f053-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f054-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 11",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 11",
    "contactInfo": "11",
    "venue": "venue 11",
    "positions": [
      {
        "id": "41f2f055-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f056-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f057-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f058-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f059-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f05a-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f05b-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f05c-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f05d-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f05e-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f05f-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 12",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 12",
    "contactInfo": "12",
    "venue": "venue 12",
    "positions": [
      {
        "id": "41f2f060-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f061-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f062-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f063-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f064-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f065-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f066-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f067-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f068-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f069-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f06a-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 13",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 13",
    "contactInfo": "13",
    "venue": "venue 13",
    "positions": [
      {
        "id": "41f2f06b-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f06c-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f06d-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f06e-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f06f-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f070-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f071-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f072-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f073-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f074-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f075-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 14",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 14",
    "contactInfo": "14",
    "venue": "venue 14",
    "positions": [
      {
        "id": "41f2f076-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f077-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f078-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f079-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f07a-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f07b-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f07c-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f07d-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f07e-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f07f-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  },
  {
    "id": "41f2f080-d0f1-11ee-849c-43d249246329",
    "name": "Meeting Room 15",
    "eventStart": 1708544510720,
    "eventEnd": 1708544511720,
    "clientName": "client 15",
    "contactInfo": "15",
    "venue": "venue 15",
    "positions": [
      {
        "id": "41f2f081-d0f1-11ee-849c-43d249246329",
        "value": "position 1",
        "timeRange": [
          9,
          19
        ],
        "info": "info 1",
        "qty": 1,
        "contractor": "contractor 1"
      },
      {
        "id": "41f2f082-d0f1-11ee-849c-43d249246329",
        "value": "position 2",
        "timeRange": [
          9,
          19
        ],
        "info": "info 2",
        "qty": 2,
        "contractor": "contractor 2"
      },
      {
        "id": "41f2f083-d0f1-11ee-849c-43d249246329",
        "value": "position 3",
        "timeRange": [
          9,
          19
        ],
        "info": "info 3",
        "qty": 3,
        "contractor": "contractor 3"
      },
      {
        "id": "41f2f084-d0f1-11ee-849c-43d249246329",
        "value": "position 4",
        "timeRange": [
          9,
          19
        ],
        "info": "info 4",
        "qty": 4,
        "contractor": "contractor 4"
      },
      {
        "id": "41f2f085-d0f1-11ee-849c-43d249246329",
        "value": "position 5",
        "timeRange": [
          9,
          19
        ],
        "info": "info 5",
        "qty": 5,
        "contractor": "contractor 5"
      },
      {
        "id": "41f2f086-d0f1-11ee-849c-43d249246329",
        "value": "position 6",
        "timeRange": [
          9,
          19
        ],
        "info": "info 6",
        "qty": 6,
        "contractor": "contractor 6"
      },
      {
        "id": "41f2f087-d0f1-11ee-849c-43d249246329",
        "value": "position 7",
        "timeRange": [
          9,
          19
        ],
        "info": "info 7",
        "qty": 7,
        "contractor": "contractor 7"
      },
      {
        "id": "41f2f088-d0f1-11ee-849c-43d249246329",
        "value": "position 8",
        "timeRange": [
          9,
          19
        ],
        "info": "info 8",
        "qty": 8,
        "contractor": "contractor 8"
      },
      {
        "id": "41f2f089-d0f1-11ee-849c-43d249246329",
        "value": "position 9",
        "timeRange": [
          9,
          19
        ],
        "info": "info 9",
        "qty": 9,
        "contractor": "contractor 9"
      },
      {
        "id": "41f2f08a-d0f1-11ee-849c-43d249246329",
        "value": "position 10",
        "timeRange": [
          9,
          19
        ],
        "info": "info 10",
        "qty": 10,
        "contractor": "contractor 10"
      }
    ]
  }
];
const meetingRoomList = [
  {
    "id": "f1595df0-d0c3-11ee-bb21-6fa1bf615240",
    "title": "Meeting Room 1",
    "totalPositions": 1,
    "start": 1708525048143,
    "end": 1708525049143
  },
  {
    "id": "f1595df1-d0c3-11ee-bb21-6fa1bf615240",
    "title": "Meeting Room 2",
    "totalPositions": 2,
    "start": 1708525048143,
    "end": 1708525049143
  },
  {
    "id": "f1595df2-d0c3-11ee-bb21-6fa1bf615240",
    "title": "Meeting Room 3",
    "totalPositions": 3,
    "start": 1708525048143,
    "end": 1708525049143
  },
  {
    "id": "f1595df3-d0c3-11ee-bb21-6fa1bf615240",
    "title": "Meeting Room 4",
    "totalPositions": 4,
    "start": 1708525048143,
    "end": 1708525049143
  },
  {
    "id": "f1595df4-d0c3-11ee-bb21-6fa1bf615240",
    "title": "Meeting Room 5",
    "totalPositions": 5,
    "start": 1708525048143,
    "end": 1708525049143
  },
  {
    "id": "f1595df5-d0c3-11ee-bb21-6fa1bf615240",
    "title": "Meeting Room 6",
    "totalPositions": 6,
    "start": 1708525048143,
    "end": 1708525049143
  },
];

const leftSidebarDirectory: Array<DirectoryType> = [
  {
    id: v1(),
    name: 'Events',
    type: 'folder',
    expanded: false,
    children: [
      {
        id: v1(),
        name: 'New Requests',
        type: 'file',
        expanded: false,
        children: []
      },
      {
        id: v1(),
        name: 'Estimate',
        type: 'file',
        expanded: false,
        children: []
      },
      {
        id: v1(),
        name: 'Events',
        type: 'file',
        expanded: false,
        children: []
      },
      {
        id: v1(),
        name: 'Partial Requests',
        type: 'file',
        expanded: false,
        children: []
      }
    ],
  },
  {
    id: v1(),
    name: 'Positions',
    type: 'folder',
    expanded: false,
    children: []
  },
  {
    id: v1(),
    name: 'Contractors',
    type: 'folder',
    expanded: false,
    children: []
  },
  {
    id: v1(),
    name: 'Users',
    type: 'folder',
    expanded: false,
    children: [
      {
        id: v1(),
        name: 'Admins',
        type: 'file',
        expanded: false,
        children: []
      },
      {
        id: v1(),
        name: 'Clients',
        type: 'file',
        expanded: false,
        children: []
      },
      {
        id: v1(),
        name: 'Coordinators',
        type: 'file',
        expanded: false,
        children: []
      }
    ]
  },
  {
    id: v1(),
    name: 'Profile',
    type: 'folder',
    expanded: false,
    children: []
  }
];

console.log(leftSidebarDirectory, 'leftSidebarDirectory');
export { eventList, meetingRoomList, leftSidebarDirectory };
