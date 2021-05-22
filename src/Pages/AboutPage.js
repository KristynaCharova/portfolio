import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About me"} span={"About me"} />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section`
  color: red;
`;

export default AboutPage;
