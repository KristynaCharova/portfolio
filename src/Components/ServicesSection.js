import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque nihil voluptates ea dolore vel repellat?"
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Artificial Intelligence"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque nihil voluptates ea dolore vel repellat?"
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Game Development"}
            paragraph={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.Atque nihil voluptates ea dolore vel repellat?"
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: flex;
    justify-content: space-between;
    .mid-card {
      margin: 0 1.2rem;
    }
  }
`;

export default ServicesSection;