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

import * as userActions from '../actions/user'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Nav user={this.props.user} signIn={this.props.signIn} signOut={this.props.signOut}/>

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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(userActions.signOut());
    },
    signIn: () => {
      dispatch(userActions.signIn());
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
