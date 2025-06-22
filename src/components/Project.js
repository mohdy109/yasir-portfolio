import React, { useEffect } from "react";
import classes from "../assets/css/Project.module.css";
import Carousel from "react-bootstrap/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";
import ENcryptedStickymain from "../assets/images/ENcryptedStickymain.jpeg";
import GptMain from "../assets/images/GptMain.jpeg";
import GPTQuestions from "../assets/images/GPTQuestions.jpeg";
import GPTSearch from "../assets/images/GPTSearch.jpeg";
import NFtProofMain from "../assets/images/NFtProofMain.jpeg";
import Proof1 from "../assets/images/Proof1.jpeg";
import Proof2 from "../assets/images/Proof2.jpeg";
import ProofChoose from "../assets/images/ProofChoose.jpeg";
import ProofMint from "../assets/images/ProofMint.jpeg";
import web from "../assets/images/web.png";
import web2 from "../assets/images/web2.png";
import web3 from "../assets/images/web4.png";
import cam1 from "../assets/images/cam1.png";
import cam2 from "../assets/images/cam2.png";
import cam3 from "../assets/images/cam3.jpeg";
import elec1 from "../assets/images/elec1.jpeg";
import elec2 from "../assets/images/elec2.jpeg";
import elec4 from "../assets/images/elec4.jpeg";
import main1 from "../assets/images/main1.PNG";
import main2 from "../assets/images/main2.PNG";
import main3 from "../assets/images/main3.PNG";
import main4 from "../assets/images/main4.PNG";
import main5 from "../assets/images/main5.PNG";


const projects = [
  {
    title: "ONCHAIN-DELIVERY-APP",
    link: "https://expo.dev/preview/update?message=OnChain-Delivery-App&updateRuntimeVersion=1.0.0&createdAt=2025-06-22T19%3A10%3A44.621Z&slug=exp&projectId=88dc4999-e695-451b-956a-1b489edd75fc&group=f56d833c-7dc0-4dea-aca6-64c45abecf73",
    images: [main1, main2,main3,main4,main5],
    description: [
      "This is a full-stack React Native app built with Expo using Expo Go for preview and testing.",
      "⚠️ Please download Expo Go before clicking the link:",
      "Google Play: https://play.google.com/store/apps/details?id=host.exp.exponent",
      "App Store: https://apps.apple.com/app/expo-go/id982107779",
      "▶️ Then open the preview link in Expo Go to test the app.",
      "The app allows delivery agents to capture delivery proof using their phone's native **camera** and **GPS location**.",
      "Captured images and geolocation data are **uploaded to IPFS using Pinata**, and the delivery proof is stored **on-chain** using **Node.js and Ethers.js** on the **Polygon Sepolia** network.",
      "Users can then retrieve and verify this proof using the delivery ID and email.",
      "Tech stack includes: React Native (Expo), Node.JS, Pinata for IPFS, OpenCage API for reverse geocoding, Ethers.js for blockchain interaction.",
      "JWT used for secure Pinata uploads.",
      "Expo Camera & Location APIs used to access native features.",
      "The app supports two roles: Delivery Agent (proof submission) and User (proof viewing).",
    ],
  },
  {
    title: "WEB3-GPT-CHATBOT",
    link: "https://web3-gpt-chatbot.netlify.app/",
    images: [GptMain,GPTQuestions,GPTSearch],
    description: [
      "Web3-native GPT chatbot with wallet authentication.",
      "Powered by LangChain, Vercel, and Pinecone for vector storage.",
      "Built using React + Node.js with encrypted chat memory.",
      "Supports contextual conversations using memory vectors and semantic search.",
      "User messages are tokenized and stored securely for personalized AI responses.",
      "Production-grade chatbot optimized for minimal latency and real-time inference.",

    ],
  },
  {
    title: "NFT-PROOFAI-APP",
    link: "https://nft-proofai-app.netlify.app/",
    images: [NFtProofMain,Proof1,Proof2,ProofChoose,ProofMint],
    description: [
      "React Native Expo app to capture real-world proof (photo/voice).",
      "AI summary and classification via Hugging Face.",
      "Stored on IPFS, minted as Soulbound NFTs on Polygon Sepolia.",
      "Used Wagmi, Ethers.js, and Styled Components.",
      "Built using Styled Components with native device access for camera and audio.",
      "A powerful tool for blockchain-verified proof of real-life events.",
      "Minting process is handled on-chain, with IPFS metadata and secure proof storage.",
      "Designed for decentralized reputation systems and verified reviews.",
    ],
  },
  {
    title: "WEB3-AI-NOTES",
    link: "https://ai-web3-notes.netlify.app/",
    images: [ENcryptedStickymain],
    description: [
      "Sticky notes dApp with MetaMask auth and IPFS storage.",
      "Used CryptoJS for encryption, ONNX + Hugging Face for local AI summarization.",
      "Fully secure, privacy-focused with tone detection.",
      "Privacy-focused dApp — no central database or server needed.",
      "Users can view, create, encrypt, and delete notes in a fully decentralized manner.",
      "Each note is enhanced with human-readable timestamp and tone label.",
      "Automatic content enhancement without relying on paid APIs like OpenAI.",
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
      "Includes edit, delete, and organize features for photo memories.",
      "Inspired by the idea of modernizing polaroid photo collection digitally.",
    ],
  },
  {
    title: "ELECTRONICS E-COMM.",
    link: "https://electronics1.herokuapp.com/",
    images: [elec1, elec2, elec4],
    description: [
      "An e-commerce web application for buying and selling electronics accessories.",
      "MERN stack app with secure JWT authentication and bcrypt hashing.",
      "Admin dashboard to manage products, orders, and customers efficiently.",
      "Integrated PayPal API for seamless and secure payments.",
      "Cloudinary used for optimized and high-quality product image uploads.",
      "Mobile responsive, intuitive UI and full cart functionality with order tracking.",

    ],
  },
  {
    title: "WEB BUILDER'S",
    link: "https://web-builders.netlify.app/",
    images: [web, web2, web3],
    description: [
      "Portfolio-style website to showcase freelance I.T and web solutions services.",
      "Focused on helping small businesses and local startups get online quickly.",
      "Highlights services offered on Fiverr and Upwork for lead generation.",
      "Clean UI/UX layout with sections like About, Projects, and Contact.",
      "Built using HTML, CSS, JS, and deployed on Netlify.",
      "Fast, mobile-responsive, and SEO-optimized to attract potential clients.",
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
