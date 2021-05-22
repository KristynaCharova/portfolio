import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import { MainLayout } from "../styles/Layouts";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About me"} span={"About me"} />
        <ImageSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
