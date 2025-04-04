import React, { useEffect, useState } from 'react'
import CustomerTable from './CustomerTable'
import axios from 'axios';
import { BASEURL } from '../../AppConstants';
import { useNavigate } from 'react-router-dom';

const Customer = () => {
    const navigate = useNavigate();
    const [customerData, setcustomerData] = useState([]);
    const fetchData = () => {
        axios.get(BASEURL).then((response) => {
            if (response.status === 200) {
                setcustomerData(response.data)
            } else {
                setcustomerData([])
            }
        }).catch((err) => {
            setcustomerData([])
            console.log(err)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <button className='btn btn-primary btn-md' onClick={()=>navigate(`add`)}>
                Add Customer
            </button>
            <CustomerTable customerData={customerData} />
        </>
    )
}

export default Customer