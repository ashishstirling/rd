// Please uncomment the comments in order to fetch data from Lambda functions over REST API
import React/*, { useState, useEffect }*/ from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container} from 'react-bootstrap';
// Please comment the following line when fetching data from Lambda functions over REST API
import Websites from './data/websites.json'

function MyNavbar() {

    /*
    const [Websites, setWebsites] = useState([]);

    const loadWebsitesData = async() => {
        // Query the API Gateway
        const response = await fetch('https://g23ni0eou8.execute-api.us-east-1.amazonaws.com/websites');
        let jsonData = await response.json();

        // Assign response data to state variable
        setWebsites(jsonData);
    }

    useEffect(() => {
        // Load websites data from API Gateway
        loadWebsitesData();
    }, []);
    */

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