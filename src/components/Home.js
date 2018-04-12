import React, { Component } from 'react';
import { Button } from 'react-md';

import Header from './Header';
import AlexLean from '../assets/images/alex-lean.svg';
import '../assets/stylesheets/Home.scss';

class Home extends Component {

  render() {
    return (
      <main className="home-page-main-container">
        <Header />
        <img className="home-page-image" src={AlexLean}></img>
        <article className="home-page-arrow-container">
          <Button
            className="home-page-arrow-button"
            icon
          >
            keyboard_arrow_down
          </Button>
        </article>
        <article className="home-page-profile">
          <h2>Alexandra Robinson</h2>
          <p>
            Technology leader with a flair for uncovering simple solutions to complex
            problems. Results driven, people oriented, and passionate about building
            excellent software.
          </p>
        </article>
      </main>
    );
  }
};

export default Home;
