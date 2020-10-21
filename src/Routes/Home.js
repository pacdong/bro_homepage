import React from "react";
import Index from "../Components/ABoutMe";
import styled from "styled-components";
import colors from "../Color/colors";
import Skill from "../Components/Skills/Skill";

const View = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.gray};
`;

export default function Home() {
  return (
    <View>
      <Index />
      <Skill />
    </View>
  );
}
