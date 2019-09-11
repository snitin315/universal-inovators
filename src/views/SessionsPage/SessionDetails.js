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



import session from "assets/img/session2.png"



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
      

          <h3 className={classes.title}>Mentoring Session </h3>
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

          <h3 className={classes.title}>Awards & Prizes </h3>
          
          
          <GridContainer>
           
           
          <GridItem xs={12} sm={12} md={4}>
          <Fade up>
            <Card style={{minwidth :"14rem"}}>
                 <strong><CardHeader color="info">Start-up of the year Award</CardHeader>  </strong>     
                <CardBody>
                <h5 className={cards.cardTitle}>The start-up with the greatest growth and success rate.</h5>
                
                
                </CardBody>
             </Card>
             </Fade>

          </GridItem>
        
          
          <GridItem xs={12} sm={12} md={4}>
          <Fade up delay={500}>
             <Card  style={{minwidth :"14rem"}}>
                 <strong><CardHeader color="info">Young Innovator Award</CardHeader>  </strong>     
                <CardBody>
                <h4 className={cards.cardTitle}>Best Student Start-Up</h4>
                
                <br/>
                </CardBody>
             </Card>
             </Fade>
          </GridItem>
         

          
          <GridItem xs={12} sm={12} md={4}>
          <Fade up delay={1000}>
             <Card  style={{minwidth :"14rem"}}>
                 <strong><CardHeader color="info">Womanovator Award</CardHeader>  </strong>     
                <CardBody>
                <h5 className={cards.cardTitle}>Best of a start-up/innovative idea led by a woman.</h5>
                
                
                </CardBody>
             </Card>
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
            
          <h3 className={classes.title}>Executive Networking Session – High Tea Session</h3>

          <p className={classes.description} style={design} >
          This world is now becoming more and more entrepreneur-oriented. A start-up begins with an idea and the prime obstruction is how to take forward that idea towards a successful business keeping in view the societal issues. We expect people coming with different interests and backgrounds. Some people may have successful start-ups while some might just have ideas and looking for some kind of mentorship and funding to take the
          idea to implementation. Through our Start-Up event we will lay a platform for the networking and interaction amongst the speakers, young entrepreneurs and the audience (participants).

          </p>

          
          
       
      <div>
      
       
       
      </div>
    </div>
  );
}
