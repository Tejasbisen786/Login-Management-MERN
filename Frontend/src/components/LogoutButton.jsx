// LogoutButton.js

import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const LogoutButton = ({ setLoggedIn }) => {
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/auth/logout');
      setLoggedIn(false); // Set logged in state to false on logout
      toast.success('Logout successful!');
    } catch (error) {
      console.error(error.response.data);
      toast.error('Logout failed.');
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
