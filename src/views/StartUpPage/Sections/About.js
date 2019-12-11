import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from 'react-reveal/Fade';
import ServiceBox from "components/ServiceBox/ServiceBox.js"
import objective from "assets/img/startup1.jpg"
import sideImage from "assets/img/startup.jpg"
import sideImage2 from "assets/img/startup2.jpg"
import EventTracks from "./EventTracks";

const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();
  const design= {
    textAlign : 'justify',
     }

  const flex = {
    display : 'flex',
    alignItems : 'center',
  }   
  return (
    <div className={classes.section}>
    <h3 className={classes.title}  style={{marginTop : "-70px"}}>Awards & Prizes </h3>
    <br/>      
    <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Fade>
            <ServiceBox
            icon = "fas fa-trophy"
            title = "Start-up of the year Award"
            description = "The start-up with the greatest growth and success rate."
            />
          </Fade>
        </GridItem>
                  
        <GridItem xs={12} sm={12} md={4}>
          <Fade delay={500}>
            <ServiceBox 
            icon = "fas fa-trophy"
            title = "Young Innovator Award"
            description = "Best Student Start-Up"
            />
          </Fade>
        </GridItem>
         
          <GridItem xs={12} sm={12} md={4}>
            <Fade delay={1000}>
              <ServiceBox 
                icon = "fas fa-trophy"
                title = "Womanovator Award"
                description = "Best of a start-up/innovative idea led by a woman."
                />
              </Fade>
          </GridItem>
        </GridContainer>
        
        <h3 className = {classes.title}  style={{marginTop : "-40px"}}> Event Tracks</h3>
        <br/>
        <EventTracks/>
  </div>
  );
}
