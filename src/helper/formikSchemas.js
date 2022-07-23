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
