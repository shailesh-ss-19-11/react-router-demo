import React, { useEffect, useState } from 'react'
import { data, useLocation, useNavigate, useParams } from 'react-router-dom'
import { BASEURL } from '../../AppConstants';
import axios from 'axios';
import { postData } from '../api/Api';

const AddCustomer = () => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(formData, (data) => {
            if (data) {
                navigate(-1)
            }
        }, (err) => {
            console.log(err)
        })
    }

    return (
        <div className='container'>
            <h1>Add Customer</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="customername" className="form-label">Customer Name</label>
                    <input type="text" onChange={handleChange} name='customer_name' defaultValue={formData?.customer_name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" onChange={handleChange} name='email' defaultValue={formData?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="mobile" className="form-label">Mobile</label>
                    <input type="text" onChange={handleChange} name='mobile' defaultValue={formData?.mobile} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" onChange={handleChange} name='address' defaultValue={formData?.address} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <input type="submit" onChange={handleChange} defaultValue={"Submit"} className='btn btn-sm btn-success' />
            </form>
        </div>
    )
}

export default AddCustomer