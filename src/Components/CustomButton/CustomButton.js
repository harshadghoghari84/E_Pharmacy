import { Button, Form } from "react-bootstrap";

export default function CustomButton(props) {
    return(
        <>
            <Form.Group className={props.formGroupClassName}>
                <Button variant="none" className={`custom-btn ${props.customBtnClassName}`}>{props.text}</Button>
            </Form.Group>
        </>
    )
}