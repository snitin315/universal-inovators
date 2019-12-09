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

//logo

import x100 from "assets/img/100x.png"
import huddle from "assets/img/huddle.png"
import icici from "assets/img/icicilogo.jpeg"

// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import Preloader from "components/Preloader/Preloader.js";

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
      
      <Fade duration = "1500"  >
      <Parallax filter image={require("assets/img/start-bg.png")}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            
              <h1 className={classes.title} style={{color:"cyan"}}> <CharPose text = "Special Invited Investors" /></h1>
             
              <br />

            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
             
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      </Fade>
      
      <Fade bottom duration ={2000} delay="500">
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
           <div className={classes.section}  style = {{ display : "flex", justifyContent : 'center'}}>
               <h3 className={classes.title} style={{textAlign:"center", color : "black"}}> Special Invited Ivestors </h3>
           </div>
         <br/>
         <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                <div> <img src={icici} style={container} /> </div> 
            </GridItem>
            <GridItem xs={12} sm={9} md={9}>
                <h4  className={classes.title} style={{textAlign:"center", color : "black"}} >ICICI BANK</h4>
            </GridItem>
          </GridContainer>
         </Fade>

         <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                <div> <img src={huddle} style={container} /> </div> 
            </GridItem>
            <GridItem xs={12} sm={9} md={9}>
                <h4  className={classes.title} style={{textAlign:"center", color : "black"}} >HUDDLE</h4>
            </GridItem>
          </GridContainer>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                <div> <img src={x100} style={container} /> </div> 
            </GridItem>
            <GridItem xs={12} sm={9} md={9}>
                <h4  className={classes.title} style={{textAlign:"center", color : "black"}} >100X VC</h4>
            </GridItem>
          </GridContainer>
         </Fade>
        <br/>  
        </div>
      </div>
      </Fade>
      <Footer />

    </div>
  );
}
