import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
    render() {
        return <Navbar bg="primary" variant="dark" static="top">
        <Container>
        <Navbar.Brand href="#home">Children of Jacob</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About Us</Nav.Link>
      <Nav.Link href="#login">Login</Nav.Link>
    </Nav>
        </Container>
      </Navbar>;
    }
}

export default NavBar;