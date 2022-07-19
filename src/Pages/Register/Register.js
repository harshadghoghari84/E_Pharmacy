import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import "./Register.css";
export default function Register() {
    return(
        <>
        <section className="authentication-section">
            <div className="authentication-box-wrap">
                <h3 className="text-center position-relative authentication-title">Register</h3>
                <Form className="register-form">
                    <div className="form-scroll">
                        <CustomInput formGroupClassName="form-group" formLabel="First name" formType="name" customInputClassName=""/>
                        <CustomInput formGroupClassName="form-group" formLabel="Last name" formType="name" customInputClassName=""/>
                        <CustomInput formGroupClassName="form-group" formLabel="Phone number" formType="number" customInputClassName=""/>
                        <CustomInput formGroupClassName="form-group" formLabel="Email Address" formType="email" customInputClassName=""/>
                        <CustomInput formGroupClassName="form-group" formLabel="Password" formType="password" customInputClassName=""/>
                        <CustomInput formGroupClassName="form-group" formLabel="Password Confirm" formType="password" customInputClassName=""/>
                        <p>
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                            <Link to="/" className="hover-txt ms-2"><b>Privacy policy</b></Link>.
                        </p>
                    </div>
                    <Link to="/login"><CustomButton text="Register" formGroupClassName="form-group text-center w-100 mt-5 mb-0"/></Link>
                </Form>
            </div>
        </section>
        </>
    )
}