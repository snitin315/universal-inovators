import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import "./Slider.scss"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from 'react-reveal/Fade';
import Carousel from "react-slick";

//images
import x100 from "assets/img/100x.png"
import huddle from "assets/img/huddle.png"
import icici from "assets/img/icici-bank-logo.jpg"
import nasscom from "assets/img/nasscom.jpeg"

const useStyles = makeStyles(styles);

export default function Slider() {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  };
 
  return (
    <div className={classes.section} style={{marginBottom :"-110px"}}>
        <Carousel {...settings}>
            <GridItem xs={0} sm={12} md={12}>
                <div>
                    <img src={icici} height="80" style={{maxWidth:"100%"}} className="slick-image" />
                </div>
            </GridItem>
            <GridItem xs={0} sm={12} md={12}>
                <div>
                    <img src={huddle} height="80"  style={{maxWidth:"100%"}} className="slick-image" />
                </div>
            </GridItem>
            <GridItem xs={0} sm={12} md={12}>
                <div>
                    <img src={nasscom} height="80"  style={{maxWidth:"100%"}} className="slick-image" />
               </div>
            </GridItem>
            <GridItem xs={0} sm={12} md={12}>
                <div>
                    <img src={x100} height="80"  style={{maxWidth:"100%"}} className="slick-image" />
                </div>
            </GridItem>
        </Carousel> 
    </div>
  );
}
