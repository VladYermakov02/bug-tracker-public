import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import TicketDropdown from '../TicketDropdown/TicketDropdown';

function TicketInfoCard() {
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
  const [editOrSaveText, setEditOrSaveText] = useState('Edit');

  function enableInput() {
    setIsChangeDisabled(!isChangeDisabled);
    if (isChangeDisabled) {
      setEditOrSaveText('Save');
    } else {
      setEditOrSaveText('Edit');
    }
  }

  // TODO: add real data later
  const items: string[] = ['none', 'low', 'medium'];
  return (
    <Container fluid className="main-content-container my-5">
      <Card className="overflow-hidden table-dark">
        <Card.Header as="h5" className="d-flex justify-content-between">
          Ticket
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
                <Form.Group as={Col} md="4" controlId="assignedDeveloper">
                  <Form.Label style={labelStyle}>Assigned developer</Form.Label>
                  <Form.Control type="text" placeholder="Assigned developer" />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="submitter">
                  <Form.Label style={labelStyle}>Submitter</Form.Label>
                  <Form.Control type="text" placeholder="Submitter" />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="project">
                  <Form.Label style={labelStyle}>Project</Form.Label>
                  <Form.Control type="text" placeholder="Project" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="ticketPriority">
                  <Form.Label style={labelStyle}>Ticket priority</Form.Label>
                  <TicketDropdown items={items} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="ticketStatus">
                  <Form.Label style={labelStyle}>Ticket status</Form.Label>
                  <TicketDropdown items={items} />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="ticketType">
                  <Form.Label style={labelStyle}>Ticket type</Form.Label>
                  <TicketDropdown items={items} />
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
              <Row className="mb-3">
                <Form.Group controlId="formFileMultiple">
                  <Form.Label style={labelStyle}>
                    Add multiple files input example
                  </Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
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

export default TicketInfoCard;
