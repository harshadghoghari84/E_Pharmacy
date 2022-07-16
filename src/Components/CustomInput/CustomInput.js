import { Button, Form } from "react-bootstrap";

export default function CustomInput(props) {
    return(
        <>
            <Form.Group className={props.formGroupClassName}>
                <Form.Label>
                    {props.formLabel}
                </Form.Label>
                <Form.Control type={props.formType} placeholder={props.placeholder} name="" value="" className={`form-control cutom-input ${props.customInputClassName}`}></Form.Control>
            </Form.Group>
        </>
    )
}