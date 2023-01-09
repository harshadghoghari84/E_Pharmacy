

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Mutation from "../../graphql/Mutation";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	const [verifyEmail] = useMutation(Mutation.verifyEmail, {
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	});

	console.log("params", param);

	useEffect(() => {
		const verifyEmailUrl = async () => {
			verifyEmail({ variables: { emailToken: param.token } })
				.then((res) => {
					if (res) {
						alert("Email verified successfully")
						setValidUrl(true)
					}
				})
				.catch((err) => {
					alert("not verified")
					setValidUrl(false)
				});
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<div className="container">
					{/* <img src={success} alt="success_img" className={styles.success_img} /> */}
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<button>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;