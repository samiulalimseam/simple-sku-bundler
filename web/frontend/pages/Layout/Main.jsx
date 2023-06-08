import React from "react";
import ChakraNavbar from "../../components/NavBar/ChakraNavbar";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Highlight,
 
  Spacer,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const data = [];

const Main = () => {
  return (
    <div>
      <Box m={0} align={""}>
        <Flex
          margin={"auto"}
          wrap={"wrap"}
          maxWidth={"100%"}
          flexDirection={{ base: "column", md: "column", lg: "column" }}
        >
          <Text my={0} as={"b"} fontSize={"xl"}>
            Simple Bundler
          </Text>
          <Text
            my={2}
            as={"sub"}
            color={"gray"}
            fontSize={"sm"}
            fontStyle="normal"
          >
            Create and edit bundles to boost your sales and increase average
            order value.
          </Text>{" "}
          <br />
          <Link to={'/createbundle'}>

          <Button maxWidth={"150px"} my={2} colorScheme="blue">
            Create Bundle
          </Button>
          </Link >
          <Card>
            <CardBody>
              <Text as={"b"} my={1} fontSize={"md"}>
                Sectioned Mix & Match bundles!
              </Text>{" "}
              <br />
              <Text my={1} fontSize={"sm"}>
                The Bundler app now offers Sectioned Mix & Match bundles. This
                feature lets you require customers to purchase a specific number
                of items from each section in order to qualify for a discount.
                To set it up, just click Create bundle and choose Sectioned Mix
                & Match option.
              </Text>{" "}
              <br />
              <Text my={1} fontSize={"sm"}>
                Good news! Our Bundler app is fully compatible with the Shopify
                Store. It offers a FREE plan and enables you to combine bundles
                with auto-charging subscriptions.
              </Text>{" "}
              <br />
            </CardBody>
          </Card>
          <Card my={3} w={"100%"}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Text as={"b"} my={2} fontSize={"md"}>
                    Your Plan
                  </Text>{" "}
                  <br />
                  <Flex my={2}>
                    <Text>Current Plan</Text> <Spacer></Spacer>{" "}
                    <Highlight
                      query={"FREE"}
                      styles={{
                        px: "2",
                        py: "1",
                        rounded: "full",
                        bg: "teal.100",
                      }}
                    >
                      FREE
                    </Highlight>{" "}
                  </Flex>
                </Box>
                <Flex flexDirection={"column"} alignItems={"center"} w={"100%"}>
                  <Text
                    my={2}
                    textAlign={"center"}
                    alignItems="center"
                    fontWeight={"bold"}
                    size="xs"
                  >
                    Unlock all features and boost conversions with our premium
                    plan
                  </Text>

                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    border="1px"
                    borderColor="blue.500"
                    my={2}
                    mx={"auto"}
                  >
                    Start Free trial
                  </Button>
                  <Link my={2} color={"blue.500"}>
                    Copy Upgrade URL
                  </Link>
                </Flex>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      </Box>
    </div>
  );
};

export default Main;
