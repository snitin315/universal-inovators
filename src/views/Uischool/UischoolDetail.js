import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import  Fade  from "react-reveal/Fade";

const useStyles = makeStyles(styles);

export default function UischoolDetails() {
  const classes = useStyles();

  const design ={
    textAlign : 'justify'
  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h3 className={classes.title}>UI-SCHOOL</h3>
          <Fade bottom>
          <p className={classes.description} style={design}>
          Universal Inovators promotes UG/PG/ PhD students of all the streams and all years to learn latest and emerging technologies. UI provides the students an opportunity to attend its summer and winter schools.<br/>
          UI is currently offering the summer and winter schools on Machine Learning and Deep Learning.
          </p>
          </Fade>
        </GridItem>
      </GridContainer><br/>

      <Fade bottom>
      <Card className={classes.textCenter}>
        <strong><CardHeader color="info">HIGHLIGHTS OF THE PROGRAM</CardHeader></strong>
        
        <CardBody> 
          <h4 className={classes.cardTitle}><strong>Machine Learning and Deep Learning.</strong></h4>
          
          <Fade left cascade delay={500}>
          <p style={design}>
                    
              <li><strong>Python and R Programming languages</strong></li> <br/>
              <li>  <strong>Learn Machine Learning (Decision Tree, Random Forest, SVM, Linear Model, etc)</strong></li> <br/>
              <li>  <strong>Learn Deep Learning (CNN, RNN, LSTM, GAN, Auto-encoders, etc</strong></li> <br/>
              <li>  <strong>Optimization Techniques (Genetic Algorithm, PSO, Random Algorithms, DE)</strong></li> <br/>
                <li>  <strong>One major project and 5-6 minor project. Top three projects will be awarded prizes.</strong></li> <br/>
                <li>  <strong>Hands-on practice on IoT.</strong></li> <br/>
                <li>  <strong>Learn how to write research paper and patents</strong></li> <br/>
                <li>  <strong>Many more (Block chain, Flask, DJango, JavaScript, NodeJS, React, Exploring Machine Learning competitions such as <a href="https://www.kaggle.com" target="_blank" rel="noopener">www.kaggle.com)</a></strong></li> <br/>
                <li>  <strong>Resource persons are from IITs, NITs, IIITs, Thapar and Industry.</strong></li> <br/>
             
          </p>
          </Fade>
        
        </CardBody>
       
      </Card>
      </Fade>
      
      <p className = {classes.description} style ={design}>
        
        <li><strong>Tentative Dates for summer school: </strong>3rd week of June to 4th week of July. Monday to Friday | 09:00 to 13:00 </li>
        <li><strong>​Tentative Dates for winter school: </strong>  4th week of December to 1st week of January. Monday to Friday | 09:00 to 13:00 </li>
        <li><strong>Target Audience:</strong> UG/PG/ PhD students of all the streams and all years​ </li>
        <li><strong>Tentative number of seats: </strong> 180 </li>

      </p>

      <h5 className={classes.title}>For Any Enquiry Related To School Write Us At : <a>universalinovators@gmail.com</a></h5>
      
    </div>
  );
}
