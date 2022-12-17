import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Badge from "../../Components/Badge/Badge";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import "./Login.css";
import { inject, observer } from "mobx-react";
import { useFormik } from "formik";
import { loginSchema } from "../../helper/formikSchemas";
import { useLazyQuery, useMutation } from "@apollo/client";
import Mutation from "../../graphql/Mutation";
import Querys from "../../graphql/Query";
import constant from "../../utils/constant";
import { errorNotification, successNotification } from "../../utils/notification";

const Login = ({ userStore,globalStore }) => {
  const navigate = useNavigate();
  const [userSignIn, { loading }] = useMutation(Mutation.userSignIn, {
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });

  const [viewCart, { data, loading: cartLoading, errors: cartDataError }] = useLazyQuery(Querys.viewCart, {
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
      console.log("called submit",);
      userSignIn({
        variables: {
          email,
          password,
        },
      })
        .then(async ({data, errors}) => {
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
    },
  });

  return (
    <>
      <section className="authentication-section">
        <div className="authentication-box-wrap">
          <h3 className="text-center position-relative authentication-title">
            Login
          </h3>
          <Form onSubmit={formik.handleSubmit}>
            <CustomInput
              formGroupClassName="form-group"
              formLabel="Email ID"
              customInputClassName="*"
              formType="email"
              placeholder="Email ID"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("fName")}
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
              disabled={loading||cartLoading}
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
    </>
  );
};

export default inject("userStore","globalStore")(observer(Login));
