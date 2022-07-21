import { Button, Form } from "react-bootstrap";

export default function CustomInput(props) {
    return(
        <>
            <Form.Group className={props.formGroupClassName}>
                <Form.Label>
                    {props.formLabel}
                    <span className="color-red ms-2">{props.compulsoryLabel}</span>
                </Form.Label>
                <Form.Control type={props.formType} placeholder={props.placeholder} name="" value="" className={`form-control cutom-input ${props.customInputClassName}`}></Form.Control>
                <span className={`error-msg-txt d-none ${props?.inputErrorClass}`}>{props.errorMsg}</span>
            </Form.Group>
        </>
    )
}