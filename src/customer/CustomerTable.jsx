import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerTable = ({ customerData }) => {
    const navigate = useNavigate();
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Address</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {customerData && customerData.length > 0 ?
                    customerData.map((customer) => {
                        return (
                            <tr>
                                <th scope="row">{customer.id}</th>
                                <td>{customer.customer_name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.mobile}</td>
                                <td>{customer.address}</td>
                                <td>
                                    <button className='btn btn-secondary btn-sm m-1' onClick={()=>navigate(`/customer/update/${customer.id}`,{state:customer})}>update</button>
                                    <button className='btn btn-danger btn-sm m-1'>delete</button>
                                    <button className='btn btn-primary btn-sm m-1' onClick={()=>navigate(`/customer/details/${customer.id}`)}>View Detail</button>
                                </td>
                            </tr>
                        )
                    })
                    : null}
            </tbody>
        </table>
    )
}

export default CustomerTable