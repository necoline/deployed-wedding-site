import React, { Component } from 'react';
import './App.css';
import DecorationLine from './DecorationLine.js';

class EventDetails extends Component {
  render() {
    return (
      <div className="body">
        <header className="home-header">
          <h1 className="text title blue">Patrick + Necoline </h1>
          <p className="text sub-title blue">4.23.2018</p>
          <div className="side-menu text">
            <div className="side-menu-text">Our Story</div>
            <div className="side-menu-text">Visiting Sydney</div>
            <div className="side-menu-text">Event Details</div>
          </div>
        </header>
        <div className="main-body">
          <div className="header">
            <DecorationLine />
            <p className="title text blue body-title">
              Please RSVP by January 15, 2018
            </p>
            <DecorationLine />
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetails;
