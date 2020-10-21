import React from 'react'
import styled from "styled-components";
import colors from '../../Color/colors';
import BlockContents from './BlockContents';

const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
padding: 0px 30px;
`;
const Box = styled.div`
display: flex;
flex-direction: column;
background-color: ${colors.shadowColor};
padding: 60px 30px;
`;
const Header = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const HeaderText = styled.span`
text-align: center;
color: ${colors.white};
margin-bottom: 1rem;
${props => props.big ? `font-size: 2rem` : `font-size: 1.6rem`};
${props => props.big ? `font-weight: 600`: `font-weight: 400`};
`;
const Contents = styled.div``;

export default function Block() {
  return (
    <Wrapper>
      <Box>
        <Header>
          <HeaderText big>
            성실하고 바른 인성을 가진 '박동한'입니다
          </HeaderText>
          <HeaderText>사람을 좋아하며 커뮤니케이션에 능한 개발자</HeaderText>
        </Header>
        <Contents>
          <BlockContents />
        </Contents>
      </Box>
    </Wrapper>
  )
}
