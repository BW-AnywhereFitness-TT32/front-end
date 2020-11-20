import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


// const fakeSignupObj = {
//     "username": "test1",
//     "email": "test@test.com",
//     "password": "123456",
//     "role_id": 3
// }

// const Signup = () => {

//     return (
//         <div className='container'>
//             <div className='shadowBox'>
//                 <p>Sign up Here!</p>
//                 <p>Put your form here George 😎</p>
//             </div>
//         </div>
//     )
// }

const userList = [];

const initialFormValues = { username: '', email: '', password: '', role_id: ''};

const Signup = () => {
  const [names, setNames] = useState(userList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory();

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const submit = (evt) => {
    evt.preventDefault();
    let usersRole = formValues.role_id.trim()
    if (usersRole === '') {
      usersRole = 3
    }
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role_id: usersRole
    };
    setFormValues(initialFormValues);
    console.log(newUser)
    axios
      .post('https://anywhere-fitness-tt32.herokuapp.com/api/auth/register', newUser)
      .then((res) => {
        console.log(res.data)
        history.push(`/intro`)
      })
      .catch((err) => {
        setErrorMessage('An account already exists with those credentials.')
      })
  };

  return (
    <div className='container'>
      <div className='shadowBox'>
        <h3>First time? Register here!</h3>
        <p>Please enter your Name, Email, and Password.</p>
        {errorMessage === '' ? null : <p style={{fontWeight: 'bolder'}}>{errorMessage}</p>}
        
        
        <form onSubmit={submit}>
          <input
          placeholder='Username'
          name='username' 
          type='text'
          value={formValues.username}
          onChange={change}
          ></input>
          <input 
          placeholder='Email'
          name='email'
          type='text' 
          value={formValues.email} 
          onChange={change}
          ></input>
          <input 
          placeholder="Password"
          name='password'
          type='password' 
          value={formValues.password} 
          onChange={change}
          ></input>
          <input 
          placeholder='Secret Code'
          name='role_id'
          type='text' 
          value={formValues.role_id} 
          onChange={change}
          ></input>

          <button className='button'><span>Sign Up</span></button>

        </form>
        <br />
        <br />

      </div>
      <div className='shadowBox'>
        <p>Instructors, please enter '2' as your secret code.</p>
        <p>Administrators, please enter '1' as your secret code.</p>       
      </div>
    </div>
  )
}

export default Signup