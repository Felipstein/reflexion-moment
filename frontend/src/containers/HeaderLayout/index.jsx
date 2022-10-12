import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Home from '../../pages/Home';
import Networking from '../../pages/Networking';

export function HeaderLayoutBuild({ page }) {
  return (
    <>
      <Header />
      {page}
    </>
  );
}

HeaderLayoutBuild.propTypes = {
  page: PropTypes.node.isRequired,
};

export function HomePage() {
  return (
    <HeaderLayoutBuild
      page={
        <Home />
      }
    />
  );
}

export function NetworkingPage() {
  return (
    <HeaderLayoutBuild
      page={
        <Networking />
      }
    />
  );
}

export const HeaderLayout = {
  Root: HeaderLayoutBuild,
  Home: HomePage,
  Networking: NetworkingPage,
};
