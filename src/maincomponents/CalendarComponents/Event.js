
// src/maincomponents/CalendarComponents/Event.js

import React from 'react';

const Event = ({ eventName }) => {
  return (
    <div className="event">
      {eventName}
    </div>
  );
}

export default Event;
