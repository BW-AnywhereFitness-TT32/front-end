import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const fakeSignupObj = {
    "username": "test1",
    "email": "test@test.com",
    "password": "123456",
    "role_id": 3
}

const Signup = () => {

    return (
        <div className='container'>
            <div className='shadowBox'>
                <p>Signup component</p>
                <p>Put your form here George 😎</p>
            </div>
        </div>
    )
}

export default Signup
