import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Text = styled.span``;

export default function HeadText({ line1, line2, line3 }) {
  return (
    <Wrapper>
      <Text>{line1}</Text>
      <Text>{line2}</Text>
      <Text>{line3}</Text>
    </Wrapper>
  );
}
