import React from 'react';
import Create from '../components/create';
import './style.css';

const Home = () => {
    return(
    <div className='container'>
    
    <h1>Add records</h1>
    <div className='Title-row'>
    <p className='para-tit'>THE CRUD OPERATIONS</p>
            <Create />
 

    </div>
    </div>
    )
  };
  
  export default Home;