import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()

    return (
        <div className='container'>
            <div className='shadowBox'>
                <p><span className='logoText'>Anywhere Fitness is the all-in-one solution to meet your “on-location” fitness class needs.</span> </p>
                <p>Anywhere Fitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes, wherever they might be held.</p>
                <div className='groupedButtons'>
                    <button className='button' onClick={() => {history.push('/login')}}><span>Log In</span></button>
                    <button className='button' onClick={() => {history.push('/signup')}}><span>Sign Up</span></button>
                </div>
            </div>
        </div>
    )
}

export default Home
