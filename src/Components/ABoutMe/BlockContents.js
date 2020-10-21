import React from "react";
import styled from "styled-components";
import colors from "../../Color/colors";
import Me from "./../../Image/donghan.jpeg";

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  /* background-color: white; */
  background-image: url(${Me});
  background-repeat: no-repeat;
  background-size: cover;
  height: 260px;
  width: 180px;
`;

const TextBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: flex-end;
  ${(props) =>
    props.left ? `align-items: flex-start` : `align-items: flex-end`}
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.white};
  margin-bottom: 1rem;
`;
const Content = styled.span`
  color: ${colors.white};
  font-weight: 400;
  line-height: 1.4rem;
`;
const SubTitleBox = styled.div`
  background-color: ${colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  color: ${colors.white};
  margin-left: 1rem;
  margin-right: 1rem;
`;
const SubTitle = styled.span``;
const SubContent = styled.span``;

export default function BlockContents() {
  return (
    <Wrapper>
      <Box>
        <Container>
          <TextBox>
            <Title>성실함과 책임감</Title>
            <Content>임원수행직 및 현금운송보안업의 경험으로 </Content>
            <Content> 사회생활에서 제일 중요한 </Content>
            <Content> 성실함과 책임감을 배웠습니다</Content>
          </TextBox>
          <SubTitleBox>
            <SubTitle>Keword</SubTitle>
            <SubContent>A</SubContent>
          </SubTitleBox>
        </Container>
        <Container>
          <TextBox>
            <Title>성실함과 책임감</Title>
            <Content>임원수행직 및 현금운송보안업의 경험으로 </Content>
            <Content> 사회생활에서 제일 중요한 </Content>
            <Content> 성실함과 책임감을 배웠습니다</Content>
          </TextBox>
          <SubTitleBox>
            <SubTitle>Keword</SubTitle>
            <SubContent>A</SubContent>
          </SubTitleBox>
        </Container>
      </Box>
      <Image />
      <Box>
        <Container>
          <SubTitleBox>
            <SubTitle>Keword</SubTitle>
            <SubContent>A</SubContent>
          </SubTitleBox>
          <TextBox left>
            <Title>성실함과 책임감</Title>
            <Content>임원수행직 및 현금운송보안업의 경험으로 </Content>
            <Content> 사회생활에서 제일 중요한 </Content>
            <Content> 성실함과 책임감을 배웠습니다</Content>
          </TextBox>
        </Container>
        <Container>
          <SubTitleBox>
            <SubTitle>Keword</SubTitle>
            <SubContent>A</SubContent>
          </SubTitleBox>
          <TextBox left>
            <Title>성실함과 책임감</Title>
            <Content>임원수행직 및 현금운송보안업의 경험으로 </Content>
            <Content> 사회생활에서 제일 중요한 </Content>
            <Content> 성실함과 책임감을 배웠습니다</Content>
          </TextBox>
        </Container>
      </Box>
    </Wrapper>
  );
}
