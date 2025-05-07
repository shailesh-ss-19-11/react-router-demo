import React from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../api/Api";
import { toastError, toastSuccess } from "../components/Toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BASEURL } from "../../AppConstants";

const AddCustomer = () => {
  const navigate = useNavigate();

  const initialValues = {
    customer_name: "",
    email: "",
    mobile: "",
    address: "",
  };

  const validationSchema = Yup.object({
    customer_name: Yup.string().min(5, "Min 5 characters").max(50, "Max 50 characters").required("Customer name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string().matches(/^\d{10}$/, "Mobile must be 10 digits").required("Mobile is required"),
    address: Yup.string().min(16, "Address should be at least 16 characters").required("Address is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      postData(
		BASEURL,
        values,
        (data) => {
          if (data) {
            toastSuccess("Customer Added");
            navigate(-1);
          }
        },
        (err) => {
          toastError(err.message);
        }
      );
    },
  });

  return (
    <div className="container">
      <h1>Add Customer</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="customer_name" className="form-label">Customer Name</label>
          <input
            type="text"
            name="customer_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.customer_name}
            className="form-control"
            id="customer_name"
          />
          {formik.touched.customer_name && formik.errors.customer_name && (
            <p className="text-danger">{formik.errors.customer_name}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-control"
            id="email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input
            type="text"
            name="mobile"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            className="form-control"
            id="mobile"
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <p className="text-danger">{formik.errors.mobile}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className="form-control"
            id="address"
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-danger">{formik.errors.address}</p>
          )}
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCustomer;
