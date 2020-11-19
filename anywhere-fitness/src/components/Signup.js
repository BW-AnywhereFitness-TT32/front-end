import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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

const initialFormValues = { username: '', email: '', password: '', role_id: '3'};

const Signup = () => {
  const [names, setNames] = useState(userList);
  const [formValues, setFormValues] = useState(initialFormValues);
  const history = useHistory();

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const submit = (evt) => {
    evt.preventDefault();
    // const newUser = {
    //   name: formValues.name.trim(),
    //   email: formValues.email.trim(),
    //   password: formValues.password.trim(),
    //   role_id: formValues.role_id.trim()
    // };
    // setNames(names.concat(newUser));
    // setFormValues(initialFormValues);
    console.log(formValues)
    axios
      .post('https://anywhere-fitness-tt32.herokuapp.com/api/auth/register', formValues)
      .then((res) => {
        console.log(res.data)
        history.push(`/login`)
      })
      .catch((err) => {
        console.log(err.message)
      })
  };

  return (
    <div className='container'>
      <div className='shadowBox'>
        <h3>First time? Register here!</h3>
        <p>Please enter your Name, Email, and Password.</p>
        <p>Instructors, please enter '2' as your secret code.</p>

        {/* {names.map((user, index) => {
          return(
            <div key={index}>
            {user.name}'s email is {user.email} and the password is {user.password}'
            </div>
          )
        })} */}
        
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

          <button className='button'><span>Submit</span></button>

        </form>
      </div>
    </div>
  )
}

export default Signup