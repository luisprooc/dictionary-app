import React, { useState } from "react";
import { Form, FormGroup, Input, Button, Container, Row, Col } from "reactstrap";
import FormResults from "./form-results";

const FormSeeker = () => {
  const [state, setState] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e.target[0].value}`)
      .then((data) => data.json())
      .then((data) => setState(data))
      .catch();
  }

  return (
  <Container fluid="md">
    <Form onSubmit={handleSubmit}>
      <Row className="justify-content-center g-0">
        <Col xs="8" md={{
          size: 6
        }}>
          <FormGroup>
            <Input
              name="word"
              placeholder="with a placeholder"
              type="text"
            />
          </FormGroup>
        </Col>
        <Col xs="4" className="m-0" md={{
          size: 1
        }}>
          <Button>Submit</Button>
        </Col>
      </Row>
    </Form>
    <FormResults data={state} />
    </Container>
  );
};

export default FormSeeker;
