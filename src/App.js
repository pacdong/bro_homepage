import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
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
      <Header />
      <BrowserRouter>
        라우트 전
        <Routes />
        라우트 후
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
