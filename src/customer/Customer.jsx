import React, { useEffect, useState } from 'react'
import CustomerTable from './CustomerTable'
import axios from 'axios';
import { BASEURL } from '../../AppConstants';

const Customer = () => {
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
            <CustomerTable customerData={customerData}/>
        </>
    )
}

export default Customer