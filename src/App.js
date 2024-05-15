//src/app.js
import React, { useState } from "react"; // Import useState from React
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./maincomponents/NavigationComponents/Menu";
import HomePage from "./maincomponents/HomePageComponents/HomePage";
import AboutPage from "./maincomponents/AboutPageComponents/AboutPage";
import CalendarPage from "./maincomponents/CalendarComponents/CalendarPage";
import AdminAuthentication from "./maincomponents/AdminAuthentication";
import "./App.css"; // Import the CSS file

function App() {
  //keep track of whether user is authenticatedd or not
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthenticated = (isAuthenticated) => {
    setAuthenticated(isAuthenticated);
  };

  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/incc-client/" element={<HomePage />} />
          <Route path="/incc-client/about" element={<AboutPage />} />
          <Route path="/incc-client/calendar" element={<CalendarPage />} />
          <Route
            path="/incc-client/admin-authentication"
            element={
              <AdminAuthentication onAuthenticated={handleAuthenticated} />
            }
          />{" "}
          {/* Add a new route for Admin Authentication */}
        </Routes>
        {authenticated && <div>Authenticated!</div>}{" "}
        {/* Example of displaying a message when authenticated */}
      </div>
    </Router>
  );
}

export default App;
