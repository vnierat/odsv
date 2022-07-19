import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import OdasevaLogo from "../../assets/svgs/odaseva_logo-light.svg";

const Header = () => (
  <Navbar bg="primary" variant="dark">
    <Container>
      <Link to="/">
        <Navbar.Brand>
          <img src={OdasevaLogo} alt="odaseva_logo" />
        </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
);

export default Header;
