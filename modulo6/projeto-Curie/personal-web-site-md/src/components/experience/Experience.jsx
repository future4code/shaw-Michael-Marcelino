import React from "react";
import {
  ExperiencDetails,
  ExperiencDetailsIcon,
  ExperienceContainer,
  ExperienceContent,
} from "./styled";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Whats Skills I Have</h5>
      <h2>My experience</h2>
      <ExperienceContainer className="container ">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <ExperienceContent>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperiencDetails>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperiencDetails>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperiencDetails>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperiencDetails>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>Material-Ui</h4>
                <small className="text-light">beginner</small>
              </div>
            </ExperiencDetails>
          </ExperienceContent>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperiencDetails>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperiencDetails>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>Mysql</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperiencDetails>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </ExperiencDetails>
            <ExperiencDetails>
              <ExperiencDetailsIcon className="experience__details-icons" />
              <div>
                <h4>C</h4>
                <small className="text-light">Basic</small>
              </div>
            </ExperiencDetails>
          </div>
        </div>
      </ExperienceContainer>
    </section>
  );
};

export default Experience;
