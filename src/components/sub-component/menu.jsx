import React from "react";
import {
  Navbar,
  Nav,
  NavItem,

} from "reactstrap";
const Menu = () => {
  return (
    <Navbar color="light" light expand="md" className="shadow-sm">
      <Nav className="m-auto" navbar>
        {[
          "YENİ! Kore",
          "Pizza",
          "Burger",
          "Kızartmalar",
          "Fast Food",
          "Gazlı İçecek",
        ].map((item, index) => (
          <NavItem key={index}>
            
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Menu;
