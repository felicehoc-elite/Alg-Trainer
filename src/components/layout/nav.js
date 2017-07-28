import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

class Nav extends Component {
  render() {
    return <nav className="navbar navbar-light bg-faded">
      <div className="container">
        <div className="row">
          <a className="navbar-brand">
            ALG TRAINER <small> v0.1</small>
          </a>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><a className="nav-link" href="#/alg_sets">ALGSETS</a></li>
          </ul>

          <ul className="navbar-nav ml-auto">
            {
              this.props.user.authenticated
                ? <li className="nav-item">
                    <a className="nav-link">
                      <i className="fa fa-user-circle mr-2"></i>
                      {this.props.user.displayName}
                    </a>
                  </li>
                : <li>Sign up</li>
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
