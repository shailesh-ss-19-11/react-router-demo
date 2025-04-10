import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setformData] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    }

    const submit = (e) => {
        const obj = { ...formData, expiresInMins: 30 }
        e.preventDefault();
        axios.post('https://dummyjson.com/auth/login', obj)
            .then((resp) => {
                if (resp.status === 200) {
                    localStorage.setItem('userData', JSON.stringify(resp.data))
                    navigate("/home")
                }
            }).catch((err) => {
                alert("something went wrong...")
                console.log("something went wrong....")
            })
    }
    return (
        <div className='container'>
            <h3>Login</h3>
            <form action="" onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="customername" className="form-label">Username</label>
                    <input type="text" onChange={handleChange} name='username' defaultValue={formData?.username} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="customername" className="form-label">Password</label>
                    <input type="password" onChange={handleChange} name='password' defaultValue={formData?.password} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <button className='btn btn-md btn-secondary'>Submit</button>
            </form>
        </div>
    )
}

export default Login