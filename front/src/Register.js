import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')


    function handelsubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:8080/register', { name,email,number,username, password })
            .then((result) => {
                if(result.status === 200){
                    console.log('everything is good')
                }                                      
            })
    }

    return (
        <div className='register'>                     
            <h2>Register</h2>                            


            <form method='POST' onSubmit={handelsubmit}>
                <input type='text'
                    name='name'
                    placeholder='name'
                    onChange={e => (setname(e.target.value))} value={name} /> <br />


                <input type='email'
                    name='email'
                    placeholder='email'
                    onChange={e => (setemail(e.target.value))} value={email} />   <br />


                <input type='text'
                    name='number'
                    placeholder='number'
                    onChange={e => (setnumber(e.target.value))} value={number} /><br />


                <input type='text'
                    name='username'
                    placeholder='username'
                    onChange={e => (setusername(e.target.value))} value={username} /><br />


                <input type='password'
                    name='password'
                    placeholder='password'
                    onChange={e => (setpassword(e.target.value))} value={password} /><br />


                <button type='submit' name='register' >register</button>
            </form>

            <Link to='/login'>login</Link>


        </div>
    )
}

export default Register;