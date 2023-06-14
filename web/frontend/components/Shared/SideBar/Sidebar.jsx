import "./Sidebar.css";
import { Box, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsBagCheck, BsBox } from "react-icons/bs";

const menuItem = [
  { name: "Home", link: "/", icon: AiOutlineHome },
  { name: "Bundles", link: "/bundles", icon: BsBox },
  { name: "Orders", link: "/orders", icon: BsBagCheck },
];
const NavItem = ({ children }) => {
  return (
    <NavLink className={"menu-link"} to={children.link}>
      {<children.icon />}
      {children.name}
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <Flex
      position={"fixed"}
      w={"20%"}
      flexDirection={"column"}
      gap={2}
      px={4}
      pt={4}
    >
      {menuItem?.map((item) => {
        return <NavItem>{item}</NavItem>;
      })}
    </Flex>
  );
};

export default Sidebar;
