import { Card, EmptyState, Page } from "@shopify/polaris";

import { notFoundImage } from "../assets";
import { Container, Heading } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Container>
      <Heading>Page not found</Heading>
    </Container>
  );
}
