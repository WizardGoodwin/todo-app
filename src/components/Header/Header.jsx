import React from 'react';

import Brand from './Brand/Brand';

const Header = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
      <div className="container">
        <Brand />
      </div>
    </nav>
  );
};

export default Header;
