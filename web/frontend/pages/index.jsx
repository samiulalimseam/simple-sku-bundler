import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import Main from "./Layout/Main";

export default function HomePage() {
  const { data } = useAppQuery({
    url: `/api/get-product`,
  });
  console.log(data);
  return (
    <Page fullWidth>
      <Main></Main>
    </Page>
  );
}
