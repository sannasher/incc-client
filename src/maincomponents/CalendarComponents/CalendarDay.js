// src/maincomponents/CalendarComponents/CalendarDay.js

import React, { useState } from 'react';
import './CalendarDay.css';
import EventModal from './EventModal';

const CalendarDay = ({ day, events, className }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className={`calendar-day ${className}`}> {/* 2. Apply className prop */}
      <span>{day}</span>
      {events.map((event, index) => (
        <div key={index} onClick={() => handleEventClick(event)} className={`event ${event.type}`}>
          {event.name}
        </div>
      ))}
      {showModal && <EventModal event={selectedEvent} onClose={handleCloseModal} />}
    </div>
  );
};

export default CalendarDay;