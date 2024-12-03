import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav style={estiloNavBar}>
      <div style={logo}>La Tienda!</div>
      <ul style={listadoCategorias}>
        <li>
          <a href="#link1" style={categoria}>
            Electrónica
          </a>
        </li>
        <li>
          <a href="#link2" style={categoria}>
            Moda
          </a>
        </li>
        <li>
          <a href="#link3" style={categoria}>
            Hogar
          </a>
        </li>
        <li>
          <a href="#link4" style={categoria}>
            Deportes
          </a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

const estiloNavBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#f8f9fa",
  borderBottom: "1px solid #ddd",
};

const logo = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#4CAF50",
};

const listadoCategorias = {
  listStyleType: "none",
  display: "flex",
  gap: "15px",
  margin: 0,
  padding: 0,
};

const categoria = {
  textDecoration: "none",
  color: "#007BFF",
  fontSize: "1rem",
};

export default Navbar;
