import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Routes from "./Routes";
import styled from "styled-components";
import Home from "./Routes/Home";

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

const View = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Header />
        {/* <Routes /> */}
        <View>
          <Home />
        </View>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
