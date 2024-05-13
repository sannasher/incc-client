// incc/src/maincomponents/CalendarComponents/categories/mommyandme/MommyAndMeEvent.js

//defines a React component to display individual "Mommy and Me" events.
//accepts event details as props and renders them in a styled componen
//The CSS file (MommyAndMeEvent.css) provides styles for the event component.

import React from "react";
import "./MommyAndMeEvent.css"; // Import CSS file

function MommyAndMeEvent({ event }) {
  // Destructure event details
  const { name, description, date, time, location } = event;

  return (
    <div className="mommy-and-me-event">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
      <p>Special Notes: {specialNotes}</p>
      {googleFormEmbedUrl && (
        <iframe
          src={googleFormEmbedUrl}
          width="100%"
          height="500px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Google Form Embedded"
        >
          Loading...
        </iframe>
      )}
    </div>
  );
}

export default MommyAndMeEvent;
