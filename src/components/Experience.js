import React from 'react'
import classes from '../assets/css/Experience.module.css'
import { useEffect } from 'react';
import "aos/dist/aos.css"
import Aos from "aos"


const Experience = () => {
    useEffect(() => {
        Aos.init({duration:1000});
      }, []);
  return (
    <div  className={classes.yasir}>

       <div>

    {/*Education*/}

    <div  style={{paddingTop:"5%"}}>

    <h1 className={classes.Education} data-aos-once="true" data-aos="zoom-in"  >Education :</h1>

    <h1 className={classes.Education} style={{fontSize:"2.3rem"}}>Bachelor's Degree in Information Tech. & Engineering</h1>

    <h1 className={classes.Education} style={{fontSize:"1.5rem",color:"#01bf71"}}>Guru Gobind Singh Indraprastha University , NEW DELHI  </h1>

    <h1 className={classes.Education} style={{fontSize:"1.3rem",color:"#fff"}}>2018-2022</h1>

    </div>

    <div className={classes.experience}>

    <h1 className={classes.experience} style={{marginTop:"10%"}}data-aos-once="true" data-aos="zoom-in" >Experience :</h1>

    <h1 className={classes.experience} style={{fontSize:"2.3rem"}}>Brew Crypto LLC.</h1>

    <h1 className={classes.experience} style={{fontSize:"1.5rem",color:"#01bf71"}}>  React Intern</h1>

    <h1 className={classes.experience} style={{fontSize:"1.3rem",color:"#fff"}}>November 2022 - January 2022</h1>

    <li className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Created a Web Application using react <span style={{color:"#fff"}}>Quantally.</span></li>
    <li className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Used latest technologies like <span style={{color:"#fff"}}>react bootstrap</span> for better performance.</li>
    <li className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Written an optimized code with team.</li>

   <a className={classes.experience} style={{fontSize:"1.2rem",color:"#fff",}} href="https://quantally.com/">https://quantally.com/</a>

    </div>


{/*Experience*/}

<div className={classes.experience}>


<h1 className={classes.experience} style={{fontSize:"2.3rem"}}>Kalpas Innovation.</h1>

<h1 className={classes.experience} style={{fontSize:"1.5rem",color:"#01bf71"}}>Node Intern</h1>

<h1 className={classes.experience} style={{fontSize:"1.3rem",color:"#fff"}}>November 2022 - March 2022</h1>

<li className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Worked with tech like  <span style={{color:"#fff"}}>Firebase, GraphQl, AWS.</span></li>
<li className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Worked on api's <span style={{color:"#fff"}}>REST</span> for better performance.</li>
<li className={classes.experience} style={{fontSize:"1.2rem",color:"#01bf71"}}>Created a match algorithem for dating app.</li>

<a className={classes.experience} style={{fontSize:"1.2rem",color:"#fff",}} href="https://in.linkedin.com/company/kalpas-innovations">http://Kalpas.in/</a>

</div>
    </div>
    
    
     </div>
  )
}

export default Experience