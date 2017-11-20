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
            <div className="card-category">
              <p className="text blue card-category-text">
                Accomodations
              </p>
            </div>
            {data.accomodations.map(item =>
              <ul className="cards text ">
                <li className="blue card-description" key={item.region}>
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
                    <li className="card-detail1" key={hotel.name}>
                      <img className="card-img" alt={`${hotel.name} photo`} src={`../hotels/${hotel.url}`} />
                      <br />
                      {hotel.name}
                      <br />
                      {hotel.address}
                      <br />
                      {hotel.transit}
                      <br />
                      {hotel.priceRange}
                    </li>
                  </div>
                )}
              </ul>
            )}
          </div>
          {/* <div className="faded-top" /> */}
        </div>
      </div>
    );
  }
}

export default VisitingSydney;
