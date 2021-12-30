import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

const FormResults = ({ data }) => {
  return data.length ? (
    <Container fluid="md">
      {data.map(info => {
        const { meanings: [array] } = info;
        // console.log(array)

        return (
          <Row>
            <Col lg={{size: 6 }}>
              {array.definitions.map(({ definition }) => <p key={ definition }>{ definition }</p> )}
            </Col>
            <Col lg={{size: 6 }}>
            {array.definitions.map(({ synonyms }) => (
              console.log(synonyms)
              // synonyms.map(synonym => {
              //   console.log(synonym)
              //   return (
              //     <p> {synonym} </p> 
              //   )

              // })
              
            ))}
            </Col>
            <hr />
          </Row>
        )
      })}
    </Container>
  ): null;
};

export default FormResults;
