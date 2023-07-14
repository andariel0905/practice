import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from "react-router-dom";

function NavBarComponent() {
    const location = useLocation();
  
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto">
              {location.pathname !== "/" && (
                <Nav.Link as={NavLink} to="/">
                  Inicio
                </Nav.Link>
              )}
              {location.pathname !== "/login" && (
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              )}
              {location.pathname !== "/profile" && (
                <Nav.Link as={NavLink} to="/profile">
                  Profile
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBarComponent;