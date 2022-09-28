import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container} from 'react-bootstrap';

function MyNavbar() {

    const Websites = [
        { "href": "https://google.com/", "target": "_blank", "name": "Google"},
        { "href": "https://amazon.co.uk/", "target": "_blank", "name": "Amazon"},
        { "href": "https://news.bbc.co.uk/", "target": "_blank", "name": "BBC"},
        { "href": "https://aws.amazon.com/", "target": "_blank", "name": "AWS"},
        { "href": "https://scotsoft.scot/", "target": "_blank", "name": "ScotSoft"}
      ];

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