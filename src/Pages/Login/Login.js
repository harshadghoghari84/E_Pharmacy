import { useLazyQuery, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import Mutation from "../../graphql/Mutation";
import Querys from "../../graphql/Query";
import { forgotPassSchema, loginSchema } from "../../helper/formikSchemas";
import constant from "../../utils/constant";
import { errorNotification, successNotification } from "../../utils/notification";
import "./Login.css";

const Login = ({ userStore, globalStore }) => {
  const navigate = useNavigate();

  const [forgotPasswordFlag, setForgotPasswordFlag] = useState(false);
  const [userSignIn, { loading }] = useMutation(Mutation.userSignIn, {
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });

  const [viewCart, { data, loading: cartLoading, errors: cartDataError }] = useLazyQuery(Querys.viewCart, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  const [forgotPassEmail, { loading: forgotMailLoading }] = useMutation(Mutation.forgotPassEmail, {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  });

  useEffect(() => {
    if (data) {
      globalStore.setCartData(data?.viewCart?.cartItems)
      navigate("/");
    }
  }, [data]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: ({ email, password }) => {
      userSignIn({
        variables: {
          email,
          password,
        },
      })
        .then(async ({ data, errors }) => {
          if (errors) {
            errorNotification(errors[0].message)
          }

          if (data.userSignIn !== null) {
            localStorage.setItem(constant.prfUserToken, data.userSingIn.token);
            userStore.setUser(data.userSingIn.user);
            viewCart();
            userStore.loadUserBillingDetails();
            successNotification("Login successfully!")
            // navigate("/");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  });

  const forgotFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPassSchema,
    onSubmit: ({ email }) => {
      forgotPassEmail({
        variables: {
          email
        },
      })
        .then(async ({ data, errors }) => {
          if (errors) {
            errorNotification(errors[0].message)
          }
          if (data) {
            successNotification(data?.sendForgotPassEmail)
          }
          setForgotPasswordFlag(false)
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  });

  return (
    <>
      <section className="authentication-section">
        <div className="authentication-box-wrap">
          <h3 className="text-center position-relative authentication-title">
            {!forgotPasswordFlag ? "Login" : "Forgot Password"}
          </h3>
          {!forgotPasswordFlag ?
            <Form onSubmit={formik.handleSubmit}>
              <CustomInput
                formGroupClassName="form-group"
                formLabel="Email ID"
                customInputClassName="*"
                formType="email"
                placeholder="Email ID"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                isError={formik.errors.email && formik.touched.email && Boolean(formik.errors.email)}
                errorMsg={formik.errors.email}
              />
              <CustomInput
                formGroupClassName="form-group"
                formLabel="Password"
                formType="password"
                customInputClassName="*"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                isError={
                  formik.errors.password && formik.touched.password && Boolean(formik.errors.password)
                }
                errorMsg={formik.errors.password}
              />
              <CustomButton
                type="submit"
                text="Login"
                disabled={loading || cartLoading}
                formGroupClassName="form-group text-center w-100 mt-5 mb-0"
              />
            </Form>
            :
            <Form onSubmit={forgotFormik.handleSubmit}>
              <CustomInput
                formGroupClassName="form-group"
                formLabel="Email ID"
                customInputClassName="*"
                formType="email"
                placeholder="Email ID"
                value={forgotFormik.values.email}
                onChange={forgotFormik.handleChange("email")}
                onBlur={forgotFormik.handleBlur("email")}
                isError={forgotFormik.errors.email && forgotFormik.touched.email && Boolean(forgotFormik.errors.email)}
                errorMsg={forgotFormik.errors.email}
              />
              <CustomButton
                type="submit"
                text="forgot Password"
                disabled={loading || cartLoading}
                formGroupClassName="form-group text-center w-100 mt-5 mb-0"
              />
            </Form>
          }
          <div className="text-center w-100 mt-2">
            {
              !forgotPasswordFlag ?
                <span className="highlight-txt" onClick={() => setForgotPasswordFlag(true)}>
                  Forgot Password
                </span>
                :
                <span className="highlight-txt" onClick={() => setForgotPasswordFlag(false)}>
                  Login
                </span>
            }
          </div>
          <div className="text-center w-100 mt-2">
            <Link to="/register" className="highlight-txt">
              Don't have an account ? Register here
            </Link>
          </div>
        </div>

      </section>
    </>
  );
};

export default inject("userStore", "globalStore")(observer(Login));
