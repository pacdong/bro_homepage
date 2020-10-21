import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
`;
const Box =  styled.div`
display: flex;
flex-direction: column;
`;

const Image = styled.div`
background-color: white;
height: 200px;
width: 100px;
margin: 0px 20px;
`;

const TextBox = styled.div`
display: flex;
margin-bottom: 30px;
flex-direction: column;
justify-content: flex-end;
align-items : flex-end;  
`;
const Title = styled.span``;
const Content = styled.span``;
const SubTitleBox = styled.div``;
const SubTitle = styled.span``;
const SubContent = styled.span``;


export default function BlockContents() {
  return (
    <Wrapper>
      <Box>
        <TextBox>
          <Title>성실함과 책임감</Title>
          <Content>임원수행직 및 현금운송보안업의 경험으로 </Content><Content> 사회생활에서 제일 중요한 </Content><Content> 성실함과 책임감을 배웠습니다</Content>
        </TextBox>
        <TextBox>
          <Title>성실함과 책임감</Title>
          <Content>임원수행직 및 현금운송보안업의 경험으로 </Content><Content> 사회생활에서 제일 중요한 </Content><Content> 성실함과 책임감을 배웠습니다</Content>
        </TextBox>
      </Box>
      <Image />
      <Box>
        <TextBox>
          <Title>성실함과 책임감</Title>
          <Content>임원수행직 및 현금운송보안업의 경험으로 </Content><Content> 사회생활에서 제일 중요한 </Content><Content> 성실함과 책임감을 배웠습니다</Content>
        </TextBox>
        <TextBox>
          <Title>성실함과 책임감</Title>
          <Content>임원수행직 및 현금운송보안업의 경험으로 </Content><Content> 사회생활에서 제일 중요한 </Content><Content> 성실함과 책임감을 배웠습니다</Content>
        </TextBox>
      </Box>
    </Wrapper>
  )
}
