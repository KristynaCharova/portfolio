import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import ProgressBar from "../Components/ProgressBar";
import { InnerLayout } from "../styles/Layouts";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"My Skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"HTML5"} width={"70%"} text={"70%"} />
          <ProgressBar title={"CSS3"} width={"90%"} text={"90%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"85%"} text={"85%"} />
          <ProgressBar title={"REACT JS"} width={"85%"} text={"85%"} />
          <ProgressBar title={"PHYTON"} width={"65%"} text={"65%"} />
          <ProgressBar title={"C#"} width={"75%"} text={"75%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
  }
`;

export default Skills;
