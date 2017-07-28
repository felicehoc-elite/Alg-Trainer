import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom'

import Nav from './layout/nav'
import Dashboard from './dashboard/'
import AlgSets from './algsets/'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Nav user={this.props.user}/>

          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/alg_sets" component={AlgSets}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

App = connect(mapStateToProps)(App)
export default App;
