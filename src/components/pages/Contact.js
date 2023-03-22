
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function ContactMe(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setMessage(inputValue);
        } 
        if(name.length === 0 && message.length === 0){
            setErrorMessage('Please enter name and message');
        }else if(!re.test(String(email).toLowerCase())){
            setErrorMessage('Please enter a valid email');
        }
        else {
            setErrorMessage('');
        } 
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();

        setName('');
        setMessage('');
        setEmail('');
      };

    return (
        <div>
            <p>Contact Me</p> 
            {errorMessage && (
                <div>
                 <Alert key={'info'} variant={'info'}>
                 {errorMessage}
                 </Alert>
                </div>

      )}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
  <Button variant="info" onClick={handleFormSubmit}>Submit</Button>{' '}
        </div>
    )
}