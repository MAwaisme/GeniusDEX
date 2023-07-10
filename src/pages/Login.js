import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {

    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);

    const loginHandle = () => {
        axios.post()
    }

    return (
        <div className='Login-wrapper'>
            <div className='my-form'>
                <input placeholder='Please Enter Your Email' type='text' onChange={(e) => setemail(e.target.value)} />
                <input placeholder='Please Enter Password' type='password' onChange={(e) => setpassword(e.target.value)} />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login