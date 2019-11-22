import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import "./Sections/Slider.scss"
// logo

import ssclogo from "assets/img/ssclogo.png"
import nitplogo from "assets/img/nitplogo.jpeg"
import npclogo from "assets/img/npclogo.jpeg"
import srgelogo from "assets/img/srgelogo.png"
import setitlogo from "assets/img/setitlogo.png"
import dilogo from "assets/img/dilogo.jpg"
import uilogo from "assets/img/uilogo.jpeg"
import minlogo from "assets/img/minlogo.png"
import dmrlogo from "assets/img/dmrlogo.jpeg"
import pkslogo from "assets/img/pkslogo.jpeg"
import autologo from "assets/img/autologo.jpeg"
import callogo from "assets/img/callogo.jpeg"
import plucklogo from "assets/img/plucklogo.jpeg"
import rtmlogo from "assets/img/rtmlogo.jpeg"
import spainlogo from "assets/img/spainlogo.jpeg"
import sgrtlogo from "assets/img/sgrtlogo.jpeg"
import negdlogo from "assets/img/negdlogo.jpeg"
import thinklogo from "assets/img/thinklogo.jpeg"
import gvlogo from "assets/img/gvlogo.png"

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
         <h2 style={{ textAlign : "center",color : "black"} }><strong>Partners And Promoters</strong></h2>
         <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img src= {ssclogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {nitplogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {npclogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {srgelogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {setitlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {dilogo} height="250" width="250"  />
              </div>
              <div class="slide">
                <img src= {uilogo} height="250" width="250" />
              </div>
              
              <div class="slide">
                <img src= {dmrlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {pkslogo} height="250" width="300" />
              </div>
              <div class="slide">
                <img src= {autologo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {callogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {plucklogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {rtmlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {spainlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {sgrtlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {negdlogo} height="250" width="300" />
              </div>
              <div class="slide">
                <img src= {thinklogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {gvlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {minlogo} height="250" width="400" />
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
