import React, { useEffect } from "react";
import classes from "../assets/css/Skills.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaAws,
  FaJenkins,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaMicrosoft,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaNode,
  FaDocker,
  FaHardHat,
  FaEthereum,
} from "react-icons/fa";

import {
  SiD3Dotjs,
  SiLangchain,
  SiAzurepipelines,
  SiNetlify,
  SiHeroku,
  SiJest,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiSpringboot,
  SiNextdotjs,
  SiNestjs,
  SiWeb3Dotjs,
  SiEthers,
  SiOpenai,
  SiVercel,
  SiFramer,
  SiPnpm,
  SiVite,
  SiJfrogpipelines,
  SiHuggingface,
  SiPytest,
} from "react-icons/si";

import { TbBrandD3, TbFileDatabase, TbBrandReactNative } from "react-icons/tb";

import { DiGit } from "react-icons/di";

import { GrMysql } from "react-icons/gr";

import { FiFigma } from "react-icons/fi";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const Section = ({ title, items }) => (
    <>
      <h1 className={classes.skills} style={{ fontSize: "2.3rem" }}>
        {title}
      </h1>
      <div data-aos="zoom-out" data-aos-once="true" className={classes.tech}>
        {items.map(({ icon: Icon, label }, i) => (
          <div className={classes.box} key={i}>
            <Icon />
            <p>{label}</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={classes.yasir}>
      <h1 className={classes.skills}>Tech I'm Familiar With:</h1>

      <Section
        title="Frontend"
        items={[
          { icon: FiFigma, label: "Figma" },
          { icon: FaHtml5, label: "HTML5" },
          { icon: FaCss3, label: "CSS3" },
          { icon: FaBootstrap, label: "Bootstrap" },
          { icon: SiJavascript, label: "JavaScript" },
          { icon: SiTypescript, label: "TypeScript" },
          { icon: FaReact, label: "React.js" },
          { icon: SiRedux, label: "Redux" },
          { icon: SiNextdotjs, label: "Next.js" },
          { icon: SiFramer, label: "Framer Motion" },
          { icon: TbBrandD3, label: "D3.js" },
          { icon: TbBrandReactNative, label: "React-Native" },
        ]}
      />

      <Section
        title="Backend"
        items={[
          { icon: FaNode, label: "Node.js" },
          { icon: SiExpress, label: "Express.js" },
          { icon: SiNestjs, label: "NestJS" },
          { icon: FaMicrosoft, label: "ASP.NET" },
          { icon: SiGraphql, label: "GraphQL (Apollo)" },
          { icon: SiFirebase, label: "Firebase" },
          { icon: SiPostman, label: "Postman" },
        ]}
      />

      <Section
        title="Databases"
        items={[
          { icon: SiPostgresql, label: "PostgreSQL" },
          { icon: GrMysql, label: "MySQL" },
          { icon: SiMongodb, label: "MongoDB" },
        ]}
      />

      <Section
        title="DevOps & Deployment"
        items={[
          { icon: FaDocker, label: "Docker" },
          { icon: SiJfrogpipelines, label: "CI/CD" },
          { icon: FaJenkins, label: "Jenkins" },
          { icon: FaAws, label: "AWS (EC2, S3, Lambda)" },
          { icon: SiNetlify, label: "Netlify" },
          { icon: SiHeroku, label: "Heroku" },
          { icon: SiVercel, label: "Vercel" },
          { icon: DiGit, label: "Git / GitHub" },
          { icon: SiPnpm, label: "pnpm / npm" },
          { icon: SiVite, label: "Vite.js" },
        ]}
      />

      <Section
        title="Blockchain & Web3"
        items={[
          { icon: SiD3Dotjs, label: "Web3.js" },
          { icon: FaEthereum, label: "Ethers.js" },
          { icon: FaHardHat, label: "Hardhat" },
        ]}
      />

      <Section
        title="AI & Tools"
        items={[
          { icon: SiOpenai, label: "OpenAI API" },
          { icon: SiLangchain, label: "LangChain" },
          { icon: SiPostman, label: "Prompt Engineering" },
          { icon: SiHuggingface, label: "Huggingface" },
          { icon: TbFileDatabase, label: "Vector Database" },
        ]}
      />

      <Section
        title="Testing"
        items={[
          { icon: SiJest, label: "Jest" },
          { icon: SiPytest, label: "Supertest" },
        ]}
      />
    </div>
  );
};

export default Skills;
