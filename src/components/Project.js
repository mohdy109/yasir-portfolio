import React from 'react';
import classes from '../assets/css/Project.module.css'
import web from "../assets/images/web.png"
import web2 from "../assets/images/web2.png"
import web3 from "../assets/images/web4.png"
import cam1 from "../assets/images/cam1.png"
import cam2 from "../assets/images/cam2.png"
import cam3 from "../assets/images/cam3.jpeg"
import elec1 from "../assets/images/elec1.jpeg"
import elec2 from "../assets/images/elec2.jpeg"
import elec4 from "../assets/images/elec4.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import "aos/dist/aos.css"
import Aos from "aos"

const Project = () => {
  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  return <>
 <div className={classes.yasir}>

  

<div className={classes.img}  >

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web3}
      alt="Third slide"
    />

    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>








<div className={classes.pro}>


<div className={classes.content}>

<h1 className={classes.head} data-aos-once="true" data-aos="zoom-in"  >WEB BUILDER'S</h1>

<a className={classes.link} href="https://web-builders.netlify.app/" >https://web-builders.netlify.app/</a>

<li className={classes.list}>Purpose of this website is to make people aware about a small I.T solution bussiness and freelancing client's on fiverr and upwork.</li>
<li className={classes.list} >In web-builders we make websites for SMALL BUSINESSES.</li>
<li className={classes.list} >Build the perfect bussiness in the world we can.</li>

</div>
<div/>
</div>
</div>
   
{/*second  */}
<div className={classes.img} style={{marginTop:"35rem"}}>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cam1}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cam2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cam3}
      alt="Third slide"
    />

    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>








<div className={classes.pro}>


<div className={classes.content}>

<h1 className={classes.head} data-aos-once="true" data-aos="zoom-in"  >POLAROID-CAM</h1>

<a className={classes.link} href="https://polaroid-cam.netlify.app/" >https://polaroid-cam.netlify.app/</a>

<li className={classes.list}>A CRUD APPLICATION where user can create your memories by capturing the moments.</li>
<li className={classes.list} >MATERIAL UI is used for bettter UI and RESPONSIVE USER EXPERIENCE.</li>
<li className={classes.list} >MONGODB used as database for Flexible document schemas and AXIOS for REST API'S.</li>
<li className={classes.list} >REDUX used to manage APP STATE in single place.</li>

</div>
<div/>
</div>
</div>
   
   
{/*third  */}

<div className={classes.img}  style={{marginTop:"-38rem"}}  >

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elec1}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elec2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elec4}
      alt="Third slide"
    />

    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>








<div className={classes.pro}>


<div className={classes.content}>

<h1 className={classes.head} data-aos-once="true" data-aos="zoom-in" >ELECTRONICS E-COMM.</h1>

<a className={classes.link} href="https://electronics1.herokuapp.com/" >https://electronics1.herokuapp.com/</a>

<li className={classes.list}>An E-COMMERCE WEB APPLICATION for buying and selling of ELECTRONICS ACCESSORIES.</li>
<li className={classes.list} >MERN APPLICATION built with JWT AND BYCRPT AUTHENTICATION.</li>
<li className={classes.list} >To hold high quality images use of CLOUDINARY PLATFORM.</li>
<li className={classes.list} >ADMIN PANEL to update product's and PAYPAL as payment gateway.</li>

</div>
<div/>
</div>
</div>
   

   
{/*fourth 
<div className={classes.img} style={{marginTop:"-3rem"}}   >

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web}
      alt="First slide"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={web3}
      alt="Third slide"
    />

    <Carousel.Caption>
 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>








  <div className={classes.pro}>


<div className={classes.content}>
<h1 className={classes.head} data-aos-once="true" data-aos="zoom-in"  >WEB-BUILDERS</h1>
<a className={classes.link} href="https://web-builders.netlify.app/" >https://web-builders.netlify.app/</a>

<li className={classes.list}>Purpose of this website is to make people aware about a small I.T solution bussiness and freelancing client's on fiverr and upwork.</li>
<li className={classes.list} >In web-builders we make websites for SMALL BUSINESSES.</li>
<li className={classes.list} >Build the perfect bussiness in the world we can.</li>

</div>
<div/>
  </div>
  </div>
   
 */}
</div> 
  
  
  
  
  </>;



};

export default Project;
