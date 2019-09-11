import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Zoom from "react-reveal/Zoom"
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CardHeader from "components/Card/CardHeader";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

const flex = {
   display : 'flex',
   flexDirection : "colunm",
   alignItem : "center"
 }

export default function BookCard() {
  const classes = useStyles();
  return (

     <div>

          <h3 className={classes.title} style ={{textAlign :"center", color : "black"}}><strong>Books Series</strong></h3> 
          <br/>
         <GridContainer style={flex}>
            
       
             <GridItem  xs={12} sm={12} md={6} >

             <Zoom >
             <Card >          
             <strong><CardHeader color="info" style={{textAlign : "center"}}>Featured</CardHeader></strong>        
                <CardBody>
                <h4 className={classes.cardTitle}>Electrical Engineering and Computer Science Book Series</h4>
                <p>An Open Access publication series dedicated to archiving conference proceedings, edited books, monograph books dealing with all the aspects related to electrical engineering and computer science</p>
              
                </CardBody>
             </Card>
             </Zoom>             
             </GridItem>
             

            
             <GridItem  xs={12} sm={12} md={6} >
             <Zoom delay={500}>
             <Card  >
                <strong><CardHeader color="info" style={{textAlign : "center"}} >Featured</CardHeader></strong>
                <CardBody>
                <h4 className={classes.cardTitle}>Engineering and Management Book Series</h4>
                <p>The aims and scope of the publication series cover the all topics related to Engineering (CSE, IT, ECE, MAE, EEE) and Management and offers a wide range of services. </p>
                 <br/>
                </CardBody>
                </Card>
                </Zoom>       
             </GridItem>
       
         </GridContainer>
     </div>

    
  );
}