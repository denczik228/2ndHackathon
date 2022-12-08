import React from "react";
import { Link, useNavigate} from 'react-router-dom'
import { useState } from "react";
import axios from "axios";


const Login = (props) => {
    console.log(props)

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    })

    const [loged, setLogged] = useState(false);

    const [err] = useState(false)

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
                password: inputs.password
            }
            console.log(userData);

            await axios.post('/auth/login', userData)
                .then((response) => {
                    console.log(response.status);
                    console.log(response.data)
                    if (response.data.token) {
                        console.log('Token')
                        setLogged(true)
                    }
                    navigate('/budget')
                })
                // .then(data=>console.log(data))
                .catch((error) => {
                    if (error.response) {
                        console.log(error);
                        console.log("server responded");
                    } else if (error.request) {
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                })

        }

        return (
            <div className='auth' >
                <div className="shadow">
                    <h1>Sign In</h1>
                    <form>
                        <input type="text" placeholder='username' name="username" value={inputs.username} onChange={handleChange} />
                        <input type="password" placeholder='password' name="password" value={inputs.password} onChange={handleChange} />
                        <button type='submit' onClick={handleSubmit}>Login</button>
                        <p>{err}</p>
                        <span>Don't you have an account?<Link to="/register">Register</Link></span>
                    </form>
                </div>
            </div>
        )
    
}

export default Login