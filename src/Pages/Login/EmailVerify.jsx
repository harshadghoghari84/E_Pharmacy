

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Mutation from "../../graphql/Mutation";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { errorNotification, successNotification } from "../../utils/notification";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(false);
	const param = useParams();

	const [verifyEmail] = useMutation(Mutation.verifyEmail, {
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	});

	const handleVerifyEmail = () => {
		verifyEmail({ variables: { emailToken: param?.token } })
			.then((res) => {
				if (res?.data?.verifyEmail) {
					successNotification(res?.data?.verifyEmail)
					setValidUrl(true)
				}
				if (res?.errors) {
					errorNotification(res?.errors?.[0]?.message)
					setValidUrl(false)
				}
			})
			.catch((err) => {
				setValidUrl(false)
			});
	};

	return (
		<>
			<Container>
				<Row>
					<Col className="text-center">
						{
							!validUrl ?
								<>
									<div style={{ fontSize: '150px', color: '#00a3c8' }}>
										<i class="ri-mail-line"></i>
									</div>
									<h2 className="text-bold">Confirm Your Email Address</h2>
									<p>Tap the button below to confirm your email address</p>
									<CustomButton
										text="Verify Email"
										formGroupClassName="form-group w-100 mb-0"
										onClick={() => handleVerifyEmail()}
										disabled={!param.token}
									/>
								</> :
								<>
									<div style={{ fontSize: '150px', color: 'green' }}>
										<i class="ri-checkbox-circle-line"></i>
									</div>
									<h2 className="text-bold">Your Email get verified Successfully</h2>
									<p>Tap the button below to continue Login</p>
									<Link to="/login">
										<CustomButton text="Login" />
									</Link>
								</>
						}

					</Col>
				</Row>
			</Container>
		</>
	);
};

export default EmailVerify;