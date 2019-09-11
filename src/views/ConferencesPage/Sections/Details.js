import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Fade from 'react-reveal/Fade'
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { SupervisorAccount } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Details() {
  const classes = useStyles();
  const design = {
    textAlign : "justify"
  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h3 className={classes.title}>Conferences</h3>
          <Fade up>
          <p className={classes.description} style ={design}>
            Universal Inovators have already organised many conferences. The flagship conference of Universal Inovators is <strong>International Conference on Innovative Computing and Communication (ICICC).</strong>
           <br/>International Conference on Innovative Computing and Communication (ICICC) is organised with the objective of bringing together innovative scientists, professors, research scholars,
           students and industrial experts in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote the exchange of innovative scientific information
            between researchers, developers, engineers, students, and practitioners. Another goal is to promote the transformation of fundamental research into institutional and industrialized research and 
            to convert applied exploration into real time application. Overall the conference will provide the researchers and attendees with prospects for national and international collaboration and 
            networking among universities and institutions from India and abroad for promoting research.
          </p>
          </Fade>
        </GridItem>
      </GridContainer>
      <div>
      <h4  className={classes.title}>Some Of The Details Of The Conferences Are As Follows:</h4>
        <GridContainer>
        
          <GridItem xs={12} sm={12} md={4}>
          <Fade left>
            <InfoArea
              title="1st Conference"
              description="First International Conference on Innovative Computing and Communications (ICICC-2018) has been organized at Guru Nanak Institute of Management, New Delhi, India on 5-6th May 2018. We received 468 papers and accepted 92 papers with an acceptance ratio of 19%. All accepted papers has already been published by Springer in its reputed Scopus indexed Lecture Notes on Networks and Systems (LNNS). We received papers from 20 countries and got lot of recommendations from the science community for the organization and the quality of papers."
              icon={SupervisorAccount}
              iconColor="primary"
              vertical
            />
             </Fade>
          </GridItem>
         

          
          <GridItem xs={12} sm={12} md={4}>
          <Fade left delay={500}>
            <InfoArea
              title="2nd Conference"
              description="Second version of International Conference on Innovative Computing and Communications (ICICC-2019) has been organized at VSB-Technical University of Ostrava, Czech Republic on 21-22nd March 2019 with a pre-conference symposium at New Delhi, India on 16th March 2019. We received around 552 papers and accepted 125 papers with an acceptance ratio of 22%. All accepted papers will be published by Springer in its reputed scopus indexed AISC. We received papers from 25 countries"
              icon={SupervisorAccount}
              iconColor="primary"
              vertical
            />
            </Fade>
          </GridItem>
          

          
          <GridItem xs={12} sm={12} md={4}>
          <Fade left delay={1000}>
            <InfoArea
              title="3rd Conference"
              description="The third version of ICICC-2020 will be held at Shaheed Sukhdev College of Business Studies, University of Delhi, New Delhi on 21-23rd February,2020 and it is jointly organised by Shaheed Sukhdev College of Business Studies, University of Delhi and National Institute of Technology Patna. All the accepted papers (after double blinded peer review) are published by Springer AISC series (ISI Proceedings, EI-Compendex, DBLP, SCOPUS, Google Scholar and Springerlink) and extended selected papers will be published in the special issues of SCI/SCOPUS/WoS/DBLP/ACM indexed Journals."
              icon={SupervisorAccount}
              iconColor="primary"
              vertical
            />
            </Fade>
          </GridItem>
         
        </GridContainer>

        <h5 className={classes.title}>Web-Link For The Conference : <a href="http://icicc-conf.com/" target="_blank">icicc-conf.com</a></h5>
       
      </div>
    </div>
  );
}
