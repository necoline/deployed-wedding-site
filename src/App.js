import React, { Component } from 'react';
import './App.css';
import Rsvp from './Rsvp.js';
import DecorationLine from './DecorationLine.js';

class App extends Component {
  render() {
    return (
      <div className="body">
        <header className="home-header">
          <h1 className="text title blue">Patrick + Necoline </h1>
        </header>
        <div className="main-body">
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

export default App;
