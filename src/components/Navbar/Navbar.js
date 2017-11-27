import React, {Component} from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavHeader extends Component {

  handleClick = (e) => {
    var id = e.target.id
    if(id === "login") {
      console.log("login")
    } else if (id === "other-content") {
      console.log("other content")
    } else if (id === "other-other-content") {
      console.log("other other content")
    }
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            US Cargo
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem
            id="login"
            onClick={this.handleClick}>
            Login
          </NavItem>
          <NavItem
            id="other-content"
            onClick={this.handleClick}>
            Nav2
          </NavItem>
          <NavItem
            id="other-other-content"
            onClick={this.handleClick}>
            Nav3
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}

export default NavHeader
