import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  mobile: Yup.string().required("mobile Number is required"),
  password: Yup.string().required("password is required"),
});

export const signUpSchema = Yup.object().shape({
  fName: Yup.string().required("first Name is required"),
  lName: Yup.string().required("last name is required"),
  mobile: Yup.string().required("mobile Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const billingDetailsSchema = Yup.object().shape({
  fName: Yup.string().required("first Name is required"),
  lName: Yup.string().required("last name is required"),
  address: Yup.string().required("Address Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  city: Yup.string().required("City is required"),
  postcode: Yup.string().required("Postcode is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  phoneNo: Yup.string().required("Phone number is required"),
  companyName: Yup.string().required("companyName is required"),
});
