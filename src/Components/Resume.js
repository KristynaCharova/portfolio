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
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={scholl} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"201 - 2022"}
            title={"Computer Science Degree"}
            subTitle={"Lorem University"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"A - Levels"}
            subTitle={"Lorem Ipsum High"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"High School Graduation"}
            subTitle={"ABC School"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
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
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
