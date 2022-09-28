import React, { useState, useEffect } from 'react';
import {Table} from 'react-bootstrap';

function MyDatatable() {

    const [Users, setUsers] = useState([]);

    const loadUsersData = async() => {
        // Query the API Gateway
        const response = await fetch('https://g23ni0eou8.execute-api.us-east-1.amazonaws.com/users');
        let jsonData = await response.json();

        // Assign response data to state variable
        setUsers(jsonData);
    }

    useEffect(() => {
        // Load users data from API Gateway
        loadUsersData();
    }, []);

    return (
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
    );
}

export default MyDatatable;