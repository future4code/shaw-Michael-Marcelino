import React from "react";
import ME from "../../assets/eiffel.jpg";

import {
  AboutCard,
  AboutCards,
  AboutContainer,
  AboutContent,
  AboutMe,
  AboutMeImage,
  FaAwards,
  VscFolderLibrarys,
} from "./styled";
import { FiUser } from "react-icons/fi";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutContainer className="container ">
        <AboutMe>
          <AboutMeImage>
            <img src={ME} alt="About Image" />
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <AboutCards>
            <AboutCard>
              <FaAwards className="about__icon" />
              <h5>Expirience</h5>
              <small>1+ Years Working</small>
            </AboutCard>

            <AboutCard>
              <FiUser className="about__icon" />
              <h5>IEFP</h5>
              <small>IT and Systems Technician</small>
            </AboutCard>

            <AboutCard>
              <VscFolderLibrarys className="about__icon" />
              <h5>Labenu</h5>
              <small>Full Stack Web Developer</small>
            </AboutCard>
          </AboutCards>
          <p>
            I'm a Full Stack developer, trained in Labenu's Web Full stack
            bootcamp, I have experience in practical projects using technologies
            such as React, Node.js, Material UI, axios, Typescript, Express. I
            come from a construction background, building is in my blood, but
            now with other materials, this experience in the construction
            industry taught me to be very strong and persistent, in addition to
            having resilience and dexterity in solving problems, both logical
            and personal.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </AboutContent>
      </AboutContainer>
    </section>
  );
}

export default About;
