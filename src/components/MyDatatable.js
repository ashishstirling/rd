import React from 'react';
import {Table} from 'react-bootstrap';

function MyDatatable() {

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