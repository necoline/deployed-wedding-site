import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class OurStory extends Component {
  render() {
    return (
      <div className="body">
        <div className="visiting-sydney-body">
          <div className="header">
            <p className="title text blue body-title">
              Our Story
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
              <Link to="/visiting-sydney">
                Visiting Sydney
              </Link>
            </div>
          </div>
          <div>
          {/* <img src="../about.png"/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default OurStory;
