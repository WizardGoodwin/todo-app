import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <Link to={'/'} className="navbar-brand text-white">
      Todo App
    </Link>
  );
};

export default Brand;
