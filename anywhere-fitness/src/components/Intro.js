import React from 'react'
import { useHistory } from 'react-router-dom'

const Intro = () => {

    const history = useHistory()

    return (
        <div className='container'>
            <div className='shadowBox'>
                <h3>Welcome to Anywhere Fitness!</h3>
                <h2>New Users</h2>
                <p>Search for classes, reserve your spot, earn stars, and stay up-to-date using your Client Dashboard</p>
                <h2>New Instructors</h2>
                <p>Manage your classes and punchcards right from your Instructor Dashboard</p>
                <p>Don't worry, you can sign up for classes too 🏋️‍♂️</p>
                <br />
                <p>For your security, please log in with the credentials you just created.</p>
                <button style={{margin: '0 auto'}} className='button' onClick={() => {history.push('/login')}}><span>Log In</span></button>
            </div>
        </div>
    )
}

export default Intro
