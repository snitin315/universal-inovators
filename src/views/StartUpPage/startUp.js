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
import ParticlesContainer from "components/Particle/Particle.js"
import Button from "components/CustomButtons/Button.js";

// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import About from "./Sections/About.js";
import Category from "./Sections/Category.js";
import Funding from "./Sections/Funding.js";
import Preloader from "components/Preloader/Preloader.js";
import Slider from "./Sections/Slider.js";

import rocket from "assets/img/rocket2.gif"
import EventTracks from "./Sections/EventTracks.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function StartUpPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    alignItems : 'center',
  } ;
  const btn ={
    borderRadius: "25px",
    border : "1px solid #fff"
  }
 
  return (
    <div>
     
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Startup Meet Investors"
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
              <h2 className={classes.title}><CharPose text="Where StartUp Meet Investors" /></h2>
              <h6 className={classes.title} style={{marginTop : "-10px"}}>Let your dreams come true || Your Story Starts with us</h6>
              <br />
              <Button
                style={btn}
                color="white"
                size="md"
                href="/startup-application-form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-pencil-alt" />
               <b style={{color:"#888"}}>Register Today</b> 
              </Button>
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
          <About />
          <Funding/>
          <Slider/>
          <Category/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
