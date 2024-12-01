import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
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
            <NavLink href="#" className="text-dark">
              {item}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Menu;
