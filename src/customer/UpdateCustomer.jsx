import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BASEURL } from '../../AppConstants';
import axios from 'axios';

const UpdateCustomer = (props) => {
    const location = useLocation();
    console.log(location,"location")
    const params = useParams();
    const navigate = useNavigate();
    // const [formData, setformData] = useState(location.state ? location.state : null);
    const [formData, setformData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${BASEURL}/${params.id}`, formData).then((resp) => {
            console.log(resp)
            if (resp.status === 200) {
                navigate(-1)
            }
        })
    }
    console.log(formData);

    const fetchCustomerData = () => {
        axios.get(`${BASEURL}/${params.id}`).then((resp) => {
            console.log(resp)
            if (resp.status === 200) {
                setformData(resp.data);
            } else {
                setformData(null)
            }
        }).catch((err) => {
            console.log(err)
            setformData(null)
        })
    }

    useEffect(() => {
        fetchCustomerData()
    }, [])
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
                    <input type="text" onChange={handleChange} name='mobile' value={formData?.mobile} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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