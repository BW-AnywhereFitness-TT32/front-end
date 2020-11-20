import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const initialFormValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errorMessage, setErrorMessage] = useState('')
    const [showHints, setShowHints] = useState(false)

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
            setErrorMessage('Invalid Credentials')
        })
    }

    return (
        <div className='container'>
            <div className='shadowBox'>
                <h3>Already made an account?</h3>
                <p>Log in below!</p>
                {errorMessage === '' ? null : <p style={{fontWeight: 'bolder'}}>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <input placeholder='Username' name='username' type='text' value={formValues.username} onChange={handleChange} />
                    <input placeholder='Password' name='password' type='password' value={formValues.password} onChange={handleChange} />
                    <button className='button'><span>Log In</span></button>                    
                </form>
            </div>
            <div className='shadowBox'>
                <button className='button' style={{margin: '0 auto'}} onClick={() => setShowHints(!showHints)}><span>Example Logins</span></button>
                {showHints 
                    ?   <div>
                            <p>Instructor: Victoria-i, password</p>
                            <p>Client: Victoria-c, password</p>
                            <p>Admin: Justin, password</p>                       
                        </div>
                    :   null}

             
            </div>
        </div>
    )
}

export default Login
