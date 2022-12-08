import React from 'react'

import { Link } from 'react-router-dom'

const Navbar= () => {
  return (
      <div className='navbar'>
      <div className='container2'>
        <div className='logo'><img src='/images/LD1.png'/></div>
              <div className='link'>
                  <Link className='link' to='/'>
                      <h5>Home</h5>
                  </Link>
                  <Link className='link' to='/Login'>
                      <h5>Log In</h5>
                  </Link>
                  <Link className='link' to='/Register'>
                      <h5>Register Form</h5>
                  </Link>
        </div>
      </div>
      </div>
  )
}

export default Navbar