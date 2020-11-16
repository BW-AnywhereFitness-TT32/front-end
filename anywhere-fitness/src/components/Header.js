import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Anywhere Fitness</h1>
            <nav>
                <NavLink exact to='/' className='navLink' activeStyle={{ color: '#F5CB5C' }} >Home</NavLink>
                <NavLink to='/dashboard' className='navLink' activeStyle={{ color: '#F5CB5C' }} >Dashboard</NavLink>
                <NavLink to='/login' className='navLink' activeStyle={{ color: '#F5CB5C' }} >Log In</NavLink>
                <NavLink to='/signup' className='navLink' activeStyle={{ color: '#F5CB5C' }} >Sign Up</NavLink>
            </nav>
        </header>
    )
}

export default Header
