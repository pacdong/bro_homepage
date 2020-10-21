import React from 'react'
import styled from "styled-components";
import colors from '../../Color/colors';

const Wrapper = styled.div`
display: flex;
flex: 1;
justify-content: space-between;
align-self: center;
`;
const Title = styled.span`
color: ${colors.chartTitleColor};
font-size: 2rem;
margin-right: 2rem;
`;
const GraphBlock = styled.div`
display: flex;
flex: 1;
position: relative;
`;
const Graph = styled.div`
background-color: ${colors.chartTintColor};
width: 80%;
`;
const Percent = styled.span`
color: ${colors.chartTitleColor};
font-size: 2rem;
`;

export default function Chart({title, percent}) {
  const percentInt = parseInt(percent);
  return (
    <Wrapper>
      <Title>{title}</Title>
      <GraphBlock>
        <Graph percentInt={percentInt}/>
      </GraphBlock>
      <Percent>{percent}%</Percent>
    </Wrapper>
  )
}
