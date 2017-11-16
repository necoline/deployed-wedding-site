import React, { Component } from 'react';
import './App.css';
import DecorationLine from './DecorationLine.js';

class EventDetails extends Component {
  render() {
    return (
      <div className="body">
        <div className="main-body">
          <div className="header">
            <DecorationLine />
            <p className="title text blue body-title">
              Event Details
            </p>
            <DecorationLine />
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetails;
