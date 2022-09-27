import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, Table } from 'react-bootstrap';
import myLogo from './logo.svg';
 
function App() {

  const [showNav, setShowNav] = useState(false);

  const Websites = [
    { "href": "https://google.com/", "target": "_blank", "name": "Google"},
    { "href": "https://amazon.co.uk/", "target": "_blank", "name": "Amazon"},
    { "href": "https://news.bbc.co.uk/", "target": "_blank", "name": "BBC"},
    { "href": "https://aws.amazon.com/", "target": "_blank", "name": "AWS"},
    { "href": "https://scotsoft.scot/", "target": "_blank", "name": "ScotSoft"}
  ];
 
  const Users = [{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@gmail.com",
    "job_title": "Product Analyst"
  }, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@outlook.com",
    "job_title": "Product Developer"
  }, {
    "id": 3,
    "first_name": "Yana",
    "last_name": "Bea",
    "email": "ybea2@gmail.com",
    "job_title": "Squad Lead"
  }, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "willard@valek.com",
    "job_title": "Tech Lead"
  }];
 
return (
  <div>
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
    <div className='p-5'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.job_title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
);
}

export default App;