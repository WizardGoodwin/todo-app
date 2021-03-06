import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container pt-5">
      <h1 className="mt-5 text-center">Страница не найдена</h1>
      <p className="mt-3 text-center">Похоже, вы неправильно ввели адрес</p>
      <Link to="/">
        <p className="mt-3 text-center">Перейти на главную</p>
      </Link>
    </div>
  );
};

export default NotFound;
