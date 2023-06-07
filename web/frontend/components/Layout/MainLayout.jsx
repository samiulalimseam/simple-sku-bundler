import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
  return (
    <Box>
     
      <Flex>
        <Box w={"20%"}>
          <Sidebar></Sidebar>
        </Box>
        <Box  w={"80%"}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
