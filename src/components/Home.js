import React from 'react';
import classes from '../assets/css/Home.module.css'
import Typewriter from "typewriter-effect"
import { FiMail } from "react-icons/fi";
import yasir from "../assets/images/yasirr.jpg"
import styled from 'styled-components';

import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";


const Avatar = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
 
`;

const Navbarcss = () => {
  return <div className={classes.yasir}>

      <Avatar src={yasir} alt="Avatar" />
      

<div className={classes.heading}>

<h1 className={classes.head} >Hi, I'm Yasir.</h1>

<p className={classes.heading} ><Typewriter
options={{
  autoStart: true,
  loop: false,
  delay: 50,
  strings: [
    'Senior Full Stack Engineer & Certified Project Manager (PMP®).',
    '6+ years of experience in Web, Mobile, Blockchain & AI Applications.',
    'Expert in React, Node.js, Next.js, Web3, AWS, and OpenAI integrations.',
    'Driving scalable, user-centric solutions with a product-first mindset.'
  ]
}}>

   
</Typewriter></p>

<div className={classes.icon}>

<a style={{ color: 'inherit', textDecoration: 'inherit'}} href="mailto:mohdy109@gmail.com"><FiMail/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://github.com/mohdy109' ><FaGithub/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://www.linkedin.com/in/yasir-khan-681899217/' ><FaLinkedin/></a>
</div>

</div>
  </div>;
};

export default Navbarcss