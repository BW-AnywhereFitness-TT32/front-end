import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const fakeLoginObj = {
    username: 'test',
    password: '123456'
}

const fakeSignupObj = {
    "username": "test",
    "email": "test@test.com",
    "password": "123456",
    "role": 3
}

const initialFormValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const history = useHistory()

    const handleChange = e =>
        setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
        });

    const handleSubmit = e => {
        e.preventDefault()
        axios
        .post('https://anywhere-fitness-tt32.herokuapp.com/api/auth/login', formValues)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token)
            history.push('/dashboard')
            setFormValues(initialFormValues)
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return (
        <div className='container'>
            <div className='shadowBox'>
                <p>Already made an account?</p>
                <p>Log in below!</p>
                <form onSubmit={handleSubmit}>
                    <input name='username' type='text' value={formValues.username} onChange={handleChange} />
                    <input name='password' type='password' value={formValues.password} onChange={handleChange} />
                    <button className='button'><span>Log In</span></button>                    
                </form>

            </div>
        </div>
    )
}

export default Login
