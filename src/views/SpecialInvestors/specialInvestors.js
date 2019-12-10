import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import StartupHeader from "components/Header/StartupHeader";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from 'react-reveal/Fade';
import rocket from "assets/img/rocket2.gif"
import Carousel from "react-slick";

//logo

import x100 from "assets/img/100x.png"
import huddle from "assets/img/huddle.png"
import icici from "assets/img/icici-bank-logo.jpg"
import nasscom from "assets/img/nasscom.jpeg"


// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import Preloader from "components/Preloader/Preloader.js";
import ParticlesContainer from "components/Particle/Particle.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Investors(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  } ;

  const style={
    color : 'cyan'
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
  };
  const container ={
    width : '100%'
  }
  
  return (
    <div>

      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Universal Inovators"
        rightLinks={<StartupHeader />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
        {...rest}
      />
      
      
    <Parallax filter responsive style={{backgroundColor:"#28a796"}}> 
    <ParticlesContainer />
        <div className={classes.container}>
          <GridContainer style={flex}>
            <GridItem xs={12} sm={12} md={6}>
              <br/>
              <h2 className={classes.title}><CharPose text="Special invited Investors" /></h2>
              <br />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <br/>
              <img src ={rocket} style={{maxWidth:"100%", opacity:"0.8", borderRadius:" 100% 100% 0% 0%"}}/>
            </GridItem>
          </GridContainer>
        </div>
    </Parallax> 
    
      
 
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
           <div className={classes.section}  style = {{ display : "flex", justifyContent : 'center'}}>
               <h3 className={classes.title} style={{textAlign:"center", color : "black"}}> Special Invited Ivestors </h3>
           </div>
         <br/>
        </div>
        <Carousel {...settings}>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={icici} height="150px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.title}><strong>ICICI BANK</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={huddle} height="150px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.title}><strong>HUDDLE</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={x100} height="150px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.title}><strong>100X VC</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={nasscom} height="150px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.title}><strong>Nasscom</strong></h6>
                </div>
            </GridItem>          
        </Carousel>
       <Footer />

    </div>
    </div>
  );
}
