import React from "react";
import styled from "styled-components";
import colors from "../../Color/colors";
import TitleText from "../Common/TitleText";
import Chart from "./Chart";

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
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Summary = styled.span`
  text-align: center;
  color: ${colors.white};
  font-size: 1.8rem;
  line-height: 2rem;
  margin-top: 104px;
`;

export default function Skill() {
  return (
    <View>
      <Wrapper>
        <TitleText number="02" title="SKILLS" />
        <Chart
          title="HTML"
          percent="80"
          text="HTML 문법 이해 및 태그 속성 활용 가능"
        />
        <Chart title="CSS" percent="80" text="CSS 및 SCSS 스타일링 가능" />
        <Chart
          title="JAVASCRIPT"
          percent="75"
          text="ES6 문법 및 이해 및 JQuery 활용 가능"
        />
        <Chart
          title="REACT"
          percent="70"
          text="Styled-component 및 Redux-Middleware 활용 가능"
        />
        <Chart
          title="JSP"
          percent="60"
          text="모델 1,2 이해 및 MVC 패턴 활용 가능"
        />
        <Chart
          title="ADOBEXD"
          percent="75"
          text="기본적인 디자인 툴 활용 가능"
        />
        <Summary>
          이 외에도 IT훈련기관을 통하여 Java, Oracle, Spring 등 웹의 전반적인
          흐름을 경험하였습니다
        </Summary>
      </Wrapper>
    </View>
  );
}
