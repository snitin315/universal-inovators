import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "react-reveal/Fade"
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

//images 
import peer from "assets/img/peer.png"
import journals from "assets/img/journals.png"
import sideImage from "assets/img/journalsOverview3.png"

const useStyles = makeStyles(styles);

export default function Details() {
  const classes = useStyles();

  const design = {
    textAlign :"justify"
  }
  
  const flex = {
    display : 'flex',
    alignItems : 'center',
  } 


  return (
    <div className={classes.section}>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h3 className={classes.title}>JOURNALS</h3>
          <Fade bottom>
          <p className={classes.description} style={design}>
          Universal Inovators have already launches its first journal entitled <strong>"Innovative Computing and Communication: An International Journal"</strong>.
          Many more journals are in the pipeline, to being the part of our journals, write to us at <a> ijicc.editor@gmail.com</a>
          </p>
          </Fade>
        </GridItem>
      </GridContainer>

      <h3 className={classes.title}>ABOUT THE JOURNAL </h3>

      <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={4}>
            <Fade left duration={2000}>
             <img style = {{width : "100%"}}src={journals}/>
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={8}>

          <Fade right duration ={2000}>
          <p className={classes.description} style={design} >
          Every success story begins with a vision.The Universal Inovators (UI) is a private and autonomous body promoting research-based innovative activities all over the globe for the overall growth of human welfare and environment. The UI aims to do non-profit collaborative research in the field of engineering, applied sciences, management and other domains. We aim to be the leading independent academic and professional body working in collaboration with academicians, faculties, students, researchers, industry experts, Private bodies, government bodies and educational institutes. This leads us to be playing a creative and critical role in the society by disseminating teaching and research on a global scale, the cornerstones of which are good, long-term relationships, a focus on real life applications necessary for the welfare of the mankind, and an ability to combine quality and innovation. The mission of Universal Inovator is to cultivate and carry out research in high-tech, productive and cost efficient methodologies. We deal in conducting FDP’s, workshops, seminars, summer and winter schools, research projects, Book publishing, internship, and conferences. As a recognized body, Universal Innovators (UI) seeks to facilitate the availability of academic excellence and disseminate innovative knowledge worldwide.<br/>
          <strong> Universal Inovator is an Indian research lab </strong>to promote research and development in India via conferences, FDPs, workshops, seminars, summer and winter schools, journals, research collaborations, patents, paper publication, book publications and collaborated national and international projects.
          </p>
          </Fade>

          </GridItem>
      </GridContainer>
      
      
      <h3 className={classes.title}>PEER REVIEW PROCESS </h3>

      <GridContainer style = {flex}>
          
          <GridItem xs={12} sm={12} md={8}>

          <Fade right duration ={2000}>
          <p className={classes.description} style={design} >
           The Innovative Computing and Communication Journal - IJICC will not accept or publish papers without prior peer review. There shall be a review process of submitted papers by one or more independent referees who are conversant in the pertinent subject area.<br/>
           Peer reviews will be proposed by the Editing board, or will be confirmed by the Editorial board and the editor. For each paper two referees will be nominated, and when necessery the third one. The final decision about publishing the reviewed paper will bring the Editor.<br/>
           Authors should strive for maximum clarity of expression, bearing in mind that the peer reviewers are eminent scientists in the field of their research.<br/>
           Referees shall treat the contents of papers under review as privileged information not to be disclosed to others before publication. It is expected that no one with access to a paper under review will make any inappropriate use of the special knowledge which that access provides. Contents of abstracts submitted to conference program committees shall be regarded as privileged as well, and handled in the same manner.
          </p>
          </Fade>

          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Fade left duration={2000}>
             <img style = {{width : "100%"}}src={peer}/>
             </Fade> 
          </GridItem>  
      </GridContainer>
      

      <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={4}>
            <Fade left duration={2000}>
             <img style = {{width : "100%"}}src={sideImage}/>
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={8}>

          <Fade right duration ={2000}>
          <h3 className={classes.title}>OPEN ACCESS POLICY</h3>  
          <p className={classes.description} style={design} >
          This journal provides immediate open access to its content on the principle that making research freely available to the public supports a greater global exchange of knowledge.
          </p >
          <h3 className={classes.title}>ARTICLE PROCESSING CHARGES </h3>
          <p className={classes.description} style={design}>
          Publication in Innovative Computing and Communication Journal (IJICC) is without any costs/charge to authors. All processing and publishing costs are borne by the journal owner rather than by the author.
          </p>
          </Fade>

          </GridItem>
      </GridContainer>
      

      <Fade bottom>
      <p className={classes.description} style={design}>
      
      </p>
      </Fade>

     
      <Fade bottom>
      <p className={classes.description} style={design}>
     
      </p>
      </Fade>
      <h5 className={classes.title}>Web-Link For The Journal : <a href="http://icc-journal.com/" target="_blank" rel="noopener">icc-journal.com</a></h5>
      
    </div>
  );
}
