import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import sideImage from "assets/img/school.jpg"

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import  Fade  from "react-reveal/Fade";

const useStyles = makeStyles(styles);

export default function UischoolDetails() {
  const classes = useStyles();

  const design ={
    textAlign : 'justify'
  }

   
  const flex = {
    display : 'flex',
    alignItems : 'center',
  } 

  const Service = function(props){
    const classes = useStyles();
          return (
             <div className="box" style={{height : "200px", boxShadow : "0 0"}}>
                <div className="icon"><a href={props.link}><i class={props.icon}></i></a></div>
                <h4 className="title"><a href={props.link}>{props.title}</a></h4>
                <p className={classes.description} >{props.description}</p>
              </div>
          )}


  return (
    <div className={classes.section}>
      <GridContainer style = {flex}>

          <GridItem xs={12} sm={12} md={6}>

          <h3 className={classes.title}>UI-SCHOOL</h3>
          <Fade right duration ={2000}>
          <p className={classes.description} style={design} >
          Every success story begins with a vision.The Universal Inovators (UI) is a private and autonomous body promoting research-based innovative activities all over the globe for the overall growth of human welfare and environment. The UI aims to do non-profit collaborative research in the field of engineering, applied sciences, management and other domains. We aim to be the leading independent academic and professional body working in collaboration with academicians, faculties, students, researchers, industry experts, Private bodies, government bodies and educational institutes. This leads us to be playing a creative and critical role in the society by disseminating teaching and research on a global scale, the cornerstones of which are good, long-term relationships, a focus on real life applications necessary for the welfare of the mankind, and an ability to combine quality and innovation. The mission of Universal Inovator is to cultivate and carry out research in high-tech, productive and cost efficient methodologies. We deal in conducting FDP’s, workshops, seminars, summer and winter schools, research projects, Book publishing, internship, and conferences. As a recognized body, Universal Innovators (UI) seeks to facilitate the availability of academic excellence and disseminate innovative knowledge worldwide.<br/>
          <strong> Universal Inovator is an Indian research lab </strong>to promote research and development in India via conferences, FDPs, workshops, seminars, summer and winter schools, journals, research collaborations, patents, paper publication, book publications and collaborated national and international projects.
          </p>
          </Fade>

          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Fade left duration={2000}>
             <img style = {{width : "100%"}}src={sideImage}/>
            </Fade> 
          </GridItem> 
      </GridContainer>
      <br/>

      <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <Service 
             icon = "fas fa-clock"
             title = "Tentative Dates"
             description = "3rd week of June to 4th week of July & 4th week December to 1st week of January."
            
            />
          </GridItem>

          <GridItem xs={12} sm={4} md={4}>
            <Service 
             icon = "fas fa-microphone"
             title = "Target Audience"
             description = "Under Grad/Post Grad/ PhD students of all the streams and all years​."
            
            />
          </GridItem>

          <GridItem xs={12} sm={4} md={4}>
            <Service 
             icon = "fas fa-users"
             title = "Number Of Seat"
             description = "180 seats, Our motto is serving quality not quantity"
            
            />
          </GridItem>
      </GridContainer>


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
      

      <h5 className={classes.title}>For Any Enquiry Related To School Write Us At : <a>universalinovators@gmail.com</a></h5>
      
    </div>
  );
}
