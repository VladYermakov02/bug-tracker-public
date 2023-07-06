import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import myFetch from '../../services/FetchService';
import PageNaming from '../../utils/PageNaming';
import { useUser } from '../../web/UserProvider';

function EmployeeInfoCard() {
  const emptyEmployee = {
    id: null,
    name: '',
    surname: '',
    username: '',
    phone: '',
    position: '',
    organization: '',
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedData = window.localStorage.getItem(PageNaming.Project);
    if (storedData !== null) {
      setProjects(JSON.parse(storedData));
    }
    console.log('emp: storedData', storedData);
    console.log('emp: projects', projects);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // for radio buttons
  const [item, setItem] = useState({ authorityLevel: '', another: 'another' });

  const { authorityLevel } = item;

  const handleChange = (event: any) => {
    event.persist();

    setItem((prevState) => ({
      ...prevState,
      authorityLevel: event.target.value,
    }));
  };

  return (
    <Container fluid className="main-content-container my-5">
      <Card className="overflow-hidden table-dark">
        <Card.Header as="h5" className="d-flex justify-content-between">
          Employee
          <Button
            variant="dark"
            type="submit"
            className="rounded-pill"
            size="sm"
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
                <Form.Group as={Col} md="4" controlId="name">
                  <Form.Label style={labelStyle}>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group as={Col} md="5" controlId="surname">
                  <Form.Label style={labelStyle}>Surname</Form.Label>
                  <Form.Control type="text" placeholder="Surname" />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="phone">
                  <Form.Label style={labelStyle}>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="5" controlId="email">
                  <Form.Label style={labelStyle}>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="position">
                  <Form.Label style={labelStyle}>Position</Form.Label>
                  <Form.Control type="text" placeholder="Position" />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="organization">
                  <Form.Label style={labelStyle}>Organization</Form.Label>
                  <Form.Control type="text" placeholder="Organization" />
                </Form.Group>
              </Row>
              <Row>
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
                  Asign projects
                </div>
                {projects.map((project: any) => (
                  <Form.Check
                    id={`project-${project.id}`}
                    key={`project-${project.id}`}
                    aria-label={`option ${project.id}`}
                    label={`${project.title}`}
                  />
                ))}
              </Row>
            </fieldset>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EmployeeInfoCard;
