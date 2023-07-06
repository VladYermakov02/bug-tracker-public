import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import About from '../../pages/right-side-navbar/About';
import Profile from '../../pages/right-side-navbar/Profile';
import { useUser } from '../../web/UserProvider';
import LogOut from '../../pages/right-side-navbar/LogOut';

function HomeNavbar() {
  return (
    <Navbar
      className="navbar navbar-inverse bg-inverse bs-navbar-collapse"
      role="navigation"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/dashboard">
          Bug Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="home-responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/tickets">
              Tickets
            </Nav.Link>
            <Nav.Link as={Link} to="/notifications">
              Notifications
            </Nav.Link>
            <Nav.Link as={Link} to="/organization">
              Organization
            </Nav.Link>
          </Nav>
          <Nav>
            <About />
            <Profile />
            <LogOut />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
