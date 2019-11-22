import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import "./Sections/Slider.scss"
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import StartupHeader from "components/Header/StartupHeader";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from 'react-reveal/Fade';


// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import About from "./Sections/About.js";
import Category from "./Sections/Category.js";
import Preloader from "components/Preloader/Preloader.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function StartUpPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    alignItems : 'center',
  } ;

  const Slide = function(props){
    return(
    <div class="slide">
       <img src={props.img} />
    </div>
    )}

 
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
      
      <Fade duration = "1500"  >
      <Parallax  filter image={require("assets/img/startup-about.jpeg")}>
        <div className={classes.container}>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={12} md={6}>
            
              <h1 className={classes.title} > <CharPose  text = "Where StartUp Meets Investors" /></h1>
             
              <br />

            </GridItem>

          </GridContainer>
        </div>
      </Parallax>
      </Fade>
      
      <Fade bottom duration ={2000} delay="500">
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
         <About/>

         <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="250" width="250" alt="" />
              </div>
              <div class="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="250" width="250" alt="" />
              </div>
              <div class="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="250" width="250" alt="" />
              </div>
              <div class="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
              </div>
            </div>
        </div>

         <Category/>

        </div>
        
      </div>
      </Fade>
      <Footer />
      <Preloader/>
    </div>
  );
}
