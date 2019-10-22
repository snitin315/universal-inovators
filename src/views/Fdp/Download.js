import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Zoom from "react-reveal/Zoom"
import { cardTitle } from "assets/jss/material-kit-react.js";

// @material-ui/icons
import {CloudDownload} from "@material-ui/icons";



const cardStyles = {
    cardTitle,
    textCenter: {
      textAlign: "center"
    },
    textMuted: {
      color: "#6c757d"
    },
  };
  
 
const useCard = makeStyles(cardStyles);
  export default function Download() {
    const classes = useCard();
    return (
      <Zoom>
      <Card className={classes.textCenter}>
        <strong><CardHeader color="info">FDP BROCHURE</CardHeader></strong>
        <CardBody>
          <h4 className={classes.cardTitle}>Interested ? Get on Board!</h4>
          <p>
            Click The Button Below To Download The <strong>FDP Brochure</strong>
          </p>
         
          <Button 
          color = "info"
          href = "https://drive.google.com/file/d/1da2BbGI5wK1WhabwEz0sjl1GyC8boPW8/view"
          target="_blank">
          <CloudDownload className={classes.icons} /> Download</Button>
         
        </CardBody>
        
      </Card>
      </Zoom>
    );
  }