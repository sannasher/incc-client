
/* src/maincomponents/CalendarComponents/EventModal.js */

import React from 'react';
import './EventModal.css';

const EventModal = ({ event, onClose }) => {
  // Function to embed Google Form dynamically
  const embedGoogleForm = () => {
    if (event.googleFormEmbedUrl) {
      return (
        <iframe
          src={event.googleFormEmbedUrl}
          width="640"
          height="500"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Google Form"
        ></iframe>
      );
    } else {
      return <p>No Google Form available</p>;
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className = "modal">
        <h2 className = "event-name">{event.name}</h2>
        <p className = "event-description">{event.description}</p>
        <p className = "event-time">Time: {event.time}</p>
        <p className = "event-location">Location: {event.location}</p>
        <p className = "event-note" >Notes: {event.specialNotes}</p>
        {/* Embed Google Form dynamically */}
        {embedGoogleForm()}
          <button className = "closeButton" onClick={onClose}>Close</button>
          </div>
      </div>
    </div>
  );
};

export default EventModal;
