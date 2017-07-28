import React, { Component } from 'react'
import {
  NavDropdown,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class UserDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false
    }
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown.bind(this)}>
      <a className="nav-link" onClick={this.toggleDropdown.bind(this)} data-toggle="dropdown">
        <i className="fa fa-user-circle mr-2"></i>
        {this.props.username}
        &nbsp;
        <i className="fa fa-caret-down"></i>
      </a>
      <DropdownMenu right>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>
          <a onClick={this.props.signOut}>Sign out</a>
        </DropdownItem>
      </DropdownMenu>
    </NavDropdown>
  }
}
