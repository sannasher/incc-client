import React from 'react';
import './CenterHours.css';

const CenterHours = () => {
  return (
    <div className="center-hours">
      <h2 className="hours">Hours</h2>
      <div className="days"> 
      <div className="day">
        <div className="day-name">Monday</div>
        <div className="day-time">9:00 AM - 6:00 PM</div>
      </div>
      <div className="day">
        <div className="day-name">Tuesday</div>
        <div className="day-time">9:00 AM - 6:00 PM</div>
      </div>
      <div className="day">
        <div className="day-name">Wednesday</div>
        <div className="day-time">9:00 AM - 6:00 PM</div>
      </div>
      <div className="day">
        <div className="day-name">Thursday</div>
        <div className="day-time">9:00 AM - 6:00 PM</div>
      </div>
      <div className="day">
        <div className="day-name">Friday</div>
        <div className="day-time">9:00 AM - 6:00 PM</div>
      </div>
      <div className="day">
        <div className="day-name">Saturday</div>
        <div className="day-time">9:00 AM - 6:00 PM</div>
      </div>
      <div className="day">
        <div className="day-name">Sunday</div>
        <div className="day-time">Closed</div>
      </div>
       </div>
      <p className="timing-note">Timings are subject to change.</p>
    </div>
  );
};

export default CenterHours;
