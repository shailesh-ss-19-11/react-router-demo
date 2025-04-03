import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BASEURL } from '../../AppConstants';
import axios from 'axios';

const CustomerDetails = () => {
  const [customerData, setcustomerData] = useState(null)
  const params = useParams();

  const fetchCustomerDetails = () => {
    axios.get(`${BASEURL}/${params.id}`).then((resp) => {
      if (resp.status === 200) {
        setcustomerData(resp.data)
      } else {
        setcustomerData(null)
      }
    }).catch(err => {
      console.log(err)
      setcustomerData(null)
    })
  }

  useEffect(() => {
    fetchCustomerDetails();
  }, [])

  console.log(customerData)
  return (
    <>
      <div className="card" style={{width:"18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Customer Details</h5>
          <div className="d-flex">
            <h4>Customer Name </h4>
            <span>{customerData?.customer_name}</span>
          </div>
          <div className="d-flex">
            <h4>Email</h4>
            <span>{customerData?.email}</span>
          </div>
          <div className="d-flex">
            <h4>Phone</h4>
            <span>{customerData?.mobile}</span>
          </div>
          <div className="d-flex">
            <h4>Address</h4>
            <span>{customerData?.address}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerDetails