import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateCustomer = () => {
    const params = useParams();
    const [formData, setformData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {

    }
    console.log(formData);
    return (
        <div className='container'>
            <h1>Update Customer</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="customername" className="form-label">Customer Name</label>
                    <input type="text" onChange={handleChange} name='customer_name' value={formData?.customer_name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" onChange={handleChange} name='email' value={formData?.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="mobile" className="form-label">Mobile</label>
                    <input type="number" onChange={handleChange} name='mobile' value={formData?.mobile} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" onChange={handleChange} name='address' value={formData?.address} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <input type="submit" onChange={handleChange} value={"Submit"} className='btn btn-sm btn-success' />
            </form>
        </div>
    )
}

export default UpdateCustomer