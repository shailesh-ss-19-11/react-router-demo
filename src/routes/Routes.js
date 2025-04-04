import App from "../App";
import AddCustomer from "../customer/AddCustomer";
import Customer from "../customer/Customer";
import CustomerDetails from "../customer/CustomerDetails";
import UpdateCustomer from "../customer/UpdateCustomer";
import About from "../web-content/About";
import Contact from "../web-content/Contact";
import Services from "../web-content/Services";
import Testimonial from "../web-content/Testimonial";

export const routes = [
    {
        path: '/',
        component: App
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
        component: Services
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