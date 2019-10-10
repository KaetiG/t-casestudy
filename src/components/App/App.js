import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route, Redirect
} from 'react-router-dom';

import Home from '../Home/Home.js'

import { connect } from 'react-redux';

class App extends Component {
    render(){
        return (
            <>
            <Router>
            <div className="app">
            <Redirect exact from="/" to="/home" />
                {/* route for the home page component  */}
            <Route exact path="/home" component={Home} />
            </div>
            </Router>
            </>
        )
    }
}

export default connect()(App); //connects access to reduxState