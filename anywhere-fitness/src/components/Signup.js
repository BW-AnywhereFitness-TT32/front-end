import React, { useState } from 'react';
import { render } from 'react-dom';
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

const initialFormValues = { name: 'hello', email: 'hello@hello.com', password: 'hello'};

function Signup() {
  const [names, setNames] = useState(userList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    };
    setNames(names.concat(newUser));
    setFormValues(initialFormValues);
  };

  return (
    <div className='container'>
      <h1>Anywhere Fitness Sign-up</h1>
      <p>Please enter your Name, Email, and Password.</p>

      {names.map((user, index) => {
        return(
          <div key={index}>
          {user.name}'s email is {user.email} and the password is {user.password}'
          </div>
        )
      })}
      
      <form onSubmit={submit}>
        <input
        name='name' 
        type='text'
        value={formValues.name}
        onChange={change}
        ></input>

        <input 
        name='email'
        type='text' 
        value={formValues.email} 
        onChange={change}
        ></input>

        <input 
        name='password'
        type='text' 
        value={formValues.password} 
        onChange={change}
        ></input>

        <button>Submit</button>

      </form>
    </div>
  )
}

render(
  <>
    <Signup />
    {/* <App /> */}
  </>
  , document.querySelector('#root')
)

export default Signup
