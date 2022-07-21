import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Badge from "../../Components/Badge/Badge";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import "./Login.css";
export default function Login() {
    return(
        <>
        <Badge text="Your Profile is Regected" customBadgeName="danger-badge"/>
        <section className="authentication-section">
            <div className="authentication-box-wrap">
                <h3 className="text-center position-relative authentication-title">Login</h3>
                <Form>
                    <CustomInput formGroupClassName="form-group" formLabel="Email Address" formType="email" customInputClassName="" inputErrorClass="d-block" errorMsg="Please enter valid email address"/>
                    <CustomInput formGroupClassName="form-group" formLabel="Password" formType="password" customInputClassName=""/>
                    <Link to="/"><CustomButton text="Login" formGroupClassName="form-group text-center w-100 mt-5 mb-0"/></Link>
                    <div className="text-center w-100 mt-2">
                        <Link to="/register" className="highlight-txt">Forgot Password</Link>
                    </div>
                </Form>
            </div>
        </section>
        </>
    )
}