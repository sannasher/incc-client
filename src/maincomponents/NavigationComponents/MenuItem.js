// src/components/maincomponents/NavigationComponents/MenuItem.js

import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ name, to }) => {
  return (
    <div>
      {/* Use Link component inside MenuItem */}
      <Link to={to}>{name}</Link>
    </div>
  );
};

export default MenuItem;
