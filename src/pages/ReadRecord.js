import React from 'react';
import Read from '../components/read';
import './style.css'


const ReadRecord = () => {
 

    return (
      <>
    
          <div className='container'>

    <h1>Records</h1>
    
    <Read />
   
{/* 
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
     
      <div className="modal-body">
        <p>Are you sure, you want to delete the record?</p>
      </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button  type="button"  className="btn btn-primary">Yes</button>
      </div>
    </div>
  </div>
</div> */}


    </div>
    </>
    )
  };
  
  export default ReadRecord;