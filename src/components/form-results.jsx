import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

const FormResults = ({ data }) => {
  console.log(data)
  return data.length ? (
    <Container fluid="md">
      
    </Container>
  ): null;
};

export default FormResults;
