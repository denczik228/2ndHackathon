import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";



const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [err] = useState(null)
  
  const navigate = useNavigate()

const handleChange = (e) => {
  const value = e.target.value;
  setInputs({
    ...inputs, [e.target.name]: value
  });
}
  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      username: inputs.username,
      password: inputs.password,
      email: inputs.email
    }
  
    await axios.post('/auth/register', userData)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      })
    navigate('/login')
  }
  
  return (
    <div className='auth' >
      <div className="shadow">
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder='username' name='username' value={inputs.username} onChange={handleChange} />
          <input required type="email" placeholder='email' name='email' value={inputs.email} onChange={handleChange} />
          <input required type="password" placeholder='password' name='password' value={inputs.password} onChange={handleChange} />
          <button type='submit' onClick={handleSubmit}>Register</button>
          <p>{err}</p>
          <span>Do you have an account?
            <Link to="/Login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Register