import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("password is required"),
});

export const forgotPassSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const forgotPassConfirmSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required"),
  cnfPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
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
  fName: Yup.string().required("Firstname is required"),
  lName: Yup.string().required("Lastname is required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  city: Yup.string().required("City is required"),
  postcode: Yup.number().required("Postcode is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  phoneNo: Yup.string().required("Phone number is required")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits'),
  fName2: Yup.string().when('shipToOtherAdd', {
    is: true,
    then: Yup.string()
      .required('Firstname is required'),
  }),
  lName2: Yup.string().when('shipToOtherAdd', {
    is: true,
    then: Yup.string()
      .required('Lastname is required'),
  }),
  address2: Yup.string().when('shipToOtherAdd', {
    is: true,
    then: Yup.string()
      .required('Address is required'),
  }),
  city2: Yup.string().when('shipToOtherAdd', {
    is: true,
    then: Yup.string()
      .required('City is required'),
  }),
  state2: Yup.string().when('shipToOtherAdd', {
    is: true,
    then: Yup.string()
      .required('State is required'),
  }),
  country2: Yup.string().when('shipToOtherAdd', {
    is: true,
    then: Yup.string()
      .required('Country is required'),
  }),
  postcode2: Yup.string().when('shipToOtherAdd', {
    is: true,
    then: Yup.string()
      .required('Postalcode is required'),
  }),
});
