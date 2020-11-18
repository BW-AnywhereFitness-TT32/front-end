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
    "role_id": 3
}

const Login = () => {

    const history = useHistory()

    const fakeLogin = e => {
        e.preventDefault()
        axios
            .post('https://anywhere-fitness-tt32.herokuapp.com/api/auth/login', fakeLoginObj)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const fakeSignup = e => {
        e.preventDefault()
        axios
            .post('https://anywhere-fitness-tt32.herokuapp.com/api/auth/register', fakeSignupObj)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='container'>
            <div className='shadowBox'>
                <p>Login component</p>
                <button className='button' onClick={fakeSignup}><span>Sign Up</span></button>
                <button className='button' onClick={fakeLogin}><span>Log In</span></button>
            </div>
        </div>
    )
}

export default Login
