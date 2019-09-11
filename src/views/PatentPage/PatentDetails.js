import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Fade from "react-reveal/Fade"

import { cardTitle } from "assets/jss/material-kit-react.js";


const cardStyles = {
    cardTitle,
    textCenter: {
      textAlign: "justify"
    },
    textMuted: {
      color: "#6c757d"
    },
  };
 
 const color = {
     color : 'black',
     textAlign : 'center'
 } 
 
const useCard = makeStyles(cardStyles);
  export default function Download() {
    const classes = useCard();
    return (
       <> 
      <Fade left>
      <Card className={classes.textCenter}>
      <strong><CardHeader color="info"> Step 1</CardHeader></strong>
        <CardBody>
          <h4 className={classes.cardTitle}>Signing of NDA</h4>
          <p>
          Client confidentiality is of the utmost importance for us. Thus, we sign first a Non-Disclosure Agreement (NDA) to safeguard the details in respect of your invention. A copy of the NDA is enclosed herewith for your perusal. Please provide us your name and address so that we can send you a signed NDA.
          </p>
        </CardBody>
        
      </Card>
      </Fade> <br/>

      <Fade left> 
       <Card className={classes.textCenter}>
        <strong><CardHeader color="info"> Step 2</CardHeader></strong>
        <CardBody>
          <h4 className={classes.cardTitle}>Selection of The Solution</h4>
          <p>
          If you wish only to file the patent application and want to spend minimum amount to receive the patent number, we can support you to get the patent application number; Else, we have developed two solutions to protect your research.<br/>
          <strong>Solution A -</strong> <strong><em>Normal Route</em></strong> : Our professional fee for searching, drafting and filing an application within the Indian Patent office. <br/>
          <strong>Solution B -</strong> <strong><em>Early Grant Route</em></strong> : Our professional fee for searching, drafting and filing an application within Indian Patent office, filing International PCT application, filing early grant request and preparing a response to examination reports till grant of the patent.
          </p>
        </CardBody>
        
      </Card>
      </Fade> <br/>

      <Fade left> 
      <Card className={classes.textCenter}>
      <strong><CardHeader color="info"> Step 3</CardHeader></strong>
        <CardBody>
          <h4 className={classes.cardTitle}>Approval & Application Preparation</h4>
          <p>
          Once we have approval from you on the solution, we initiate the process of searching, drafting and filing the patent application as per the scope of efforts included in the solutions.
          </p>
        </CardBody>
        
      </Card>
      </Fade> <br/>

      <Fade left> 
      <Card className={classes.textCenter}>
      <strong><CardHeader color="info"> Step 4</CardHeader></strong>
        <CardBody>
          <h4 className={classes.cardTitle}>Payment Terms</h4>
          <p>
          You don't have to pay the whole fee upfront. Once you decide the solution, we will provide you the stages and payment for each stage.
          </p>
        </CardBody>
        
      </Card>
      </Fade> <br/>

      <stong><h5 style ={color}>For Any Query,Related to Patents Write Us At : <a href="" target="_blank">universalinovators@gmail.com</a></h5></stong>
      </>
    );
  }