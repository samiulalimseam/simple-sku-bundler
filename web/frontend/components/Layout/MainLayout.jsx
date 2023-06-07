import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box>
      <Flex>
        <Box w={"20%"}>Left Sidebar Content</Box>
        <Box w={"80%"}>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
