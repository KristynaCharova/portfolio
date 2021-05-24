import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import ContactItem from "../Components/ContactItem";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { MainLayout, InnerLayout } from "../styles/Layouts";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your message</label>
                <textarea
                  name="text"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field form-button">
                <PrimaryButton title="Send email" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              title={"Phone"}
              icon={phone}
              cont1={"+420 777 555 666"}
              cont2={"+420 777 444 333"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              cont1={"loremipsum@gmail.com"}
              cont2={"info.lorem.ipsum@gmail.com"}
            />
            <ContactItem
              title={"Address"}
              icon={location}
              cont1={"Main Street 123"}
              cont2={"Prague, Czech Republic"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .form-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 550px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--width-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 550px) {
        width: 90%;
      }
      .form-field {
        margin-top: 0.2rem;
        position: relative;
        width: 100%;
        margin-top: 2rem;
        label {
          position: absolute;
          left: 20px;
          top: -20px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
      .form-button {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default ContactPage;
