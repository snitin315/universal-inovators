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
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from 'react-reveal/Fade';


// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import Steps from "./Sections/Steps.js"
import CharPose from "./Sections/CharPose.js";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Universal Inovators"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
        {...rest}
      />
      
      <Fade duration = "1500"  >
      <Parallax filter image={require("assets/img/back.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            
              <h1 className={classes.title}> <CharPose text = " Your Story Starts With Us" /></h1>
             
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
          <ProductSection />

          <GridContainer>

              <Fade duration ={2000}>
              <Steps num="1st"  text ="UI have its flagship conference 'International Conference on Innovative Computing and Communication (ICICC)', whose primary aim is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. Another aim is to promote the transformation of fundamental research into institutional and industrialized research and to convert applied exploration into real time application. Overall the conference is successful to provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions from India and abroad for promoting research."/>
              </Fade>

              <Fade duration ={2000}>
              <Steps num="2nd" text=' UI have organised a one week faculty development program on "Machine Learning with Data Analytics". The FDP have got an overwhelming response from participants to attend this FDP. The number of registered participants are 40. The participants includes Industry Personnel, Academicians, and Research Scholar from India as well as from Outside India which makes this FDP International.'/>  
               </Fade>

               <Fade duration ={2000}>
              <Steps num="3rd" text='UI launches its first international journal "Innovative Computing and Communication: An International Conference". Innovative Computing and Communication Journal (IJICC) is an annual international scientific peer-reviewed journal. Journal publishes original scientific papers, preliminary communications and review articles from the field of Computing, Communication Networks and Security and Internet of Things, as well as relevant contributions from related scientific disciplines. Publication in Innovative Computing and Communication Journal is without any costs/charge to authors. All processing and publishing costs are borne by the journal owner rather than by the author.
               '/>
              </Fade>

              <Fade duration ={2000}>
              <Steps num="4th" text='UI have associated with some international research labs and colleges/universities to promote research activities, interaction between the researchers from India and abroad, promote collaborated projects via paper publication, patent filing, edited books etc.'/>
              </Fade>
            
              <Fade duration ={2000}>
               <Steps num="5th" text='UI promotes the researchers to apply special issue proposals in the reputed journals indexed in SCI/Scopus/Wos. To promote research activities, UI have associated with many reputed journals and special issues.'/>
              </Fade>

              <Fade duration ={2000}>
              <Steps num="6th" text="UI also promote startups i.e. Make in India initiative of Government of India. UI, under its flagship conference ICICC have launched a startup meet: where startup idea meet funders."/>
              </Fade>

            
              <Fade duration ={2000}>
               <Steps num="7th" text='UI promotes the researchers to write proceeding/edited/monograph books. Universal Innovators are inviting book proposals from reputed researchers and conference organisers.'/>
              </Fade>
         
              <Fade duration ={2000}>
            <Steps num="8th" text='UI promotes UG/PG/ PhD students of all the streams and all years to learn latest and emerging technologies. UI provides the students an opportunity to attend its summer and winter schools.'/>
               </Fade>



          <Fade duration ={2000}>
         <Steps num="9th" text="UI provide platform to host prediction models of ML as a serverless APIs. UI promotes the researcher to host their work and to show their outcome to the world."/>
         </Fade>
          <br/>
          
          </GridContainer>
        </div>
        
      </div>
      </Fade>
      <Footer />

    </div>
  );
}
