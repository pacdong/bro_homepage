import React from "react";
import Index from "../Components/ABoutMe";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex: 1;
  background-color: red;
  padding-top: 100px;
`;

export default function Home() {
  return (
    <View>
      안녕하세요
      <Index />
    </View>
  );
}
