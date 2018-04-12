import React from 'react';
import { Button } from 'react-md';

import Header from './Header';
import '../assets/stylesheets/Home.scss';

const Home = () => {
  return (
    <main className="home-page-main-container">
      <Header />
      <article className="home-page-arrow-container">
        <Button
          className="home-page-arrow"
          icon
          primary
        >
          keyboard_arrow_down
        </Button>
      </article>
    </main>
  );
};

export default Home;
