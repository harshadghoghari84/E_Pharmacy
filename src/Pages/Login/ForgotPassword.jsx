

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useFormik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import Mutation from "../../graphql/Mutation";
import { forgotPassConfirmSchema } from "../../helper/formikSchemas";
import { errorNotification, successNotification } from "../../utils/notification";

const ForgotPassword = () => {
    const param = useParams();
    const navigate = useNavigate();

    const [forgotPassword] = useMutation(Mutation.forgotPassword, {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
    });
    const [showPassword, setShowPassword] = useState(false)
    const [showCnfPassword, setCnfShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            password: "",
            cnfPassword: ""
        },
        validationSchema: forgotPassConfirmSchema,
        onSubmit: ({ password }) => {
            forgotPassword({ variables: { verificationCode: param?.token, newPassword: password } })
                .then(async ({ data, errors }) => {
                    console.log(data, errors);
                    if (errors) {
                        errorNotification(errors[0].message)
                    }
                    if (data) {
                        successNotification(data?.forgotPassword);
                        navigate("/login");
                    }
                })
                .catch((err) => {
                    console.log("err", err);
                });
        }
    });

    return (
        <>
            <Container>
                <Row>
                    <Col xs={8} md={6} className="mx-auto mt-5 p-4 border border-2">
                        <Form onSubmit={formik.handleSubmit}>
                            <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Password"
                                formType={showPassword ? "text" : "password"}
                                customInputClassName="*"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange("password")}
                                isError={
                                    formik.errors.password && formik.touched.password && Boolean(formik.errors.password)
                                }
                                errorMsg={formik.errors.password}
                                isIcon={showPassword ? <i class="ri-eye-line"></i> : <i class="ri-eye-off-line"></i>}
                                onClickOfIcon={() => setShowPassword(!showPassword)}
                            />
                            <CustomInput
                                formGroupClassName="form-group"
                                formLabel="Confirm Password"
                                formType={showCnfPassword ? "text" : "password"}
                                customInputClassName="*"
                                placeholder="Confirm Password"
                                value={formik.values.cnfPassword}
                                onChange={formik.handleChange("cnfPassword")}
                                isError={
                                    formik.errors.cnfPassword && formik.touched.cnfPassword && Boolean(formik.errors.cnfPassword)
                                }
                                errorMsg={formik.errors.cnfPassword}
                                isIcon={showCnfPassword ? <i class="ri-eye-line"></i> : <i class="ri-eye-off-line"></i>}
                                onClickOfIcon={() => setCnfShowPassword(!showCnfPassword)}
                            />
                            <CustomButton
                                type="submit"
                                text="Submit"
                                // disabled={loading}
                                formGroupClassName="form-group text-center w-100 mt-5 mb-0"
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ForgotPassword;