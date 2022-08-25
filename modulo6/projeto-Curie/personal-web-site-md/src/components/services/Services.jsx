import React from "react";
import {
  Service,
  ServiceHead,
  ServiceList,
  ServiceListIcon,
  ServicesContainer,
} from "./styled";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <ServicesContainer className="container ">
        <Service>
          <ServiceHead>
            <h3>Frontend</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <ServiceListIcon />
              <p>
                Development of web applications using HTML, CSS, JavaScript and
                React.
              </p>
            </li>
            <li>
              <ServiceListIcon />
              <p>Experience with Styled Components.</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>
                Creation of responsive websites following the principle of
                Mobile First.
              </p>
            </li>
            <li>
              <ServiceListIcon />
              <p>Experience with REST APIs and JSON.</p>
            </li>

            <li>
              <ServiceListIcon />
              <p>GIT code versioning systems</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>
                Experience working with UX/UI teams and implementing the
                front-end from scratch.
              </p>
            </li>
          </ServiceList>
        </Service>
        <Service>
          <ServiceHead>
            <h3>Backend</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <ServiceListIcon />
              <p>
                creation of Applications using NodeJS, Typescript and MySQL.
              </p>
            </li>
            <li>
              <ServiceListIcon />
              <p>
                creation of API's for front-end communication following the
                Clean principle Code.
              </p>
            </li>
            <li>
              <ServiceListIcon />
              <p>Domain in API development with Node.js (Express).</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>Knowledge of MySQL and MongoDB databases.</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>TypeScript, Agile Methodologies (Scrum, Agile or Kanban).</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>Knowledge AWS.</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>Knowledge of unit testing.</p>
            </li>
          </ServiceList>
        </Service>
        <Service>
          <ServiceHead>
            <h3>Others</h3>
          </ServiceHead>
          <ServiceList>
            <li>
              <ServiceListIcon />
              <p>
                Open to new technologies and modern software development
                methodologies.
              </p>
            </li>
            <li>
              <ServiceListIcon />
              <p>I am constantly looking for new learnings.</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>Excellent ability to work independently or in a team.</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>Good analytical and problem-solving skills.</p>
            </li>
            <li>
              <ServiceListIcon />
              <p>
                Proactivity and adaptability in a context where priorities
                change frequently.
              </p>
            </li>
            <li>
              <ServiceListIcon />
              <p>
                Developed sense of responsibility, focused on customer solutions
                and associated improvemen.
              </p>
            </li>
          </ServiceList>
        </Service>
      </ServicesContainer>
    </section>
  );
};

export default Services;
