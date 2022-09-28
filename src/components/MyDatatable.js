import React from 'react';
import {Table} from 'react-bootstrap';
import Users from './data/users.json'

function MyDatatable() {

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