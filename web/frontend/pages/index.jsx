import { Box, Container, Heading } from "@chakra-ui/react";
import { useAppQuery } from "../hooks";

export default function HomePage() {
  const { data } = useAppQuery({
    url: `/api/get-product`,
  });
  console.log(data);
  return (
    <Container>
      <Box display={"flex"}>
        <Heading>Hello World</Heading>
        <Heading>Hello World</Heading>
      </Box>
    </Container>
  );
}
