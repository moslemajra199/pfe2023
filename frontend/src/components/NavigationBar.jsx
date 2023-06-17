import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      className="py-0"
      expand="sm"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">ProdAssist</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Product" id="collasible-nav-dropdown">
              <LinkContainer to="/admin">
                <NavDropdown.Item>Product</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item href="#action/3.2">Components</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Production" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Operations</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Production Orders
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Machines</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#deets">
              <FaUserAlt /> Moslem Ajra
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaUserAltSlash /> LogOut
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
