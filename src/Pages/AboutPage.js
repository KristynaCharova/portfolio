import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import { MainLayout } from "../styles/Layouts";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSection";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About me"} span={"About me"} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
