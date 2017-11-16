import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import EventDetails from './EventDetails';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/event-details" component={EventDetails} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>;

export default App;
