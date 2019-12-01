import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import sideImage from "assets/img/services.png"

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import Fade from 'react-reveal/Fade';
import  css from "./ProductSection.css"

const useStyles = makeStyles(styles);
const design= {
  textAlign : 'justify',
   }

const flex = {
  display : 'flex',
  alignItems : 'center',
}   

const Service = function(props){
  const classes = useStyles();
        return (
           <div style={{height:"270px"}} className="box">
              <div className="icon"><a href={props.link}><i class={props.icon}></i></a></div>
              <h4 className="title"><a href={props.link}>{props.title}</a></h4>
              <p className={classes.description} >{props.description}</p>
            </div>
        )}

export default function ProductSection() {
  const classes = useStyles();
  const design= {
    textAlign : 'justify',
     }
  return (

    <div className={classes.section} >
      
          
          <h3 className={classes.title}>Universal-Inovators: Research Lab</h3>
          
          <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={6}>
            <Fade left duration={2000}>
             <img style = {{width : "100%"}}src={sideImage}/>
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={6}>

          <Fade right duration ={2000}>
          <p className={classes.description} style={design} >
          Every success story begins with a vision.The Universal Inovators (UI) is a private and autonomous body promoting research-based innovative activities all over the globe for the overall growth of human welfare and environment. The UI aims to do non-profit collaborative research in the field of engineering, applied sciences, management and other domains. We aim to be the leading independent academic and professional body working in collaboration with academicians, faculties, students, researchers, industry experts, Private bodies, government bodies and educational institutes. This leads us to be playing a creative and critical role in the society by disseminating teaching and research on a global scale, the cornerstones of which are good, long-term relationships, a focus on real life applications necessary for the welfare of the mankind, and an ability to combine quality and innovation. The mission of Universal Inovator is to cultivate and carry out research in high-tech, productive and cost efficient methodologies. We deal in conducting FDP’s, workshops, seminars, summer and winter schools, research projects, Book publishing, internship, and conferences. As a recognized body, Universal Innovators (UI) seeks to facilitate the availability of academic excellence and disseminate innovative knowledge worldwide.<br/>
          <strong> Universal Inovator is an Indian research lab </strong>to promote research and development in India via conferences, FDPs, workshops, seminars, summer and winter schools, journals, research collaborations, patents, paper publication, book publications and collaborated national and international projects.
          </p>
          </Fade>

          </GridItem>
          </GridContainer>
       
      <div>
      <br/>
      <br/>
        <GridContainer >
          
          <GridItem xs={12} sm={6} md={4}>
            <Fade left >
            <Service
                link = "/conferences"
                icon = "fas fa-users"
                title = "Conferences"
                description = "Universal Inovators have already organised many conferences. The flagship conference of Universal Inovators is International Conference on Innovative Computing and Communication."
                
            />
            </Fade>

          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={500}>
            <Service
                link = "/journals"
                icon = "fas fa-check-circle"
                title = "Journals "
                description = "Universal Inovators have already launched its first journal entitled 'Innovative Computing and Communication : An International Journal'. Many more journals are in the pipeline"
                
            />  
           </Fade>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            
            <Fade left delay={1000}>
            <Service
                link = "/patent"
                icon = "fas fa-search"
                title = "Patent And Research"
                description = "We, at UI, provide end to end patent services starting from search, drafting and filing of your application till obtaining a grant and subsequent services in respect of the invention."
                
            />
            
            </Fade>
          </GridItem>

          <GridItem xs={12} sm={6} md={4}>
           <Fade left>
           <Service
                link = "/workshops"
                icon = "fas fa-gem"
                title = "FDP/Workshops/Seminar"
                description = "Universal Inovators have already organised a very successful One Week Faculty Development Program on 'Machine Learning with Data Analytics' at Shaheed Sukhdev College of Business Studies, New Delhi"
                
            />
            
           </Fade>
          </GridItem>

          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={500}>
            <Service
                link = "/uischool"
                icon = "fas fa-graduation-cap"
                title = "School"
                description = "Universal Inovators promotes UG/PG/ PhD students of all the streams and all years to learn latest and emerging technologies. UI provides the students an opportunity to attend its summer and winter schools."
                
            />
            
            </Fade>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={1000}>
            <Service
                link = "/books"
                icon = "fas fa-book "
                title = "Book Series"
                description = " Open Access publication series dedicated to archiving conference proceedings, edited books, monograph books dealing with all the aspects related to electrical engineering and computer science."
                
            />
            
            </Fade>
          </GridItem>
         
        </GridContainer>
        
        <h4  className={classes.title}>Universal Inovators Have Begin Their Aim & Move Ahead Towards Their Goal.</h4>
      </div>
    </div>
  );
}
