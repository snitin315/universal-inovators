import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from 'react-reveal/Fade';
import { cardTitle } from "assets/jss/material-kit-react.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//images 
import num1 from "assets/img/number-1.jpg"
import num2 from "assets/img/number-2.jpg"
import num3 from "assets/img/number-3.jpg"
import num4 from "assets/img/number-4.jpg"
import num5 from "assets/img/number-5.jpg"
import num6 from "assets/img/number-6.jpg"
import num7 from "assets/img/number-7.jpg"

const useStyles = makeStyles(styles);

export default function Details() {
  const classes = useStyles();
  const design= {
    textAlign : 'justify',
     }

  const container ={
        width : '100%',
        borderRadius : '0% 50% 50%'
      } 

  const flex = {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : '15px'
      } ;
       

  const cardstyles = {

    cardTitle,
  };



  const useCardStyles = makeStyles(cardstyles);


  return (

    <div className={classes.section} >
      

          <h3 className={classes.title}> Eligibility Criteria for Startup Event </h3>
          <br/>

          
          <ol className = {classes.description} style={design}>
            <Fade up>  
            <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={num1} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                    
                   
                <strong>The start-up must be registered as a Private Company, LLP or Partnership Firm: </strong><br/>
                <ul><li>A start-up must be incorporated as a Private Limited Company under Indian Companies Act, 2013, a Limited Liability Partnership (LLP) under Indian Limited Liability Partnership Act, 
                    2008 or a partnership firm under the Indian Partnership Act, 1932.</li></ul>
                    
            </GridItem>
            
          </GridContainer>
            
            </Fade>
           
            
            <Fade up>
            <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={num2} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                    
     
               <strong>The start-up must not be a product of restructuring: </strong>
               <ul>
                   <li>The start-up should not be formed out of splitting or reconstructing of a subsisting business. A business formed out of splitting an organization into two or more other businesses, then it won’t be eligible under this scheme.</li>
               </ul>

            </GridItem>
            
          </GridContainer>
            
            </Fade>

            <Fade up>

            <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={num3} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                    
         
                <strong>Not more than 5 years must have elapsed since incorporation: </strong>
                <ul>
                    <li>All business startup in India that have been incorporated in the past five years from the effective date of policy will be eligible under this scheme. Simply, all businesses incorporated or registered after April 01, 2015 are eligible to participate. </li>
                </ul>
        
            </GridItem>
            
          </GridContainer>
            
            </Fade>
      
            
            <Fade up>

            <GridContainer style = {flex}>
                <GridItem xs={12} sm={3} md={3}>
                        <div> <img src={num4} style={container} /> </div> 
                </GridItem>

                <GridItem xs={12} sm={9} md={9}>          
                    <strong>Annual turnover of the start-up is not more Rs. 25 crores.</strong>     
                </GridItem>
            
          </GridContainer>

            </Fade>
     
            <Fade up>

            <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={num5} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                    
         
            <strong>The business must be involved in a new product or service. Only start-ups developing a new product or service or process are eligible under this scheme. This criterion has three conditions: </strong>
                <ul>
                    <li>The start-up must be working towards innovation, development, deployment or commercialization of a new product, process or service driven by technology or intellectual Property. </li>
                    <br/>
                    <li>The start-up must aim to develop and commercialize a new product or service or a significantly improved existing product or service that will create or add value to customers or workflow. </li>
                    <br/>
                    <li>The start-up must not be merely engaged in developing products or services which do not have the potential for commercialization, undifferentiated product or service with no or limited incremental value for customers or workflow.</li>

                </ul>
        
            </GridItem>
            
          </GridContainer>

            </Fade>
            
          
            <Fade up>

            <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={num6} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                    
         
            <strong>The start-up must be a DIPP Recognized Start-up</strong>

                <ul>
                    <li>To get DIPP Recognition, Startups can log on to <a href="https://www.startupindia.gov.in" target="_blank" rel="noopener"> www.startupindia.gov.in </a> and get themselves registered there</li>
                </ul>
                        
            </GridItem>
            
          </GridContainer>

            </Fade>
      
            <Fade up>

            <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={num7} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                    
                <strong>
                The Startup must have a functioning Minimum Viable Product or Beta Product 
                </strong>
                
            </GridItem>
            
          </GridContainer>
            </Fade>
        </ol>                      
    </div>
  );
}
