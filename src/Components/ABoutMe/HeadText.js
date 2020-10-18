import React from "react";
import styled from "styled-components";
import colors from "../../Color/colors";

const Wrapper = styled.div`
  padding-top: 65px;
  padding-bottom: 90px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.span`
  color: ${colors.white};
  font-size: 4rem;
  line-height: 5.2rem;
`;

export default function HeadText({ line1, line2, line3 }) {
  return (
    <Wrapper>
      <TextBox>
        <Text>{line1}</Text>
        <Text>{line2}</Text>
        <Text>{line3}</Text>
      </TextBox>
    </Wrapper>
  );
}
