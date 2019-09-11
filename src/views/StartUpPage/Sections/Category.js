import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import { cardTitle } from "assets/jss/material-kit-react.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from 'react-reveal/Fade';


const cardstyles = {

    cardTitle,
  };
  
const design = {
    textAlign : "left"
}  

const flex = {
  display : 'flex',
  justifyContent : "center"
}
const useCardStyles = makeStyles(cardstyles);
const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();
  const cards = useCardStyles();
 
  return (

    <div className={classes.section} >
      
          
          <h3 className={classes.title}>Core Fields of Research for the Start-Up </h3>

          <br/>
          
          <GridContainer  style={flex} >
          <Fade left  duration={2000}> 
          <GridItem xs={12} sm={12} md={4}>
          <Card style={{width: "16rem"}}>
          <strong><CardHeader color="info">CATEGORY A</CardHeader>  </strong>     
                <CardBody>
                <h4 className={cards.cardTitle}>Societal Applications</h4>
                <ul style={design}>
                    <li>Agriculture/Food</li>
                    <li>Healthcare</li>
                    <li>Education</li>
                    <li>Hospitality</li>
                    <br/>
                    
                </ul>
                
                </CardBody>
             </Card>
          </GridItem>    

          <GridItem xs={12} sm={12} md={4}>
          <Card style={{width: "16rem"}}>
          <strong><CardHeader color="info">CATEGORY B</CardHeader> </strong> 
                <CardBody>
                <h4 className={cards.cardTitle}> Environment & Sustainability</h4>
                <ul style={design}>
                    <li>Water-Crisis/ Clean Water</li>
                    <li>Recycling/ Waste Management</li>
                    <li>Renewable Energy</li>
                    <li>Sanitation</li>
                    <li>Food Waste Prevention and Separation</li>
                    
                </ul>
                
                </CardBody>
             </Card>
          </GridItem>    

          <GridItem xs={12} sm={12} md={4}>
          <Card style={{width: "16rem"}}>
                <strong><CardHeader color="info">CATEGORY C</CardHeader>  </strong>   
                <CardBody>
                <h4 className={cards.cardTitle}>Advanced Technologies</h4>
                <ul style={design}>
                    <li>Internet of Things</li>
                    <li>Big Data</li>
                    <li>Cloud Computing</li>
                    <li>Cyber Security</li>
                    <li>ICT</li>
                    <li>Bio-Sciences</li>
                    <li>Artificial Intelligence/ ML</li>
                    <li>Intelligent Transportation</li>
                    <li>5G and beyond Communications</li>
                    <li>Robotics & Automation</li>
                </ul>
                
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
