import React, { Component } from 'react';
import './App.css';

class Rsvp extends Component {
  render() {
    return (
      <div className="body">
        {/* <h3 className="text blue sub-title">Please RSVP by January 15, 2018</h3> */}
        <div className="button-container">
          <a className="button text" role="button" tab="0" href="https://form.jotform.com/72808539884170">
            RSVP
          </a>
        </div>
        <div className="footer blue">
          “Who, being loved, is poor?” – Oscar Wilde
        </div>
      </div>
    );
  }
}

export default Rsvp;
