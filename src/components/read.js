import { Table } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
export default function Read() { 
   
const [APIData, setAPIData, data] = useState([]);
useEffect(() => {
    axios.get(`https://651ef88f44a3a8aa476945fe.mockapi.io/fakeapi`)
    .then((response) => {
        setAPIData(response.data);
    })
       //eslint-disable-next-line react-hooks/exhaustive-deps   
}, [])
const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
}

const onDelete = (id) => {
    
    axios.delete(`https://651ef88f44a3a8aa476945fe.mockapi.io/fakeapi/${id}`)
    .then(() => {
       getData();
       window.alert("Data deleted succesfully!!!");
       window.location='./ReadRecord';
   })
}
const getData = () => {
    axios.get(`https://651ef88f44a3a8aa476945fe.mockapi.io/fakeapi`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}
  
//   const getData = () => {
//     axios.get(`https://651ef88f44a3a8aa476945fe.mockapi.io/fakeapi`)
//         .then((getData) => {
//              setAPIData(getData.data);
//          })
// }
    return (
       <>
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
  {APIData.map((data) => {
     return (
        <>
           <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
     
      <div className="modal-body">
        <p>Are you sure, you want to delete the record?</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button onClick={() => onDelete(data.id)}  type="button"  className="btn btn-primary">Yes</button>

      </div>

    </div>
  </div>
</div>

       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
           <Link to='/update'>  <Table.Cell> 
           <Button onClick={() => setData(data)}>Update</Button>
</Table.Cell></Link>
 <Table.Cell>


 {/* <Button onClick={() => onDelete(data.id)}>Delete</Button> */}
 <Button   data-toggle="modal" data-target="#exampleModal">Delete</Button>

 
</Table.Cell> 
        </Table.Row>
      
        </>
        
   )})}
</Table.Body>
      


            </Table>
     
        </div>
        {/* <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
     
      <div className="modal-body">
        <p>Are you sure, you want to delete the record?</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button onClick={() => onDelete(data.id)}  type="button"  className="btn btn-primary">Yes</button>

      </div>

    </div>
  </div>
</div> */}

        </>
    )
}

