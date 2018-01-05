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
              <Link to="/our-story">
                Our Story
              </Link>
            </div>
          </div>
          <div className="visiting-sydney-content">
            <div className="card-category">
              <p className="text blue card-category-text">
                Places to Stay
              </p>
            </div>
            {data.accomodations.map(item =>
              <ul className="cards text ">
                <li className="blue card-description" key={item.region}>
                  <h2 className="light-text">{item.region}</h2>
                  <h3 className="light-text">{item.about}</h3>
                  <h3 className="light-text">{item.directions}</h3>
                  <h3 className="light-text">{item.drivingTime}</h3>
                  <h3 className="light-text">{item.drivingCost}</h3>
                </li>
                {item.hotels.map(hotel =>
                  <div>
                    <li className="card-detail1" href={hotel.website} key={hotel.name} >
                      <a href={hotel.website} target="_blank">
                        <img className="card-img" alt={`${hotel.name} photo`} src={`../hotels/${hotel.url}`} />
                        <br />
                        <p>{hotel.name}</p>
                        <p>{hotel.address}</p>
                        <p>{hotel.transit}</p>
                        <p>{hotel.priceRange}</p>
                      </a>
                    </li>
                  </div>
                )}
              </ul>
            )}
            <div className="card-category">
              <p className="text blue card-category-text">
                Things to Do
              </p>
            </div>
            {data.attractions.map(item =>
              <ul className="cards text ">
                <li className="blue card-description" key={item.region}>
                  {item.summary}
                </li>
                {item.activities.map(activity =>
                  <div>
                    <li className="card-detail1 margin" href={activity.website} key={activity.name} >
                      <a href={activity.website} target="_blank">
                        <img className="card-img" alt={`${activity.name} photo`} src={`../attractions/${activity.url}`} />
                        <br />
                        <p>{activity.name}</p>
                        <p>{activity.address}</p>
                        <p>{activity.transit}</p>
                        <p>{activity.priceRange}</p>
                      </a>
                    </li>
                  </div>
                )}
              </ul>
            )}
            <div className="card-category">
              <p className="text blue card-category-text">
                Places to Eat
              </p>
            </div>
            {data.food.map(item =>
              <ul className="cards text ">
                <li className="blue card-description" key={item.region}>
                  {item.summary}
                </li>
                {item.locations.map(location =>
                  <div>
                    <li className="card-detail1 margin" href={location.website} key={location.name} >
                      <a href={location.website} target="_blank">
                        <img className="card-img" alt={`${location.name} photo`} src={`../food/${location.url}`} />
                        <br />
                        <p>{location.name}</p>
                        <p>{location.address}</p>
                        <p>{location.details}</p>
                        <p>{location.priceRange}</p>
                      </a>
                    </li>
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
