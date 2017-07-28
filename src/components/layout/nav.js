import React, { Component } from 'react'
import { Link, withRouter} from 'react-router-dom'

import UserDropdown from './user_dropdown'

class Nav extends Component {
  render() {
    return <nav className="navbar navbar-light bg-faded">
      <div className="container">
        <div className="row">
          <Link className="navbar-brand" to="/">
            ALG TRAINER <small> v0.1</small>
          </Link>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/alg_sets">ALGSETS</Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            {
              this.props.user.authenticated
                ? <UserDropdown username={this.props.user.displayName} signOut={this.props.signOut}/>
                : <li><a className="nav-link" onClick={this.props.signIn}>Sign in</a></li>
            }
          </ul>

          <span className="navbar-text">
          </span>

        </div>
      </div>
    </nav>
  }
}

export default withRouter(Nav)
