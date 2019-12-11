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
import ssclogo from "assets/img/ssclogo.png"
import nitplogo from "assets/img/nitplogo.jpeg"
import npclogo from "assets/img/npclogo.jpeg"
import srgelogo from "assets/img/srgelogo.png"
import setitlogo from "assets/img/setitlogo.png"
import dilogo from "assets/img/dilogo.jpg"
import uilogo from "assets/img/uilogo.jpeg"
import minlogo from "assets/img/minlogo.png"
import dmrlogo from "assets/img/dmrlogo.jpeg"
import pkslogo from "assets/img/pkslogo.jpeg"
import autologo from "assets/img/autologo.jpeg"
import callogo from "assets/img/callogo.jpeg"
import plucklogo from "assets/img/plucklogo.jpeg"
import rtmlogo from "assets/img/rtmlogo.jpeg"
import spainlogo from "assets/img/spainlogo.jpeg"
import sgrtlogo from "assets/img/sgrtlogo.jpeg"
import negdlogo from "assets/img/negdlogo.jpeg"
import thinklogo from "assets/img/thinklogo.jpeg"
import gvlogo from "assets/img/gvlogo.png"

import x100 from "assets/img/100x.png"
import huddle from "assets/img/huddle.png"
import icici from "assets/img/icici-bank-logo.jpg"
import nasscom from "assets/img/nasscom.jpeg"

const useStyles = makeStyles(styles);

export default function Slider() {
  const classes = useStyles();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
  };
 
  return (
    <div className={classes.section} style={{marginTop:"-100px"}}> 
        <h2 className={classes.title}>Special Invited Investors</h2>
        <br/>
         <Carousel {...settings}>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={icici} height="150px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.title}><strong>ICICI BANK</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={huddle} height="150px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.title}><strong>HUDDLE</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={x100} height="150px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.title}><strong>100X VC</strong></h6>
                </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
                <div>
                    <img src={nasscom} height="150px" style={{maxWidth:"100%"}} />
                    <h6 className={classes.title}><strong>Nasscom</strong></h6>
                </div>
            </GridItem>          
        </Carousel>
         <h2 className={classes.title}>Partners & Promoters </h2>   
         <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img  height="250" width="250" />
              </div>
              <div class="slide">
                <img  height="250" width="250" />
              </div>
              <div class="slide">
                <img  height="250" width="250" />
              </div>
              <div class="slide">
                <img  height="250" width="250" />
              </div>
              <div class="slide">
                <img  height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {ssclogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {nitplogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {npclogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {srgelogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {setitlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {dilogo} height="250" width="250"  />
              </div>
              <div class="slide">
                <img src= {uilogo} height="250" width="250" />
              </div>     
              <div class="slide">
                <img src= {dmrlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {pkslogo} height="250" width="300" />
              </div>
              <div class="slide">
                <img src= {autologo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {callogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {plucklogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {rtmlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {spainlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {sgrtlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {negdlogo} height="250" width="300" />
              </div>
              <div class="slide">
                <img src= {thinklogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {gvlogo} height="250" width="250" />
              </div>
              <div class="slide">
                <img src= {minlogo} height="250" width="400" />
              </div>   
            </div>
        </div> 
        <br/>       
    </div>
  );
}
