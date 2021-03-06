import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import FormResults from "./form-results";
import { API_URL } from "../constants";

const FormSeeker = () => {
  const [state, setState] = useState(null);
  const [preValue, setPreValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target[0].value === preValue) return 

    fetch(API_URL + e.target[0].value)
      .then((data) => data.json())
      .then((data) => setState(data))
      .catch(() => setState([]));

    setPreValue(e.target[0].value);
  };

  return (
    <Container fluid="md">
      <Form onSubmit={handleSubmit} className="mt-4">
        <Row className="justify-content-center g-0">
          <Col
            xs="8"
            md={{
              size: 6,
            }}
          >
            <FormGroup>
              <Input name="word" placeholder="Type a word..." type="text" />
            </FormGroup>
          </Col>
          <Col
            xs="auto"
            lg={{
              size: 1,
            }}
          >
            <Button>Search</Button>
          </Col>
        </Row>
      </Form>
      {state && (<FormResults data={state} />)}

    </Container>
  );
};

export default FormSeeker;
