import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ResumeItem from "../Components/ResumeItem";
import SchoolIcon from "@material-ui/icons/School";

import { InnerLayout } from "../styles/Layouts";

function Resume() {
  const briefcase = <WorkOutlineIcon />;
  const scholl = <SchoolIcon />;

  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"Resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2015 - 2020"}
            title={"Computer Science Teacher"}
            subTitle={"Lorem University"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            }
          />
          <ResumeItem
            year={"2017 - Present"}
            title={"Full Styck Developer"}
            subTitle={"Lorem Studios"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            }
          />
          <ResumeItem
            year={"2010 - 2017"}
            title={"User Interface Designer"}
            subTitle={"Lorem Inc."}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            }
          />
        </div>
        <div className="small-title">
          <SmallTitle icon={scholl} title={"Education"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2015 - 2020"}
            title={"Computer Science Teacher"}
            subTitle={"Lorem University"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            }
          />
          <ResumeItem
            year={"2017 - Present"}
            title={"Full Styck Developer"}
            subTitle={"Lorem Studios"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            }
          />
          <ResumeItem
            year={"2010 - 2017"}
            title={"User Interface Designer"}
            subTitle={"Lorem Inc."}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil voluptates ea dolore vel repellat? Quia tenetur non quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
