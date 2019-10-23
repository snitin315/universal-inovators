import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components

import Fade from "react-reveal/Fade"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { cardTitle } from "assets/jss/material-kit-react.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";


//images

import NDA from "assets/img/NDA.jpg"
import approval from "assets/img/approval.jpg"
import solution from "assets/img/solution.png"
import paymentTerms from "assets/img/paymentTerms.png"


const useStyles = makeStyles(styles);
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

 const flex = {
  display : 'flex',
  alignItems : 'center',
} 

const design= {
  textAlign : 'justify',
   }
 

  export default function Download() {

    const classes = useStyles();
    return (
       <div className={classes.section}> 
       <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          
         
          <h3 className={classes.title}>Our Process</h3>
          <Fade up>
          <p className={classes.description}>Universal Inovators are into filing Patents related to the Research.</p>  
          <p className={classes.description} style={design}>
          We, at UI, provide end to end patent services starting from search, drafting and filing of your application till obtaining a grant and subsequent services in respect of the invention.
          Further, we alsoconduct IPR awareness sessions in the campus on how patents can be beneficial to research scholars, professors, faculty members, and institute.


          </p>
          </Fade>
        </GridItem>
      </GridContainer>
      <br/>
      
       <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={3}>
            <Fade left duration={2000}>
             <div>
             <img style = {{width : "80%" , borderRadius : "50%"}}src={NDA}/>
             </div> 
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={8}>

          <Fade right duration ={2000}>
          <h4 className={classes.title} style ={{textAlign:"left"}} >Signing of NDA</h4>
          <p className={classes.description} style={design} >
          Client confidentiality is of the utmost importance for us. Thus, we sign first a Non-Disclosure Agreement (NDA) to safeguard the details in respect of your invention. A copy of the NDA is enclosed herewith for your perusal. Please provide us your name and address so that we can send you a signed NDA.
          </p>
          </Fade>

          </GridItem>
      </GridContainer>
      
      <br/>

      <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={3}>
            <Fade left duration={2000}>
             <div>
             <img style = {{width : "80%"}}src={solution}/>
             </div> 
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={8}>

          <Fade right duration ={2000}>
          <h4 className={classes.title} style ={{textAlign:"left"}} >Selection of The Solution</h4>
          <p className={classes.description} style={design} >
          If you wish only to file the patent application and want to spend minimum amount to receive the patent number, we can support you to get the patent application number; Else, we have developed two solutions to protect your research.
          <li><strong> Solution A - Normal Route :</strong> Our professional fee for searching, drafting and filing an application within the Indian Patent office.</li>
          <li><strong>Solution B - Early Grant Route :</strong> Our professional fee for searching, drafting and filing an application within Indian Patent office, filing International PCT application, filing early grant request and preparing a response to examination reports till grant of the patent.</li>
          </p>
          </Fade>

          </GridItem>
      </GridContainer>

      <br/>

      <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={3}>
            <Fade left duration={2000}>
             <div>
             <img style = {{width : "80%"}}src={approval}/>
             </div> 
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={8}>

          <Fade right duration ={2000}>
          <h4 className={classes.title} style ={{textAlign:"left"}} >Approval & Application Preparation</h4>
          <p className={classes.description} style={design} >
          Once we have approval from you on the solution, we initiate the process of searching, drafting and filing the patent application as per the scope of efforts included in the solutions.
          </p>
          </Fade>

          </GridItem>
      </GridContainer>

      <br/>

      <GridContainer style = {flex}>
          <GridItem xs={12} sm={12} md={3}>
            <Fade left duration={2000}>
             <div>
             <img style = {{width : "80%"}}src={paymentTerms}/>
             </div> 
             </Fade> 
          </GridItem>    

          <GridItem xs={12} sm={12} md={8}>

          <Fade right duration ={2000}>
          <h4 className={classes.title} style ={{textAlign:"left"}}>Payment Terms</h4>
          <p className={classes.description} style={design} >
          You don't have to pay the whole fee upfront. Once you decide the solution, we will provide you the stages and payment for each stage.
          </p>
          </Fade>

          </GridItem>
      </GridContainer>

     <stong><h5 style ={color}>For Any Query,Related to Patents Write Us At : <a href="" target="_blank">universalinovators@gmail.com</a></h5></stong>
      </div>
    );
  }