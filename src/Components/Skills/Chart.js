import React from "react";
import styled from "styled-components";
import colors from "../../Color/colors";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-self: auto;
`;
const Title = styled.span`
  width: 20%;
  overflow: wrap;
  color: ${colors.chartTitleColor};
  font-size: 2rem;
  margin-right: 2rem;
`;
const GraphBlock = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-start;
`;
const Graph = styled.div`
  background-color: ${colors.chartTintColor};
  width: ${(props) => `${props.percentInt}%`};
`;
const Percent = styled.span`
  color: ${colors.chartTitleColor};
  font-size: 2rem;
`;

const Intro = styled.span`
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-left: 28%;
  color: ${colors.chartTitleColor};
`;

export default function Chart({ title, percent, text }) {
  const percentInt = parseInt(percent);
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <GraphBlock>
          <Graph percentInt={percentInt} />
        </GraphBlock>
        <Percent>{percent}%</Percent>
      </Container>
      <Intro>{text}</Intro>
    </Wrapper>
  );
}
