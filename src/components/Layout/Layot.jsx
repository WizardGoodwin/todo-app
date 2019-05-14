import React, { Fragment } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="container row mx-auto mb-5">
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
