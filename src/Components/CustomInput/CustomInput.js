import { Form } from "react-bootstrap";

export default function CustomInput(props) {
  return (
    <>
      <Form.Group className={props.formGroupClassName}>
        <Form.Label>
          {props.formLabel}
          <span className="color-red ms-2">{props.compulsoryLabel}</span>
        </Form.Label>
        <Form.Control
          type={props.formType}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className={`form-control cutom-input ${props.customInputClassName}`}
        ></Form.Control>
        {props.isError && (
          <span
            className={`error-msg-txt ${props.isError ? "d-block" : "d-none"} ${
              props?.inputErrorClass
            }`}
          >
            {props.errorMsg}
          </span>
        )}
      </Form.Group>
    </>
  );
}
