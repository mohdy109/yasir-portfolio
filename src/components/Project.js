import React, { useEffect } from "react";
import classes from "../assets/css/Project.module.css";
import Carousel from "react-bootstrap/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";

import web from "../assets/images/web.png";
import web2 from "../assets/images/web2.png";
import web3 from "../assets/images/web4.png";
import cam1 from "../assets/images/cam1.png";
import cam2 from "../assets/images/cam2.png";
import cam3 from "../assets/images/cam3.jpeg";
import elec1 from "../assets/images/elec1.jpeg";
import elec2 from "../assets/images/elec2.jpeg";
import elec4 from "../assets/images/elec4.jpeg";

const projects = [
  {
    title: "WEB3-GPT-CHATBOT",
    link: "#",
    images: [web3],
    description: [
      "Web3-native GPT chatbot with wallet authentication.",
      "Powered by LangChain, Vercel, and Pinecone for vector storage.",
      "Built using React + Node.js with encrypted chat memory.",
    ],
  },
  {
    title: "NFT-PROOFAI-APP",
    link: "#",
    images: [cam1],
    description: [
      "React Native Expo app to capture real-world proof (photo/voice).",
      "AI summary and classification via Hugging Face.",
      "Stored on IPFS, minted as Soulbound NFTs on Polygon Sepolia.",
      "Used Wagmi, Ethers.js, and Styled Components.",
    ],
  },
  {
    title: "WEB3-AI-NOTES",
    link: "#",
    images: [web2],
    description: [
      "Sticky notes dApp with MetaMask auth and IPFS storage.",
      "Used CryptoJS for encryption, ONNX + Hugging Face for local AI summarization.",
      "Fully secure, privacy-focused with tone detection.",
    ],
  },
  {
    title: "POLAROID-CAM",
    link: "https://polaroid-cam.netlify.app/",
    images: [cam1, cam2, cam3],
    description: [
      "A CRUD application where users can create memories by capturing moments.",
      "Material UI used for better UI and responsive user experience.",
      "MongoDB for flexible schemas and Axios for REST APIs.",
      "Redux used to manage app state in a single place.",
    ],
  },
  {
    title: "ELECTRONICS E-COMM.",
    link: "https://electronics1.herokuapp.com/",
    images: [elec1, elec2, elec4],
    description: [
      "An e-commerce web application for buying and selling electronics accessories.",
      "MERN stack app with JWT and bcrypt authentication.",
      "Used Cloudinary for high quality images.",
      "Admin panel and PayPal as payment gateway.",
    ],
  },
  {
    title: "WEB BUILDER'S",
    link: "https://web-builders.netlify.app/",
    images: [web, web2, web3],
    description: [
      "Purpose of this website is to make people aware about a small I.T solution business and freelancing clients on Fiverr and Upwork.",
      "In web-builders we make websites for SMALL BUSINESSES.",
      "Build the perfect business in the world we can.",
    ],
  },
];

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.yasir}>
      {projects.map((project, index) => (
        <div className={classes.projectBlock} key={index}>
          <Carousel fade className={classes.carousel} interval={2000} pause={false}>
            {project.images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  className={`d-block w-100 ${classes.projectImage}`}
                  src={img}
                  alt={`Slide ${i}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className={classes.pro}>
            <div className={classes.content}>
              <h1
                className={classes.head}
                data-aos-once="true"
                data-aos="zoom-in"
              >
                {project.title}
              </h1>
              <a className={classes.link} href={project.link}>
                {project.link}
              </a>
              {project.description.map((desc, j) => (
                <li className={classes.list} key={j}>
                  {desc}
                </li>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
