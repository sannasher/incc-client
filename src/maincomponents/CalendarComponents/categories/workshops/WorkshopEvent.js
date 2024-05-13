// incc/src/maincomponents/CalendarComponents/categories/workshops/WorkshopEvent.js

import React from 'react';
import './WorkshopEvent.css'; // Import CSS file

function WorkshopEvent({ event }) {
  // Destructure event details
  const { name, description, date, time, location } = event;

  return (
    <div className="workshop-event">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default WorkshopEvent;
