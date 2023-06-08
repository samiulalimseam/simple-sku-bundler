import Main from "./Layout/Main";
import { useAppQuery } from "../hooks";
export default function HomePage() {
  const { data } = useAppQuery({
    url: `/api/get-product`,
  });
  console.log(data?.data);
  return <Main></Main>;
}
