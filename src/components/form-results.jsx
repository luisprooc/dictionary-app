import React from "react";
import { Container, Row, Col, List, ListInlineItem } from "reactstrap";

const FormResults = ({ data }) => {

  if(!data.length) return <h1 className="text-white text-center mt-4">NO RESULTS</h1>

  return(
    <Container fluid="md" className="mt-4">
      {data.map((info) => {
        const {
          meanings: [array],
        } = info;

        return (
          <Row>
            <Col lg={{ size: 6 }}>
              <h2 className="fw-bold text-white text-decoration-underline">Definitions</h2>
              <List>
                {array.definitions.map(({ definition, synonyms }) => {
                  return (
                    <li key={definition} className="text-white mb-2">
                      {definition}
                      {synonyms.length > 0 && (
                        <List className="fw-lighter">
                          <span className="fw-light">Synonyms: </span>
                          {synonyms.map((synonym) => (
                            <ListInlineItem key={synonym}> {synonym}</ListInlineItem>
                          ))}
                        </List>
                      )}
                    </li>
                );
                })}
              </List>
            </Col>
            <Col lg={{ size: 6 }}>
              <h3 className="fst-italic text-white">Examples</h3>
              <List type="unstyled" className="text-white">
              
              </List>
            </Col>
            <hr />
          </Row>
        );
      })}
    </Container>
  );
};

export default FormResults;
