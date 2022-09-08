import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const ListAllOwners = ({owners, handleDelete, handleGetDetails}) => {
  return (
    <div>
      <hr />
      <br />
   

      <Table striped bordered hover>
      <thead>
        <tr className="table-header">
          <th>Name</th>
          <th>e-mail</th>
          <th>Details</th>
          <th>Delete</th>
        </tr>
       </thead>
       <tbody>
        {owners.map((owner, key) => {
          return (
            <tr key={key} className="table-row">
              <td>{owner.firstName}  {owner.lastName}</td>
              <td>{owner.email}</td>
              <td>
                <Link to={`/owners/${owner.id}`}><button className="btn btn-secondary">Details</button> </Link>
              </td>
              <td>
                  <button className="btn btn-secondary" onClick={() => handleDelete(owner.id)}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    

    </div>
  )
}

export default ListAllOwners
