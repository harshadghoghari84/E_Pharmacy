import React from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import Mutation from "../../graphql/Mutation";
import { useMutation } from "@apollo/client";
import "./Register.css";
import { signUpSchema } from "../../helper/formikSchemas";
import { useFormik } from "formik";
import Badge from "../../Components/Badge/Badge";
import constant from "../../utils/constant";

export default function Register() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState({ message: "", type: "" });
  const [userSignup, { loading }] = useMutation(Mutation.userSignup, {
    errorPolicy: "all",
  });
  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: ({ fName, lName, mobile, email, password }) => {
      console.log(fName, lName, mobile, email, password);
      userSignup({
        variables: {
          fName,
          lName,
          mobile,
          email,
          password,
        },
      })
        .then(async ({ data, errors }) => {
          if (data) {
            setMessage({
              message: "Account register successfully!",
              type: constant.badgeSucessType,
            });
            handleClick();
            setTimeout(() => {
              navigate("../login");
            }, 1000);
          }
          if (errors !== undefined) {
            // console.log("in-------errors");
            handleClick();
            setMessage({
              message: errors[0].message,
              type: constant.badgeDangerType,
            });
          }
        })
        .catch((err) => {
          console.log("register err", err);
        });
    },
  });

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <section className="authentication-section">
        <div className="authentication-box-wrap">
          <h3 className="text-center position-relative authentication-title">
            Register
          </h3>
          <Form onSubmit={formik.handleSubmit} className="register-form">
            <div className="form-scroll">
              <CustomInput
                placeholder="First Name"
                value={formik.values.fName}
                onChange={formik.handleChange("fName")}
                isError={formik.errors.fName && formik.touched.fName && Boolean(formik.errors.fName)}
                errorMsg={formik.errors.fName}
                formGroupClassName="form-group"
                formLabel="First name"
                formType="name"
                customInputClassName=""
              />
              <CustomInput
                placeholder="Last Name"
                value={formik.values.lName}
                onChange={formik.handleChange("lName")}
                isError={formik.errors.lName && formik.touched.lName && Boolean(formik.errors.lName)}
                errorMsg={formik.errors.lName}
                formGroupClassName="form-group"
                formLabel="Last name"
                formType="name"
                customInputClassName=""
              />
              <CustomInput
                placeholder="Mobile Number"
                value={formik.values.mobile}
                onChange={formik.handleChange("mobile")}
                isError={formik.errors.mobile && formik.touched.mobile && Boolean(formik.errors.mobile)}
                errorMsg={formik.errors.mobile}
                formGroupClassName="form-group"
                formLabel="Phone number"
                formType="text"
                customInputClassName=""
              />
              <CustomInput
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                isError={formik.errors.email && formik.touched.email && Boolean(formik.errors.email)}
                errorMsg={formik.errors.email}
                formGroupClassName="form-group"
                formLabel="Email Address"
                formType="email"
                customInputClassName=""
              />
              <CustomInput
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                isError={
                  formik.errors.password && formik.touched.password && Boolean(formik.errors.password)
                }
                errorMsg={formik.errors.password}
                formGroupClassName="form-group"
                formLabel="Password"
                formType="password"
                customInputClassName=""
              />
              <p>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
                <Link to="/" className="hover-txt ms-2">
                  <b>Privacy policy</b>
                </Link>
                .
              </p>
            </div>

            <CustomButton
              type="submit"
              text="Register"
              disabled={loading || !formik.isValid}
              loading={loading}
              formGroupClassName="form-group text-center w-100 mt-5 mb-0"
            />
          </Form>
        </div>
      </section>
      {open && <Badge text={message.message} customBadgeName={message.type} />}
    </>
  );
}
