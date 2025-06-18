import React, { useEffect } from "react";
import classes from "../assets/css/Experience.module.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.yasir}>
      <div>
        {/* Education */}
        <div style={{ paddingTop: "5%" }}>
          <h1
            className={classes.Education}
            data-aos-once="true"
            data-aos="zoom-in"
          >
            Education :
          </h1>
          <h1 className={classes.Education} style={{ fontSize: "2.3rem" }}>
            Bachelor's Degree in Information Tech. & Engineering
          </h1>
          <h1
            className={classes.Education}
            style={{ fontSize: "1.5rem", color: "#01bf71" }}
          >
            Guru Gobind Singh Indraprastha University, NEW DELHI
          </h1>
          <h1
            className={classes.Education}
            data-aos-once="true"
            data-aos="zoom-in"
          >
            Certification :
          </h1>
          <h1 className={classes.Education} style={{ fontSize: "2.3rem" }}>
            PMP Certified
          </h1>
          <h1
            className={classes.Education}
            style={{ fontSize: "1.5rem", color: "#01bf71" }}
          >
            Project Management Institute
          </h1>
        </div>

        {/* Experience 1 */}
        <div className={classes.experience}>
          <h1
            className={classes.experience}
            style={{ marginTop: "10%" }}
            data-aos-once="true"
            data-aos="zoom-in"
          >
            Experience :
          </h1>

          <h1 className={classes.experience} style={{ fontSize: "2.3rem" }}>
            Fujairah National Group{" "}
          </h1>
          <h1
            className={classes.experience}
            style={{ fontSize: "1.5rem", color: "#01bf71" }}
          >
            Senior Full Stack Engineer | Project Manager
          </h1>
          <h1
            className={classes.experience}
            style={{ fontSize: "1.3rem", color: "#fff" }}
          >
            July 2024 – Present | Dubai, UAE
          </h1>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Led full-stack development of Al Sharq Hospital App and FNG Portal,
            boosting user engagement by 15%.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Integrated OpenAI APIs & vector search into internal apps for
            document AI assistance.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Architected scalable PostgreSQL DBs, optimized queries for high-load
            performance.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Drove a 15% boost in business sales by delivering end-to- end
            integrations, real-time features, high performance web and mobile
            solutions tailored to user needs.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Increased user engagement and adoption rates through responsive
            design, user-centric features and smooth UX/UI integration.
          </li>
        </div>

        {/* Experience 2 */}
        <div className={classes.experience}>
          <h1 className={classes.experience} style={{ fontSize: "2.3rem" }}>
            Finstreet (IHC Group)
          </h1>
          <h1
            className={classes.experience}
            style={{ fontSize: "1.5rem", color: "#01bf71" }}
          >
            Senior Full Stack Engineer | Project Manager
          </h1>
          <h1
            className={classes.experience}
            style={{ fontSize: "1.3rem", color: "#fff" }}
          >
            Aug 2022 – July 2024 | Abu Dhabi, UAE
          </h1>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Worked With fintech products Private Financial Platform, MTF and
            Custody.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Built fintech and Web3 wallet apps using React, Node.js, NestJS,
            Web3.js & PostgreSQL.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Delivered enterprise features including multi-source integration,
            secure auth, and real-time services.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Integrated DevOps workflows using AWS EC2, Lambda, Docker, and
            GitHub CI/CD.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Designed and coded a REST-based microservice that integrated with
            several third- party APIs.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Led the integration of blockchain capabilities in fintech platforms
            using Web3.js and Ethers.js, enabling secure wallet connections,
            smart contract interactions, and on-chain data access without direct
            contract authoring.
          </li>
        </div>

        {/* Experience 3 */}
        <div className={classes.experience}>
          <h1 className={classes.experience} style={{ fontSize: "2.3rem" }}>
            Kalpas Innovation
          </h1>
          <h1
            className={classes.experience}
            style={{ fontSize: "1.5rem", color: "#01bf71" }}
          >
            Full Stack Developer | Project Manager
          </h1>
          <h1
            className={classes.experience}
            style={{ fontSize: "1.3rem", color: "#fff" }}
          >
            Jun 2019 – Aug 2022 | Bangalore, India
          </h1>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Developed and optimized React apps with Redux, Framer Motion,
            Material UI for fintech platforms.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Wrote scalable Node.js APIs for MongoDB with REST architecture &
            3rd-party integrations.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Implemented unit testing using Jest and delivered high-performance
            UIs with 40% reduced load time.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Worked on api' s REST ,Firebase, GraphQl- Apollo, AWS. Solved bugs
            for different outsourced project' s. Analyzed system flow, data
            usage and work processes. Developed software that takes in
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Used javascript Libraries like FRAMER-MOTION, D3.JS through node
            package manager(NPM). MATERIAL UI is used for bettter UI and
            RESPONSIVE USER EXPERIENCE.
          </li>
          <li
            className={classes.experience}
            style={{ fontSize: "1.2rem", color: "#01bf71" }}
          >
            Used tools like REDUX for managing and centralizing application
            state.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Experience;
