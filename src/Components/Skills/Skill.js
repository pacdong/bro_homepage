import React from 'react'
import styled from "styled-components";
import colors from '../../Color/colors';
import TitleText from '../Common/TitleText';
import Chart from './Chart';

const View = styled.div`
display: flex;
flex: 1;
width: 100%;
height: 100%;
background-color: ${colors.skillBackgroundColor};
justify-content: center;
padding: 160px 0px;
`;
const Wrapper = styled.div`
width: 100%;
padding: 0px 130px;
`;

export default function Skill() {
  return (
    <View>
      <Wrapper>
      <TitleText number="02" title="SKILLS"/>
      <Chart title="HTML" percent="80"/>
      </Wrapper>
    </View>
  )
}
