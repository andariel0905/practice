import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useAppDispatch } from "../../redux/store";
import { toggleDarkMode } from "../../redux/features/userSlice";

function NavBarComponent() {
  const dispatch = useAppDispatch()
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Button onClick={() => dispatch(toggleDarkMode())}>Dark Mode</Button>
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