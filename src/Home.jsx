import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Rsvp from './Rsvp.js';
import DecorationLine from './DecorationLine.js';

class Home extends Component {
  render() {
    return (
      <div className="body">
        <header className="home-header">
          <h1 className="text title blue">Patrick + Necoline </h1>
          <p className="text sub-title blue">4.23.2018</p>
          <div className="side-menu text">
            <div className="side-menu-text">Our Story</div>
            <Link to="/visiting-sydney">
              <div className="side-menu-text">Visiting Sydney</div>
            </Link>
            <Link to="/event-details">
              <div className="side-menu-text">Event Details</div>
            </Link>
          </div>
        </header>
        <div className="home-body">
          <div className="header">
            <DecorationLine />
            <p className="title text blue body-title">
              Please RSVP by January 15, 2018
            </p>
            <DecorationLine />
          </div>
          <Rsvp />
        </div>
      </div>
    );
  }
}

export default Home;
