import React from "react";
import styled from "styled-components";
import colors from "../../Color/colors";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  padding-bottom: 2rem;
`;
const Number = styled.span`
  font-size: 3rem;
  color: ${colors.darkGray};
  margin-right: 1rem;
`;
const Text = styled.span`
  font-size: 3rem;
  color: ${colors.white};
`;

export default function TitleText({ number, title }) {
  return (
    <Wrapper>
      <Number>{number}</Number>
      <Text>{title}</Text>
    </Wrapper>
  );
}
