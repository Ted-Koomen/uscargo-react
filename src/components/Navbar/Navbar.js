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
        <NavItem>Nav1</NavItem>
        <NavItem>Nav2</NavItem>
        <NavItem>Nav3</NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavHeader
