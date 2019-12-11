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
import Details from "./Details.js";
import Preloader from "components/Preloader/Preloader.js";
import rocket from "assets/img/rocket2.gif"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Eligibility(props) {
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
        color="white"
        routes={dashboardRoutes}
 
        rightLinks={<StartupHeader />}
        fixed
        changeColorOnScroll={{
          height: -1,
          color: "info"
        }}
        {...rest}
      />
            
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
         
         <Details/>

        </div>
        
      </div>

      <Footer />
   
    </div>
  );
}
