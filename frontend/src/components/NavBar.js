import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../logo.svg';

import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark" sticky='top' style={{ height: '80px', fontSize: '20px', marginBottom: '0px'}}>
          <Navbar.Brand href="/" style={{ fontSize: '40px'}}><img src={logo} width="50px" height="50px" />{' '} Shafaath</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Design_Studio">Design Studio</Nav.Link>
              <Nav.Link href="/Order_Status">Order Status</Nav.Link>
              <Nav.Link href="/Contact_Us">Contact Us </Nav.Link>
              {true ? <EnableDropDown /> : <LoginBTN/>};
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
}

function EnableDropDown() {
    return (
        <NavDropdown title="Welcome name" id="collapsible-nav-dropdown" style={{ padding: '0px 30px 0px 0px'}}>
        <NavDropdown.Item href="/View_Orders">View Orders</NavDropdown.Item>
        <NavDropdown.Item href="/Account_Info">Account Info</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Log Out</NavDropdown.Item>
        </NavDropdown>
    );
}

function LoginBTN() {
    return (
        <Nav.Link href="/Login" >Log In</Nav.Link>
    );
}