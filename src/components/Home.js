import React from 'react';
import { Button } from 'react-md';

import '../assets/stylesheets/Home.scss';

const Home = () => {
  return (
    <div>
      <header><Button flat primary>Menu</Button></header>
      <main>
        <Button icon primary>keyboard_arrow_down</Button>
      </main>
    </div>
  );
};

export default Home;
