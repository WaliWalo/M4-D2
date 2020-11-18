import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Browse" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Sci-fi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Header />
        <Content />
      </>
    );
  }
}
export default NavBar;
