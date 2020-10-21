import React from "react";
import TitleText from "../Common/TitleText";
import HeadText from "./HeadText";
import styled from "styled-components";
import Block from "./Block";

const View = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
`;

const Index = () => {
  return (
  <>
  <View>
  <HeadText line1="I' M" line2="A FRONT - END" line3="DEVELOPER" />
  <TitleText number="01" title="ABOUT"/>
  <Block />
  </View>
  </>
  )
};

export default Index;
