import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { SupervisorAccount , Apps, School,Book,} from "@material-ui/icons";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const design= {
    textAlign : 'justify',
     }
  return (

    <div className={classes.section} >
      
          
          <h3 className={classes.title}>Universal-Inovators: Research Lab</h3>
          
          <Fade bottom duration ={2000}>
          <p className={classes.description} style={design} >
          Every success story begins with a vision.The Universal Inovators (UI) is a private and autonomous body promoting research-based innovative activities all over the globe for the overall growth of human welfare and environment. 
          The UI aims to do non-profit collaborative research in the field of engineering, applied sciences, management and other domains. We aim to be the leading independent academic and professional body working in collaboration 
          with academicians, faculties, students, researchers, industry experts, Private bodies, government bodies and educational institutes. This leads us to be playing a creative and critical role in the society by disseminating teaching 
          and research on a global scale, the cornerstones of which are good, long-term relationships, a focus on real life applications necessary for the welfare of the mankind, and an ability to combine quality and innovation. The 
          mission of Universal Inovator is to cultivate and carry out research in high-tech, productive and cost efficient methodologies. We deal in conducting FDP’s, workshops, seminars, summer and winter schools, research projects,
          Book publishing, internship, and conferences. As a recognized body, Universal Innovators (UI) seeks to facilitate the availability of academic excellence and disseminate innovative knowledge worldwide.
          <br/><strong>Universal Inovator is an Indian research lab </strong>to promote research and development in India via conferences, FDPs, workshops, seminars, summer and winter schools, journals, research collaborations, patents, paper publication, book publications
          and collaborated national and international projects.
          </p>
          </Fade>
       
      <div>
      
        <GridContainer>
          
          <GridItem xs={12} sm={6} md={4}>
            <Fade left >
            <InfoArea
              title="Conferences"
              description="Universal Inovators have already organised many conferences. The flagship conference of Universal Inovators is International Conference on Innovative Computing and Communication (ICICC)."
              icon={SupervisorAccount}
              iconColor="primary"
              link="/conferences"
              vertical
            />
            </Fade>

          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={500}>
            <InfoArea
              title="Journals"
              link = "/journals"
              description="Universal Inovators have already launched its first journal entitled 'Innovative Computing and Communication : An International Journal'. Many more journals are in the pipeline"
              icon={VerifiedUser}
              iconColor="primary"
              vertical
            />
            </Fade>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            
            <Fade left delay={1000}>
            <InfoArea
              title="Patent And Research"
              description="We, at UI, provide end to end patent services starting from search, drafting and filing of your application till obtaining a grant and subsequent services in respect of the invention."
              icon={Fingerprint}
              iconColor="info"
              link="/patent"
              vertical
            />
            </Fade>
          </GridItem>

          <GridItem xs={12} sm={6} md={4}>
           <Fade left>
            <InfoArea
              title="FDP/Workshops/Seminar"
              description="Universal Inovators have already organised many conferences. The flagship conference of Universal Inovators is International Conference on Innovative Computing and Communication (ICICC)."
              icon={Apps}
              iconColor="primary"
              link="/workshops"
              vertical
            />
           </Fade>
          </GridItem>

          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={500}>
            <InfoArea
              title="School"
              description="Universal Inovators have already launched its first journal entitled 'Innovative Computing and Communication : An International Journal'. Many more journals are in the pipeline"
              icon={School}
              iconColor="primary"
              link = "/uischool"
              vertical
            />
            </Fade>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={1000}>
            <InfoArea
              title="Book Series"
              description="We, at UI, provide end to end patent services starting from search, drafting and filing of your application till obtaining a grant and subsequent services in respect of the invention."
              icon={Book}
              iconColor="primary"
              link ="/books"
              vertical
            />
            </Fade>
          </GridItem>
         
        </GridContainer>
        
        <h4  className={classes.title}>Universal Inovators Have Begin Their Aim & Move Ahead Towards Their Goal.</h4>
      </div>
    </div>
  );
}
