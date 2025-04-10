import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Services = () => {
  return (
    <div>
      <Link to={"home-service"} className='m-1'>Home Service</Link>
      <Link to={"outsourcing"} className='m-1'>Outsoursing</Link>
      <Link to={"delivery"} className='m-1'>Delivery</Link>
      <Link to={"shipment"} className='m-1'>Shipment</Link>
      

      {/* nested routing outlet  */}
      <Outlet/>
    </div>
  )
}

export default Services