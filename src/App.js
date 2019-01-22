import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation navBrand={'Hokage'} />
        <div>
          <Route exact path="/home" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
        </div>
      </div>
    );
  }
}

export default App;
