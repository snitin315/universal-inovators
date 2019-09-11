import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
import SessionDetails from "./SessionDetails"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function StartUpPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    alignItems : 'center',
  } ;

  const style={
    color : 'cyan'
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
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={12} md={6}>
            
              <h1 className={classes.title} style={style} > <CharPose  text = "Sessions" /></h1>
             
              <br />

            </GridItem>

          </GridContainer>
        </div>
      </Parallax>
      </Fade>
      
      <Fade bottom duration ={2000} delay="500">
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
         <SessionDetails/>
        </div>
        
      </div>
      </Fade>
      <Footer />

    </div>
  );
}
