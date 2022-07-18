import React from "react";
import { Navbar, Container } from "react-bootstrap";
import OdasevaLogo from "../../assets/svgs/odaseva_logo-light.svg";

const Header = () => (
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img src={OdasevaLogo} alt="odaseva_logo" />
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
