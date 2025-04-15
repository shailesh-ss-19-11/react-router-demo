import React, { useEffect, useState } from 'react'
import CustomerTable from './CustomerTable'
import axios from 'axios';
import { BASEURL } from '../../AppConstants';
import { useNavigate } from 'react-router-dom';
import { getApi } from '../api/Api';
import { toastError, toastSuccess } from '../components/Toast';

const Customer = () => {
    const navigate = useNavigate();
    const [customerData, setcustomerData] = useState([]);
    const fetchData = () => {
        getApi(BASEURL,"",(data)=>{
            setcustomerData(data);
        },(err)=>{
            toastError(err.message)
            setcustomerData([])
        });
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