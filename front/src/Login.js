import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const nevigate = useNavigate()

    function handelsubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:8080/login', { username, password })
            .then((result) => {
                if(result.status===200){
                    console.log(result.data)
                }  else{
                    console.log(result.status)
                } 
                console.log(result.status)                                   
            })
    }

    return (
        <div className='login'>
            <div className='header'>
                <h2>Login Page</h2>
                <form method='Post' onSubmit={handelsubmit}>
                    <input type='text'
                        placeholder='username'
                        value={username}
                        onChange={e => { setUsername(e.target.value) }} /><br />

                    <input type='text' placeholder='password' value={password} onChange={e => { setpassword(e.target.value) }} /><br />
                    <button type='submit'>Login</button>
                </form>
                <Link to='/'>register</Link>
            </div>
        </div>
    )
}

export default Login