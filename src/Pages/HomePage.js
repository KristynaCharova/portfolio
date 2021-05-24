import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I´m <span>Lorem Ipsum</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil
            voluptates ea dolore vel repellat? Quia tenetur non quam
            exercitationem. Lorem ipsum dolor sit amet.
          </p>
          <div className="icons">
            <a href="https://facebook.com/" className="icon i-facebook">
              <FacebookIcon />
            </a>
            <a href="https://github.com/" className="icon i-github">
              <GitHubIcon />
            </a>
            <a href="https://cz.linkedin.com/" className="icon i-linkedin">
              <LinkedInIcon />
            </a>
          </div>
        </h1>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: All 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-linkedin {
        &:hover {
          border: 2px solid #0a66c2;
          color: #0a66c2;
        }
      }

      .i-facebook {
        &:hover {
          border: 2px solid #1877f2;
          color: #1877f2;
        }
      }

      .i-github {
        &:hover {
          border: 2px solid #3b3fa1;
          color: #3b3fa1;
        }
      }
    }
  }
`;

export default HomePage;
