import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config/apiConstants';

function NavbarScroll() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  function handleLogout() {

    axios.post(`${API_URL}/logout`)
      .then(response => {
        // Remove the user data from localStorage and set user state to null
        localStorage.removeItem('user');
        setUser(null);

        // Navigate to the home page after logging out
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log('userData:', userData); // add this line to verify the userData value
    if (userData !== null) {
      setUser(userData);
    }
    console.log('user:', user);
  }, []);

  return (
    <Navbar sticky="top" bg='light' expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><img src={Logo} alt='' style={{ width: '120px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/subscription">Subscription</Nav.Link>
            <Nav.Link as={Link} to="/single">Single Post</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/news/1">News</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/opinion/2">Opinion</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/how-to/3">How-to</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/review/4">Review</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {user ? (
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link>{user && <span>Welcome, {user.username}</span>}</Nav.Link>
              <Nav.Link as={Link} to="/write">Write</Nav.Link>
              <Nav.Link onClick={handleLogout} as={Link} to="/" style={{ fontWeight: 'bold' }}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/login" style={{ fontWeight: 'bold' }}>Login</Nav.Link>
              <Nav.Link as={Link} to="/register" style={{ fontWeight: 'bold' }}>Register</Nav.Link>
            </Nav>
          )}
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarScroll;
