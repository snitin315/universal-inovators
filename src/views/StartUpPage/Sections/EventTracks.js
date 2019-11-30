import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from 'react-reveal/Fade';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import { cardTitle } from "assets/jss/material-kit-react.js";
//images


const useStyles = makeStyles(styles);
const awards = {
    display : 'flex',
    justifyContent : "center",
    textAlign: "center"
  }

  const cardstyles = {
    cardTitle,
  };

  

export default function EventTracks() {
  const classes = useStyles();
  const useCardStyles = makeStyles(cardstyles);
  const cards = useCardStyles();
  return (
     <div className={classes.section}>


        <GridContainer style={awards} >

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
     </div>
  );
}