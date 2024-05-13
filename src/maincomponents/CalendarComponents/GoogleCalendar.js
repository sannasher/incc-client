// incc/src/GoogleCalendar.js

//GoogleCalendar.js

import { google } from 'googleapis';
import key from './IMPORTANTINCC.json'; // Import the JSON key file directly

// Initialize the Google Calendar API client using service account credentials
const auth = new google.auth.JWT(key.client_email, null, key.private_key, ['https://www.googleapis.com/auth/calendar']);
const calendar = google.calendar({ version: 'v3', auth });

// Function to fetch events from Google Calendar
async function fetchEvents() {
  try {
    const response = await calendar.events.list({
      calendarId: 'primary', // Change this to your calendar ID if not primary
      timeMin: new Date().toISOString(), // Fetch events from current date onwards
      maxResults: 10, // Maximum number of events to retrieve
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items;
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

export { fetchEvents };
