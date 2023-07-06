import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

function ProjectInfoCard() {
  // for validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // doesn't work if I pass default-font-color through index.css
  const labelStyle = {
    color: '#f6f1f1f3',
  };

  // for change enabling
  const [isChangeDisabled, setIsChangeDisabled] = useState(true);
  const [showSelectEmployees, setShowSelectEmployees] = useState(false);
  const [editOrSaveText, setEditOrSaveText] = useState('Edit');

  function enableInput() {
    setIsChangeDisabled(!isChangeDisabled);
    if (isChangeDisabled) {
      setEditOrSaveText('Save');
    } else {
      setEditOrSaveText('Edit');
    }
  }

  return (
    <Container fluid className="main-content-container my-5">
      <Card className="overflow-hidden table-dark">
        <Card.Header as="h5" className="d-flex justify-content-between">
          Project
          <Button
            variant="dark"
            type="submit"
            size="sm"
            className="rounded-pill"
            // eslint-disable-next-line react/jsx-no-bind
            onClick={enableInput}
          >
            {editOrSaveText}
          </Button>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <fieldset disabled={isChangeDisabled}>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="title">
                  <Form.Label style={labelStyle}>Title</Form.Label>
                  <Form.Control type="text" placeholder="Title" />
                </Form.Group>
                <Form.Group as={Col} md="9" controlId="description">
                  <Form.Label style={labelStyle}>Description</Form.Label>
                  <Form.Control type="text" placeholder="Description" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="noteTextArea">
                  <Form.Label style={labelStyle}>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Type your message here..."
                  />
                </Form.Group>
              </Row>
              <Row>
                <div className="mb-2 d-flex justify-content-start">
                  <FontAwesomeIcon
                    onClick={() => {
                      if (!isChangeDisabled) {
                        setShowSelectEmployees(!showSelectEmployees);
                      }
                    }}
                    icon={showSelectEmployees ? faSortUp : faSortDown}
                  />
                  Asign employees
                </div>
                <Form.Check aria-label="option 1" />
                <Form.Check aria-label="option 1" />
                <Form.Check aria-label="option 1" />
              </Row>
            </fieldset>
            <Row className="mb-3 d-flex justify-content-between">
              <Form.Group as={Col} md="10" controlId="creationDate">
                <Form.Label style={labelStyle}>Creation date</Form.Label>
                <Form.Control
                  style={labelStyle}
                  type="date"
                  readOnly
                  plaintext
                />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="lastUpdateDate">
                <Form.Label style={labelStyle}>Last update date</Form.Label>
                <Form.Control
                  style={labelStyle}
                  type="date"
                  readOnly
                  plaintext
                />
              </Form.Group>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProjectInfoCard;
