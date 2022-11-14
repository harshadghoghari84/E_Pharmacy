import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Badge from "../../Components/Badge/Badge";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import "./Login.css";
import { inject, observer } from "mobx-react";
import { useFormik } from "formik";
import { loginSchema } from "../../helper/formikSchemas";
import { useMutation } from "@apollo/client";
import Mutation from "../../graphql/Mutation";
import constant from "../../utils/constant";

const Login = ({ userStore }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState({ message: "", type: "" });
  const [userSignIn, { loading }] = useMutation(Mutation.userSignIn, {
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  }, [open]);

  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: ({ mobile, password }) => {
      console.log("called submit");
      userSignIn({
        variables: {
          mobile,
          password,
        },
      })
        .then(async ({ data, errors }) => {
          console.log("data--", data);
          console.log("errors--", errors);
          if (data) {
            localStorage.setItem(constant.prfUserToken, data.userSingIn.token);
            userStore.setUser(data.userSingIn.user);
            setMessage({
              message: "Login successfully!",
              type: constant.badgeSucessType,
            });
            handleClick();
            setTimeout(() => {
              console.log("navigate");
              navigate("/");
            }, 1000);
          }
          if (errors !== undefined) {
            handleClick();
            setMessage({
              message: errors[0].message,
              type: constant.badgeDangerType,
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
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
            Login
          </h3>
          <Form onSubmit={formik.handleSubmit}>
            <CustomInput
              placeholder="Mobile Number"
              value={formik.values.mobile}
              onChange={formik.handleChange("mobile")}
              isError={formik.errors.mobile && Boolean(formik.errors.mobile)}
              errorMsg={formik.errors.mobile}
              formGroupClassName="form-group"
              formLabel="Mobile"
              formType="mobile"
              customInputClassName=""
            />
            <CustomInput
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              isError={
                formik.errors.password && Boolean(formik.errors.password)
              }
              errorMsg={formik.errors.password}
              formGroupClassName="form-group"
              formLabel="Password"
              formType="password"
              customInputClassName=""
            />

            <CustomButton
              type="submit"
              text="Login"
              disabled={loading || !formik.isValid}
              formGroupClassName="form-group text-center w-100 mt-5 mb-0"
            />

            <div className="text-center w-100 mt-2">
              <Link to="/register" className="highlight-txt">
                Forgot Password
              </Link>
            </div>
            <div className="text-center w-100 mt-2">
              <Link to="/register" className="highlight-txt">
                Don't have an account ? Register here
              </Link>
            </div>
          </Form>
        </div>
      </section>
      {open && <Badge text={message.message} customBadgeName={message.type} />}
    </>
  );
};

export default inject("userStore")(observer(Login));
