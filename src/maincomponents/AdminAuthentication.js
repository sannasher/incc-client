//incc/src/AdminAuthentication.js

// AdminAuthentication.js
// AdminAuthentication.js

import React, { useState } from 'react';

function AdminAuthentication({ onAuthenticated }) {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAuthenticate = async () => {
    setLoading(true);
    try {
      // Check if the entered password is correct
      if (password === 'adminpass') { // Replace 'adminpass' with your actual admin password
        // If successful, notify parent component
        onAuthenticated(true);
      } else {
        // Incorrect password alert
        alert('Incorrect password. Please try again.');
      }
    } catch (error) {
      // Handle errors
      console.error('Error authenticating admin:', error);
      alert('Error authenticating admin. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="password" value={password} onChange={handlePasswordChange} disabled={loading} />
      <button onClick={handleAuthenticate} disabled={loading}>{loading ? 'Authenticating...' : 'Authenticate'}</button>
    </div>
  );
}

export default AdminAuthentication;
