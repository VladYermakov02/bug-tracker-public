import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Profile() {
  // for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  // for radio buttons
  const [item, setItem] = useState({ authorityLevel: '', another: 'another' });

  const { authorityLevel } = item;

  const handleChange = (event: any) => {
    event.persist();
    // console.log(event.target.value);

    setItem((prevState) => ({
      ...prevState,
      authorityLevel: event.target.value,
    }));
  };
  return (
    <>
      <Button className="rounded-pill" variant="dark" onClick={handleShow}>
        Profile
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Changing profile info</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="nameValidation">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="surnameValidation">
                <Form.Label>Surname</Form.Label>
                <Form.Control required type="text" placeholder="Surname" />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="emailVlidation">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@email.com"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="phoneValidation">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="123456789" required />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="organizationValidation">
                <Form.Label>Organization</Form.Label>
                <Form.Control type="text" placeholder="Organization" required />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="passwordValidation">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" required />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="authorityLevel">
              <Form.Check
                value="developer"
                onChange={handleChange}
                name="position"
                type="radio"
                aria-label="developerRadio1"
                label="Developer"
                id="developer-radio-registration"
                inline
                required
                checked={authorityLevel === 'developer'}
              />
              <Form.Check
                value="submitter"
                type="radio"
                name="position"
                aria-label="submitterRadio2"
                id="submitter-radio-registration"
                label="Submitter"
                onChange={handleChange}
                inline
                required
                checked={authorityLevel === 'submitter'}
              />
              <Form.Check
                id="admin-radio-registration"
                value="admin"
                type="radio"
                name="position"
                aria-label="adminRadio3"
                label="Admin"
                onChange={handleChange}
                inline
                required
                checked={authorityLevel === 'admin'}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type="submit">
              Save Data
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Profile;
