import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Number = styled.span``;
const Text = styled.span``;

export default function TitleText({ number, title }) {
  return (
    <Wrapper>
      <Number>{number}</Number>
      <Text>{title}</Text>
    </Wrapper>
  );
}
