// src/maincomponents/CalendarComponents/CalendarPage.js

import React, { useState, useEffect } from "react";
import CalendarMonth from "./CalendarMonth";
import CalendarDay from "./CalendarDay";
import "./CalendarPage.css";
import MommyAndMeInfo from './categories/mommyandme/MommyAndMeInfo'; // Import Mommy and Me info component
import WorkshopInfo from './categories/workshops/WorkshopInfo'; // Import workshop info component
import mommyAndMeEvents from "./categories/mommyandme/events"; // Import Mommy and Me events
import workshopEvents from "./categories/workshops/wsevents"; // Import workshop events

function CalendarPage() {
  // Initialize events object
  const [events, setEvents] = useState({});

  // Populate events object with Mommy and Me events and workshop events
  useEffect(() => {
    const updatedEvents = { ...events };

    // Populate with Mommy and Me events
    mommyAndMeEvents.forEach((event) => {
      const date = new Date(event.date);
      const month = date.getMonth() + 1;
      const day = date.getDate();

      if (!updatedEvents[month]) {
        updatedEvents[month] = {};
      }
      if (!updatedEvents[month][day]) {
        updatedEvents[month][day] = [];
      }
      updatedEvents[month][day].push(event);
    });

    // Populate with workshop events
    workshopEvents.forEach((event) => {
      const date = new Date(event.date);
      const month = date.getMonth() + 1;
      const day = date.getDate();

      if (!updatedEvents[month]) {
        updatedEvents[month] = {};
      }
      if (!updatedEvents[month][day]) {
        updatedEvents[month][day] = [];
      }
      updatedEvents[month][day].push(event);
    });

    setEvents(updatedEvents);
  }, []);

  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const numDaysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  const renderEmptyCells = () => {
    const emptyCells = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      emptyCells.push(<div key={`empty-${i}`} className="calendar-day"></div>);
    }
    return emptyCells;
  };

  const renderDaysOfWeek = () => {
    return daysOfWeek.map((day) => (
      <div key={day} className="calendar-day-of-week">
        {day}
      </div>
    ));
  };

  const renderDaysOfMonth = () => {
    const days = [];
    for (let day = 1; day <= numDaysInMonth; day++) {
      const eventList =
        (events[currentMonth + 1] && events[currentMonth + 1][day]) || []; // Get event list for the day
        const hasEvents = eventList.length > 0; // Check if there are any events

        // Conditional class based on whether the day has events
        const dayClassName = `calendar-day ${hasEvents ? 'has-events' : ''}`;
     
     
      days.push(
        <CalendarDay key={day} day={day} events={eventList} className={dayClassName}></CalendarDay>
      );
    }
    return days;
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[currentMonth];

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  return (
    <div className="calendar-page">
      <CalendarMonth month={`${monthName} ${currentYear}`} />

      <div className="calendar-nav">
        <button onClick={handlePrevMonth}>Previous Month</button>
        <button onClick={handleNextMonth}>Next Month</button>
      </div>

      <div className="calendar-header">{renderDaysOfWeek()}</div>
      <div className="calendar-days">
        {renderEmptyCells()}
        {renderDaysOfMonth()}
      </div>

      {/* Display Mommy and Me info */}
      <MommyAndMeInfo />
      
      {/* Display Workshop info */}
      <WorkshopInfo />
    </div>
  );
}

export default CalendarPage;
