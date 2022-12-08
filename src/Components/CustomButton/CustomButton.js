import { Button, Form, Spinner } from "react-bootstrap";

export default function CustomButton(props) {
  return (
    <>
      <Form.Group className={props.formGroupClassName}>
        <Button
          variant="none"
          disabled={props.disabled}
          type={props.type}
          className={`${props.disabled ? "custom-diseble-btn" : "custom-btn"} ${
            props.customBtnClassName
          }`}
          onClick={props.onClick}
        >
          {props.loading ? <Spinner animation="grow" size="sm" /> : props.text}
        </Button>
      </Form.Group>
    </>
  );
}
