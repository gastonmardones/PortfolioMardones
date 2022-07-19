import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Gastón Mardones</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#works">Trabajos</Nav.Link>
              <Nav.Link href="#experience">Experiencia</Nav.Link>
              <Nav.Link href="#aboutme">Sobre mí</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
}

export default NavBar
