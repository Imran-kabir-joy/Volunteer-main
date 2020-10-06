import React from "react";
import {
  Button,
  Container,
  Nav,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logos/Group 1329.png";

const Header = () => {
  return (
    <div>
      <Container bg="light">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt=""
              srcset=""
              className=""
              style={{ width: "180px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav w-75 ml-lg-auto justify-content-between">
              <Nav.Link href="#home" className="font-weight-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="font-weight-bold">
                Donation
              </Nav.Link>
              <Nav.Link href="#pricing" className="font-weight-bold">
                Event
              </Nav.Link>
              <Nav.Link href="#pricing" className="font-weight-bold"> 
                Blog
              </Nav.Link>
              <Button variant="primary" size="lg">
                Register
              </Button>
              <Link to="/adminPanel">
              <Button variant="dark" size="lg"> 
                Admin
              </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;

{
  /* <Navbar  variant="light">
<Navbar.Brand href="#home">
  <img src={logo} alt="" srcset="" className="" style={{height:"56px"}}/>
</Navbar.Brand>
<Nav className="navbar-nav w-100 justify-content-between">
  <Nav.Link href="#home" className="font-weight-bold">Home</Nav.Link>
  <Nav.Link href="#features" className="font-weight-bold">Donation</Nav.Link>
  <Nav.Link href="#pricing" className="font-weight-bold">Event</Nav.Link>
  <Nav.Link href="#pricing" className="font-weight-bold">Blog</Nav.Link>
  <Button variant="primary" size="lg">Register</Button>
  <Button variant="dark" size="lg">Admin</Button>
</Nav>
</Navbar> */
}
