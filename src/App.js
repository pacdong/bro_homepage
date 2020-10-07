import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Routes from "./Routes";

const GlobalStyled = createGlobalStyle`
${reset};
* {
  transition: 0.5s;
}
body {
  background-color: white;
  font-size: 16px;
}
a {
        color: black;
        text-decoration:none;
    }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
