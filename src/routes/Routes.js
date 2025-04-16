import { lazy } from "react";
import Products from "../products/Products";
import Dummy from "../dummycomp/Dummy";
import Expo from "../MemoExperiment/Expo";

const App = lazy(() => import("./../App"));
const AddCustomer = lazy(() => import("../customer/AddCustomer"));
const Customer = lazy(() => import("../customer/Customer"));
const CustomerDetails = lazy(() => import("../customer/CustomerDetails"));
const UpdateCustomer = lazy(() => import("../customer/UpdateCustomer"));
const About = lazy(() => import("../web-content/About"));
const Contact = lazy(() => import("../web-content/Contact"));
const HomeServices = lazy(() => import("../web-content/HomeServices"));
const Outsourcing = lazy(() => import("../web-content/Outsoursing"));
const Services = lazy(() => import("../web-content/Services"));
const Testimonial = lazy(() => import("../web-content/Testimonial"));
const Page404NotFound = lazy(() => import("../Page404NotFound"));

export const routes = [
  {
    path: "*",
    component: Page404NotFound,
  },
  {
    path: "/home",
    component: App,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/services",
    component: Services,
    // nested routes ///////////////////////////////////////
    children: [
      {
        path: "/services/home-service",
        component: HomeServices,
      },
      {
        path: "/services/outsourcing",
        component: Outsourcing,
      },
    ],
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/testimonial",
    component: Testimonial,
  },
  {
    path: "/customer",
    component: Customer,
  },
  {
    path: "customer/add",
    component: AddCustomer,
  },
  {
    path: "/customer/details/:id",
    component: CustomerDetails,
  },
  {
    path: "/customer/update/:id",
    component: UpdateCustomer,
  },
  {
    path: "/products",
    component: Products
  },
  {
    path:"/dummy",
    component:Dummy
  },
  {
    path:"/memoexp",
    component:Expo
  }
];
