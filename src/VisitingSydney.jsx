import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class VisitingSydney extends Component {
  render() {
    return (
      <div className="body">
        <div className="visiting-sydney-body">
          <div className="header">
            <p className="title text blue body-title">
              Sydney
            </p>
          </div>
          <div className="top-menu text">
            <div className="top-menu-text-left">
              <Link to="/">
                Home
              </Link>
            </div>
            <div className="top-menu-text-center">
              <Link to="/event-details">
                Event Details
              </Link>
            </div>
            <div className="top-menu-text-right">
              <Link to="/">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VisitingSydney;
