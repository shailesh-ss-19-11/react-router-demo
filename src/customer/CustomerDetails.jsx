import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BASEURL } from '../../AppConstants';
import axios from 'axios';
import { getSingeEntityApi } from '../api/Api';

const CustomerDetails = () => {
  const [customerData, setcustomerData] = useState(null)
  const params = useParams();

  const fetchCustomerDetails = () => {
    getSingeEntityApi(params.id, (data) => {
      setcustomerData(data)
    }, (err) => {
      setcustomerData({})
    })
  }

  useEffect(() => {
    fetchCustomerDetails();
  }, [])

  console.log(customerData)
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
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