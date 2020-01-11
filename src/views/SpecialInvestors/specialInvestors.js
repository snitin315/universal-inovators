import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import StartupHeader from "components/Header/StartupHeader";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

import rocket from "assets/img/rocket2.gif"
import Carousel from "react-slick";

//logo
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
import btlogo from "assets/img/btlogo.png"
import yuvalogo from "assets/img/yuvalogo.png"

import x100 from "assets/img/100x.png"
import huddle from "assets/img/huddle.png"
import icici from "assets/img/icici-bank-logo.jpg"
import nasscom from "assets/img/nasscom.jpeg"
import siiflogo from "assets/img/siiflogo.jpg"
import optlogo from "assets/img/optlogo.png"
import acqlogo from "assets/img/acqlogo.png"
import adlogo from "assets/img/adlogo.png"
import glidelogo from "assets/img/Glidelogo.png"
import emplogo from "assets/img/empyreanlogo.png"

// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import ParticlesContainer from "components/Particle/Particle.js";
import FooterArea from "components/FooterArea/FooterArea.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Investors(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    flexDirection:"column",
    alignItems : 'center',
    justifyContent : 'center',
    color :"#333"
  } ;

  const style={
    color : 'cyan'
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
  };
  const container ={
    width : '100%'
  }
  
  return (
    <div>

      <Header
        color="info"
        routes={dashboardRoutes}
        brand="Universal Inovators"
        rightLinks={<StartupHeader />}
        fixed
        changeColorOnScroll={{
          height: -10,
          color: "info"
        }}
        {...rest}
      />
       
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
           <div className={classes.section}  style = {{ display : "flex", justifyContent : 'center'}}>
               <h3 className={classes.title} style={{textAlign:"center", color : "black",marginTop :"100px"}}> Special Invited Investors </h3>
           </div>
         <br/>
        </div>
        <GridContainer style={{margin:"40px"}}>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={icici} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}><strong>ICICI BANK</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={huddle} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}><strong>HUDDLE</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={x100} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}><strong>100x vc</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={nasscom} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}><strong>nasscom</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={acqlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}><strong>Acquisory</strong></h6>
             </div> 
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={siiflogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}><strong>SIIF</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={optlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}><strong>optymystix</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             {/* <div style={flex}>
               <img src={siiflogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}><strong>nasscom</strong></h6>
             </div> */}
          </GridItem>
        </GridContainer>

        <div style = {{ display : "flex", justifyContent : 'center'}}>
        <h3 className={classes.title} style={{textAlign:"center", color : "black",}}> Partners & Promoters </h3>
        </div>

        <GridContainer style={{margin:"50px"}}>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={ssclogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description}  style={{textAlign:"center"}}><strong> SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES, UNIVERSITY OF DELHI </strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={nitplogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong> NATIONAL INSTITUTE OF TECHNOLOGY PATNA (NITP) </strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={npclogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong> NATIONAL PRODUCTIVITY COUNCIL </strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={srgelogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>SCIENTIFIC RESEARCH GROUP IN EGYPT (SRGE)</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={minlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong> MINISTRY OF ELECTRONICS & INFORMAION TECHNOLOGY , GOVERNMENT OF INDIA</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={btlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>BOLDINK TECHNOLOGIES</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={yuvalogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>YUVA</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={dilogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>DIGITAL INDIA </strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={uilogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}} ><strong>UNIVERSAL INNOVATORS , INDIA</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={setitlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}} ><strong>SCIENCES of ELECTRONICS, TECHNOLOGIES of INFORMATION & TELECOMMUNICATIONS (SETIT) , TUNISIA</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={dmrlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}} ><strong>DMR Hydroengineering & Infrastructures Ltd.</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={pkslogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>PKS INFRA ENGINEERS PRIVATE LIMTED</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={autologo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong> AUTODEALZ.IN</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={callogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>CALIBRE</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={plucklogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong> PLUCK ENGINEERING PRIVATE LIMITED</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={rtmlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>RTM ENGINEERS PVT. LTD.</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={spainlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>UNIVERSITY OF VALLADOLID SPAIN</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={sgrtlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>SCIENTIFIC GROUP FOR RESEARCH AND TECHNOLOGY</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={negdlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong> NATIONAL E-GOVERNANCE DIVISION </strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={thinklogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>THINK PARYAVARAN : SAVE EARTH SAVE GENERATION</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={gvlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>GENOMIC VALLEY BIOTECH LIMITED</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={adlogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>Ad-vac-to Legal Solutions</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={glidelogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>Glide Accelerators</strong></h6>
             </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
             <div style={flex}>
               <img src={emplogo} height="150px" style={{maxWidth:"100%"}} />
               <h6 className={classes.description} style={{textAlign:"center"}}><strong>Empyrean Robotic Technologies</strong></h6>
             </div>
          </GridItem>
        </GridContainer>
        
        <FooterArea/>
    </div>
    </div>
  );
}
