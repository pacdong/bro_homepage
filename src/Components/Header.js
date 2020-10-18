import React from "react";
import styled from "styled-components";
import colors from "../Color/colors";

const Background = styled.div`
  width: 100%;
  background-color: ${colors.gray};
  display: flex;
  flex-direction: row;
  padding-top: 40px;
  padding-bottom: 40px;
  top: 0px;
  position: relative;
  border: 0px solid ${colors.black};
  box-shadow: 0px 5px 20px #00000026;
`;
const Wrapper = styled.div``;
const Box = styled.button`
  outline: none;
  background-color: inherit;
  border: 0px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 1rem;
  color: ${colors.headerFontColor};
  &:hover {
    color: ${colors.headerTintColor};
  }
  &:focus {
    color: ${colors.headerTintColor};
  }
  transition: 0.5s;
`;

export default function Header() {
  return (
    <Background>
      <Wrapper>
        <Box onClick={() => console.log("ABOUT ME")}>ABOUT ME</Box>
        <Box onClick={() => console.log("SKILLS")}>SKILLS</Box>
        <Box onClick={() => console.log("PROJECT")}>PROJECT</Box>
        <Box onClick={() => console.log("CAREER")}>CAREER</Box>
        <Box onClick={() => console.log("CONTACT")}>CONTACT</Box>
      </Wrapper>
    </Background>
  );
}
