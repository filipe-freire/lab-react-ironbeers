import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './views/HomePage';
import Beers from './views/Beers';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import SingleBeer from './views/SingleBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/random-beer" component={RandomBeer} exact />
            <Route path="/new-beer" component={NewBeer} exact />
            <Route path="/beers" component={Beers} exact />
            <Route path="/beers/:id" component={SingleBeer} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
