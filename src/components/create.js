import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { useState } from 'react';


export default function Create() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {


    axios.post(`https://651ef88f44a3a8aa476945fe.mockapi.io/fakeapi`, {
      firstName,
      lastName,
      checkbox
    })
    window.alert("Record saved successfully!!!");

    window.location = './'
  }

  return (
    <div>
      <Form onSubmit={postData} className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input name="firstname" required placeholder='First Name'

            onChange={
              (e) => setFirstName(e.target.value)
            }
          />
         

        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input name="lastname" required placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
        
        </Form.Field><br></br>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' required onChange={(e) => setCheckbox(!checkbox)} />

        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}
