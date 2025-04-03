import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './web-content/About.jsx'
import Contact from './web-content/Contact.jsx'
import Services from './web-content/Services.jsx'
import Testimonial from './web-content/Testimonial.jsx'
import Navbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Customer from './customer/Customer.jsx'
import CustomerDetails from './customer/CustomerDetails.jsx'
import UpdateCustomer from './customer/UpdateCustomer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/customer/details/:id' element={<CustomerDetails />} />
        <Route path='/customer/update/:id' element={<UpdateCustomer/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
