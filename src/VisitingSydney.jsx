import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './data.json';
import './App.css';

class VisitingSydney extends Component {
  render() {
    return (
      <div className="body">
        <div className="visiting-sydney-body">
          <div className="header">
            <p className="title text blue body-title">
              Visiting Sydney
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
          <div className="visiting-sydney-content">
            <div class="card-category">
              Accomodations
            </div>
            {data.accomodations.map(item =>
              <ul class="cards">
                <li class="card-description">
                  {item.region}
                  <br />
                  {item.about}
                  <br />
                  {item.directions}
                  <br />
                  {item.drivingTime}
                  <br />
                  {item.drivingCost}
                </li>
                {item.hotels.map(hotel =>
                  <div>
                    <li class="card-detail1">
                      {hotel.name}
                    </li>
                    {/* <li class="card-detail2" />
                  <li class="card-detail3" /> */}
                  </div>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default VisitingSydney;
