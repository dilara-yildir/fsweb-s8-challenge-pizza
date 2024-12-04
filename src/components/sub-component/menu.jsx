import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,

} from "reactstrap";

const menuItems = [
  {
    name: "YENİ! Kore",
    icon: "/Assets/Iteration-2-aseets/icons/1.svg",
  },
  { name: "Pizza", icon: "/Assets/Iteration-2-aseets/icons/2.svg" },
  { name: "Burger", icon: "/Assets/Iteration-2-aseets/icons/3.svg" },
  { name: "Kızartmalar", icon: "/Assets/Iteration-2-aseets/icons/4.svg" },
  { name: "Fast Food", icon: "/Assets/Iteration-2-aseets/icons/5.svg" },
  { name: "Gazlı İçecek", icon: "/Assets/Iteration-2-aseets/icons/6.svg" },
];

const Menu = ({setMenu}) => {
  return (
    <Navbar color="light" light expand="md" className="shadow-sm">
      <Nav className="m-auto" navbar>
        {menuItems.map((menu, index) => (
          <NavItem key={index}>
            <NavLink
              href="#"
              onClick={() => setMenu(menu.name)}
              className={`d-flex align-items-center `}
            >
              {" "}
              <img src={menu.icon}  className="menu-icon" />
              <span className="menu-text">{menu.name}</span>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Menu;
