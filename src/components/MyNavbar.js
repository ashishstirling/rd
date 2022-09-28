import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container} from 'react-bootstrap';
import Websites from './data/websites.json'

function MyNavbar() {

    return (
    <Navbar bg="light" expand="md">  
      <Container>
        <Navbar.Brand href="/">Sample App</Navbar.Brand>  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="me-auto">
            {Websites.map((data) => (
              <Nav.Link href={data.href} target={data.target}>{data.name}</Nav.Link>
            ))}
          </Nav>  
        </Navbar.Collapse>  
      </Container>  
    </Navbar>
    );
}

export default MyNavbar;