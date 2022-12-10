import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='mynavbar'>
            <div className='logo'><img src='/images/LD1.png' /></div>
            <ul className='links'>
                <Link className='link' to='/'>
                    <li>Home</li>
                </Link>
                <Link className='link' to='/Login'>
                    <li>Log In</li>
                </Link>
                <Link className='link' to='/Register'>
                    <li>Register Form</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar