import React from "react";
import { FaShoppingCart } from "react-icons/fa"; //meti fontawesome para el icono

const CartWidget = () => {
  return (
    <div style={widget}>
      <FaShoppingCart size={24} />
      <span style={carritoGlobo}>3</span>
    </div>
  );
};


const widget = {
  display: "flex",
  alignItems: "center",
  position: "relative",
};

const carritoGlobo = {
  backgroundColor: "#dc3545",
  color: "#fff",
  borderRadius: "50%",
  padding: "4px 8px",
  fontSize: "0.8rem",
  position: "absolute",
  top: "-8px",
  right: "-10px",
};

export default CartWidget;
