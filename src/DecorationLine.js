import React, { Component } from 'react';
import './App.css';

class DecorationLine extends Component {
  render() {
    return (
      <div className="dec-line">

        <svg width="245px" height="21px" viewBox="0 0 245 21" version="1.1">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
            <g id="Group-4" stroke="#1B5190">
              <path d="M94,19.5 L167,19.5" id="Line" stroke-width="1.5" />
              <path d="M0.5,10.5 L244.5,10.5" id="Line" />
              <path d="M94,1.5 L167,1.5" id="Line" stroke-width="1.5" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default DecorationLine;
