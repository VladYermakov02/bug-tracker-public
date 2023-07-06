import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="rounded-pill" variant="dark" onClick={handleShow}>
        About
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The purpose of bug tracker is to keep track of all bugs, issues, and
          proposals of some app in one place.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default About;
