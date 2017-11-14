import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const NavHeader = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          US Cargo
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>Shit</NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavHeader
