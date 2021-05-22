import React from "react";
import PrimaryButton from "../Components/PrimaryButton";
import styled from "styled-components";
import resume from "../img/resume.jpg";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          I´m <span>Lorem Ipsum</span>
        </h4>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil
          voluptates ea dolore vel repellat? Quia tenetur non quam
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Lorem Ipsum</p>
            <p>: 31</p>
            <p>: Czech</p>
            <p>: Czech/English/Spanish</p>
            <p>: Prague, Czech Republic</p>
            <p>: Front-End Developer with React</p>
          </div>
        </div>
        <PrimaryButton title={"Download CV"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  .left-content {
    width: 100%;
    img {
      width: 90%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.5rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
