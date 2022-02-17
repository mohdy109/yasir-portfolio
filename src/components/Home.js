import React from 'react';
import classes from '../assets/css/Home.module.css'
import Typewriter from "typewriter-effect"
import { FiMail } from "react-icons/fi";
import yasir from "../assets/images/yasirr.jpg"

import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";
const Navbarcss = () => {
  return <div className={classes.yasir}>

      <img src={yasir} alt="Avatar" className={classes.img}>
      </img>

<div className={classes.heading}>

<h1 className={classes.head} >Hi, I'm Yasir.</h1>

<p1 className={classes.heading} ><Typewriter
options={{autoStart:true
,loop:false,
delay:80,
strings:

    " I am an engineer who is deeply passionate about software development and innovation."

}}>

   
</Typewriter></p1>

<div className={classes.icon}>

<a style={{ color: 'inherit', textDecoration: 'inherit'}} href="mailto:mohdy109@gmail.com"><FiMail/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://github.com/mohdy109' ><FaGithub/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://www.linkedin.com/in/yasir-khan-681899217/' ><FaLinkedin/></a>
<a style={{ color: 'inherit', textDecoration: 'inherit'}} href='https://www.instagram.com/yas_khan20/'><FaInstagram/></a>

</div>

</div>
  </div>;
};

export default Navbarcss