import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text className="text-white">
            <Link to="/" className="text-white text-decoration-none">
              Pokedex
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>

        <Nav>
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>

          <NavLink to="/pokemons" className={activeClass}>
            Lista de Pokemons
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
