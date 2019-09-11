import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from 'react-reveal/Fade';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import { cardTitle } from "assets/jss/material-kit-react.js";

const useStyles = makeStyles(styles);

export default function FundingDetails() {
  const classes = useStyles();
  const design= {
    textAlign : 'justify',
    minwidth :"14rem"
     }

  

  const cardstyles = {

    cardTitle,
  };




  const useCardStyles = makeStyles(cardstyles);
  const cards = useCardStyles();

  return (

    <div className={classes.section} >
      

          <h3 className={classes.title}> Funding Details </h3>
                        
          <h4 className = {classes.description}>The Startup Event Provides Funding in 3 forms of Ventures</h4>
          
          <br/>
          <Fade left duration = {1500}>
          <Card  style={design}>
                 <strong><CardHeader color="info" style={{textAlign :"center"}}>Early Stage</CardHeader>  </strong>     
                <CardBody>
                <p className={cards.cardTitle}>In Early Stage funding, the capital committed is up to the amount of INR Rs 20 Lakhs. This round is for start-ups who have formulated a MVP or Beta Product and need help to reach Product Launch.</p>
                <br/>
                
                <strong>To be Eligible for Early Stage Funding:</strong><br/>
                    
                    <li>Startup must have a functioning Minimum Viable Product or Beta Product</li>
                    <li>Start-up must be incorporated for not more than 1 year till the day of the Event</li>
                    <li>Start-up has not been Previously Funded </li>
               
                </CardBody>
          </Card>
          </Fade>
          <br/>
          
          <Fade left duration = {1500}>
          <Card  style={design}>
                 <strong><CardHeader color="info" style={{textAlign :"center"}}>Seed/Angel Stage</CardHeader>  </strong>     
                <CardBody>
                <p className={cards.cardTitle}>In Seed Stage funding, the capital committed is in range of the amount of INR 30 Lakhs to INR 1 Crore. This round is for start-ups who have completed a product and have officially launched their services. </p>
                <br/>

                <strong>To be Eligible for Seed Stage Funding:</strong><br/>
                
                    <li>Startup has launched their Product and Service and have successfully gained traction. Start-ups which have conducted a Successful Pilot Test before the official launch of the product will also be considered</li>
                    <li>Start-up has User Traction. Start-ups that have Revenue will be preferred.</li>
                    <li>Start-up has not been previously funded. Funding by an Incubator/Accelerator/Friends and Family are acceptable</li>
               
                </CardBody>
          </Card>
          </Fade>
          <br/>
           
          <Fade left duration = {1500}> 
          <Card  style={design}>
                 <strong><CardHeader color="info" style={{textAlign :"center"}}>Growth Stage</CardHeader>  </strong>     
                <CardBody>
                <p className={cards.cardTitle}>In Growth Stage funding, the capital committed is in amounts above INR 1 Crore. This round is for start-ups who have sufficient revenue and Traction. Start-ups that require help in raising Series A, B etc. are eligible for this round.</p>
                <br/>

                <strong>To be Eligible for Growth Stage Funding:</strong><br/>
                
                    <li>Startup has launched their Product and Service and have successfully gained traction. </li>
                    <li>Start-up has User Traction and Appropriate Revenue</li>
                    <li>Start-up has been operating for at least 6 months post official launch of their Products/Services. </li>
                    <li>Start-up looking for a Lead Investor in their Current Round are eligible. However, Start-ups with already a commitment from a Lead Investor may also be considered</li>
                
                </CardBody>
          </Card>
          </Fade>    
    </div>
  );
}
