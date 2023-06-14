import ReactDOM from "react-dom/client";
import "./styles/Style.css";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("app")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
