import React, { Component } from 'react';
import './App.css';

class Rsvp extends Component {
  render() {
    return (
      <div className="body">
        {/* <h3 className="text blue sub-title">Please RSVP by January 15, 2018</h3> */}
        <div className="button-container">
          <div className="outer-box">
            <div className="inner-box">
              <a className="button" role="button" tab="0" href="https://form.jotform.com/72808539884170">
                <p className="text">RSVP</p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer blue">
          “Who, being loved, is poor?” – Oscar Wilde
        </div>
      </div>
    );
  }
}

export default Rsvp;
