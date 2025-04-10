import { lazy } from 'react';

const App = lazy(()=>import('./../App'))
// import App from "../App";
import Login from "../auth/Login";
import AddCustomer from "../customer/AddCustomer";
import Customer from "../customer/Customer";
import CustomerDetails from "../customer/CustomerDetails";
import UpdateCustomer from "../customer/UpdateCustomer";
import Page404NotFound from "../Page404NotFound";
import About from "../web-content/About";
import Contact from "../web-content/Contact";
import HomeServices from "../web-content/HomeServices";
import Outsourcing from "../web-content/Outsoursing";
import Services from "../web-content/Services";
import Testimonial from "../web-content/Testimonial";
export const routes = [
    {
        path: '*',
        component: Page404NotFound
    },
    {
        path: '/home',
        component: App
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/services',
        component: Services,
        // nested routes ///////////////////////////////////////
        children:[
            {
                path:"/services/home-service",
                component: HomeServices
            },
            {
                path:"/services/outsourcing",
                component: Outsourcing
            }
        ]
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: "/testimonial",
        component: Testimonial
    },
    {
        path: "/customer",
        component: Customer
    },
    {
        path: "customer/add",
        component: AddCustomer
    },
    {
        path: '/customer/details/:id',
        component: CustomerDetails
    },
    {
        path: '/customer/update/:id',
        component: UpdateCustomer
    }

]