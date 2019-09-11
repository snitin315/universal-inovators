import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from "react-reveal/Fade"

const useStyles = makeStyles(styles);

export default function Top() {
  const classes = useStyles();

  const design = {
    textAlign : 'justify'
  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h3 className={classes.title}>PATENT & RESEARCH</h3>
          <p className={classes.description}>Universal Inovators are into filing Patents related to the Research.</p>
          <h3 className={classes.title}>Our Process</h3>
          <Fade up>
          <p className={classes.description} style={design}>
          We, at UI, provide end to end patent services starting from search, drafting and filing of your application till obtaining a grant and subsequent services in respect of the invention.
          Further, we alsoconduct IPR awareness sessions in the campus on how patents can be beneficial to research scholars, professors, faculty members, and institute.


          </p>
          </Fade>
        </GridItem>
      </GridContainer>



    </div>
  );
}
