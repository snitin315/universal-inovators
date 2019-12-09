import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from 'react-reveal/Fade';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import { cardTitle } from "assets/jss/material-kit-react.js";
import session from "assets/img/session.svg"
import session2 from "assets/img/startup-about-2.jpg"
import ServiceBox from "components/ServiceBox/ServiceBox";
import sideImage from "assets/img/startup.jpg"

const useStyles = makeStyles(styles);

export default function SessionDetails() {
  const classes = useStyles();
  const design= {
    textAlign : 'justify',
     }

  const flex = {
    display : 'flex',
    alignItems : 'center',
  }   

  const cardstyles = {

    cardTitle,
  };


const awards = {
    display : 'flex',
    justifyContent : "center"
  }
  
  const useCardStyles = makeStyles(cardstyles);
  const cards = useCardStyles();

  return (

    <div className={classes.section} >
      
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
              <Fade>
              <h3 className={classes.title}>ICICC Startup Event: Where Startup Meets Investor</h3>
              </Fade>
              <h5 className={classes.description}>
              ICICC is a non-profit organization under the umbrella of Universal Innovator. It has successfully conducted numerous technical conferences, FDPs and workshops. It has also been parts of Nasa hackthons and has members who have successfully organized and prepared teams for AICTE’s Smart India Hackathons. It has support of many reputed international and national organizations. ICICC enjoys support of many top private companies, research labs, government agencies, Private and Government Banks, funding agencies, publishing houses and many more other organizations.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer style = {flex}>  
            <GridItem xs={12} sm={12} md={6}>
              <img style={{width : '100%'}} src={sideImage} /> 
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3 className={classes.title}> About The StartUp Event</h3>
              <p className={classes.description}>
              ICICC in association with many reputed funding agencies is organizing a Startup event, where startup ideas meet funder. The selection procedure for the startup idea will be professional, stringent and scientific in nature.
              The prime objective of the startup meet is for successful ventures of future. The process of converting ideas into ventures will be monitored by several standard associated expert agencies at various levels to increase the hit ratio.
              In short the investors’ money will be invested in right direction. New and already running startup ideas will be invited to showcase their innovative ideas with all the desired details. Funders (Crowdfunding, Self-funding,
              Venture Capitalists, Angel Investment) will also be invited to listen the ideas showcased by the startup teams. There will be close interaction between startup teams and Funders to chart the future path. The event will be organized under 
              the banner of ICICC and supported by many Government and Private Organizations. This event is a flagship initiative of ICICC, intended to build a strong ecosystem that is conducive for the growth of startup businesses, to drive sustainable economic growth 
              and generate large scale employment opportunities. 
              </p>
            </GridItem>
          </GridContainer>
          <br/>
          <br/>
          <h3 className={classes.title}>Mentoring Session </h3>
          <br/>
          <br/>
          <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={6}>
            <Fade left duration={2000}>
             <img src={session} style={{width:'100%'}}/>
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={6}>

          <Fade right duration ={2000}>
          <p className={classes.description} style={design} >
          A mentoring session is utmost important for the budding entrepreneurs who seek a direction and the conviction and confidence on the insight of their start-up ideas. All qualified teams at our Start-Up event will be mentored and monitored by experts. There will be a one-on-one mentoring session with mentors having an expert knowledge in the field of your start-up. There will two mentors allotted to each start-up namely:<br/>
          <ul>
             <li><strong>Technical Mentor -</strong>For Core Field Guidance, technical enhancement, etc.</li> 
             <li><strong>Finance/Business Mentor -</strong>For Guidance on Financial Aspect of the Start-Up, market study, enhanced profit margins, viability and longevity aspects, etc.</li> 
          </ul>
         

          </p>
          </Fade>

          </GridItem>
          </GridContainer>
            
          <h3 className={classes.title}>Executive Networking Session – High Tea Session</h3>

          <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={6}>
            <Fade left duration={2000}>
             <img src={session2} style={{width:'100%'}}/>
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={6}>

          <Fade right duration ={2000}>
          <p className={classes.description} style={design} >
          This world is now becoming more and more entrepreneur-oriented. A start-up begins with an idea and the prime obstruction is how to take forward that idea towards a successful business keeping in view the societal issues. We expect people coming with different interests and backgrounds. Some people may have successful start-ups while some might just have ideas and looking for some kind of mentorship and funding to take the
          idea to implementation. Through our Start-Up event we will lay a platform for the networking and interaction amongst the speakers, young entrepreneurs and the audience (participants).       
          </p>
          </Fade>

          </GridItem>
          </GridContainer>
         

          <h3 className = {classes.title}> Event Tracks</h3>

          <GridContainer style={awards}>

          <Fade left >
          <GridItem xs={12} sm={6} md={3}>
             <Card style={{width: "14rem"}}>
                 <strong><CardHeader color="info">Track 1</CardHeader>  </strong>     
                <CardBody>
                <h4 className={cards.cardTitle}> IDEA</h4>
                <p className={cards.description}>
                Discuss your business idea
                </p>
                </CardBody>
             </Card>

          </GridItem>
          </Fade> 


          <Fade left delay={500} >
          <GridItem xs={12} sm={6} md={3}>
             <Card style={{width: "14rem"}}>
                 <strong><CardHeader color="info">Track 2</CardHeader>  </strong>     
                <CardBody>
                <h4 className={cards.cardTitle}>PROTOTYPE</h4>
                <p className={cards.description}>  Demonstrate your idea  </p>
                </CardBody>
             </Card>

          </GridItem>
          </Fade> 


          <Fade left delay={1000} >
          <GridItem xs={12} sm={6} md={3}>
             <Card style={{width: "14rem"}}>
                 <strong><CardHeader color="info">Track 3</CardHeader>  </strong>     
                <CardBody>
                <h4 className={cards.cardTitle}> PRODUCT </h4>
                <p className={cards.description}>
                Showcase your idea
                </p>
                </CardBody>
             </Card>

          </GridItem>
          </Fade> 


          <Fade left delay={1500} >
          <GridItem xs={12} sm={6} md={3}>
             <Card style={{width: "14rem"}}>
                 <strong><CardHeader color="info">Track 4</CardHeader>  </strong>     
                <CardBody>
                <h4 className={cards.cardTitle}>START-UP</h4>
                <p className={cards.description}>
                Share your success story
                </p>
                </CardBody>
             </Card>

          </GridItem>
          </Fade> 
          

          </GridContainer>
          
      <div>
      
       
       
      </div>
    </div>
  );
}
