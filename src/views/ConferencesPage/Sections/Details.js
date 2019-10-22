import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import sideImage from "assets/img/conf2.jpg"
import gif from "assets/img/Conf.gif"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Fade from 'react-reveal/Fade'
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import NavPills from "components/NavPills/NavPills.js";
import { SupervisorAccount } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const design= {
  textAlign : 'justify',
   }

const flex = {
  display : 'flex',
  alignItems : 'center',
}

export default function Details() {
  const classes = useStyles();
  const design = {
    textAlign : "justify"
  }
  return (
    <div className={classes.section}>
      <h3  className={classes.title}>International Conference on Innovative Computing and Communication <a href="http://icicc-conf.com">(ICICC)</a></h3>
      <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={6}>
            <Fade left duration={2000}>
             <img style = {{width : "100%"}}src={sideImage}/>
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={6}>

          <Fade right duration ={2000}>
          <p className={classes.description} style={design} >
          <strong>International Conference on Innovative Computing and Communication (ICICC)</strong> is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners.<br/>
          Another goal is to promote the transformation of fundamental research into institutional and industrialized research and to convert applied exploration into real time application. Overall the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions from India and abroad for promoting research.
          </p>
          </Fade>

          </GridItem>
          </GridContainer>
      
      <div>
      <h4 className={classes.title}>OUR CONFERENCES</h4>  
      <h4  className={classes.description}>Some Of The Details Of The Conferences Are As Follows:</h4>
      <NavPills
      color="info"
      tabs={[
        {
          tabButton: "Conference 2018",
          tabContent: (
            <GridContainer style = {flex}>
            <GridItem xs={12} sm={12} md={3}>
              <Fade left duration={2000}>
               <img style = {{width : "100%"}} src={gif}/>
               </Fade> 
            </GridItem>    
  
            <GridItem xs={12} sm={12} md={9}>
  
           
            <p className={classes.description} style={design} >
              <strong>468 papers received</strong> | <strong>  92 papers accepted </strong> <br/><br/>
              First International Conference on Innovative Computing and Communications (ICICC-2018) has been organized at Guru Nanak Institute of Management, New Delhi, India on 5-6th May 2018. We received 468 papers and accepted 92 papers with an acceptance ratio of 19%. All accepted papers has already been published by Springer in its reputed Scopus indexed Lecture Notes on Networks and Systems (LNNS). We received papers from 20 countries and got lot of recommendations from the science community for the organization and the quality of papers.
            </p>
          
  
            </GridItem>
            </GridContainer>
          )
        },
        {
          tabButton: "Conference 2019",
          tabContent: (
            <GridContainer style = {flex}>
            <GridItem xs={12} sm={12} md={3}>
              <Fade left duration={2000}>
               <img style = {{width : "100%"}} src={gif}/>
               </Fade> 
            </GridItem>    
  
            <GridItem xs={12} sm={12} md={9}>
  
           
            <p className={classes.description} style={design} >
              <strong>552 papers received</strong> | <strong>  125 papers accepted </strong> <br/><br/>
              Second version of International Conference on Innovative Computing and Communications (ICICC-2019) has been organized at VSB-Technical University of Ostrava, Czech Republic on 21-22nd March 2019 with a pre-conference symposium at New Delhi, India on 16th March 2019. We received around 552 papers and accepted 125 papers with an acceptance ratio of 22%. All accepted papers will be published by Springer in its reputed scopus indexed AISC. We received papers from 25 countries
            </p>
          
  
            </GridItem>
            </GridContainer>
            
          )
        },
        {
          tabButton: "Conference 2020 ",
          tabContent: (
            <GridContainer style = {flex}>
            <GridItem xs={12} sm={12} md={3}>
              <Fade left duration={2000}>
               <img style = {{width : "100%"}} src={gif}/>
               </Fade> 
            </GridItem>    
  
            <GridItem xs={12} sm={12} md={9}>
  
           
            <p className={classes.description} style={design} >
              <strong>643 papers received</strong> | <strong>  134 papers accepted </strong> <br/><br/>
              The third version of ICICC-2020 will be held at Shaheed Sukhdev College of Business Studies, University of Delhi, New Delhi on 21-23rd February,2020 and it is jointly organised by Shaheed Sukhdev College of Business Studies, University of Delhi and National Institute of Technology Patna. All the accepted papers (after double blinded peer review) are published by Springer AISC series (ISI Proceedings, EI-Compendex, DBLP, SCOPUS, Google Scholar and Springerlink) and extended selected papers will be published in the special issues of SCI/SCOPUS/WoS/DBLP/ACM indexed Journals.
            </p>
          
  
            </GridItem>
            </GridContainer>
          )
        }
      ]}
    />
        
        <h5 className={classes.title}>Web-Link For The Conference : <a href="http://icicc-conf.com/" target="_blank">icicc-conf.com</a></h5>
       
      </div>
    </div>
  );
}
