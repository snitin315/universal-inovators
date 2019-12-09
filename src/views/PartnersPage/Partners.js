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
import Fade from 'react-reveal/Fade';


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



// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import Preloader from "components/Preloader/Preloader.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Partners(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center'
  } ;

  const style={
    color : 'cyan'
  }

  const container ={
    width : '100%'
  }
  
  return (
    <div>
 
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Universal Inovators"
        rightLinks={<StartupHeader />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
        {...rest}
      />
      
      <Fade duration = "1500"  >
      <Parallax filter image={require("assets/img/start-bg.png")}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            
              <h1 className={classes.title} style={{color:"cyan"}}> <CharPose text = "Partners & Promoters" /></h1>
             
              <br />

            </GridItem>

            <GridItem xs={12} sm={12} md={6}>
             
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      </Fade>
      
      <Fade bottom duration ={2000} delay="500">
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
           <div className={classes.section}  style = {{ display : "flex", justifyContent : 'center'}}>
               <h3 className={classes.title} style={{textAlign:"center", color : "black"}}> Parteners & Promoters </h3>
           </div>
         <br/>
         
          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={ssclogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES, UNIVERSITY OF DELHI</h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  
          
          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={nitplogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > NATIONAL INSTITUTE OF TECHNOLOGY PATNA (NITP) </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={npclogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > NATIONAL PRODUCTIVITY COUNCIL </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  
          
          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={srgelogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"justify", color : "black"}} > SCIENTIFIC RESEARCH GROUP IN EGYPT (SRGE) </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={minlogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"left", color : "black"}} > MINISTRY OF ELECTRONICS & INFORMAION TECHNOLOGY , GOVERNMENT OF INDIA</h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          
          <br/>  
           
          <Fade> 
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={dilogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > DIGITAL INDIA </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  
          
          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={uilogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > UNIVERSAL INNOVATORS , INDIA</h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/> 
          
          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={setitlogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"left", color : "black"}}> SCIENCES of ELECTRONICS, TECHNOLOGIES of INFORMATION & TELECOMMUNICATIONS (SETIT) , TUNISIA</h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          
          <br/>

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={dmrlogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}}>  DMR Hydroengineering & Infrastructures Ltd. </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>          
          <br/> 

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={pkslogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}}>PKS INFRA ENGINEERS PRIVATE LIMTED</h4>
            </GridItem>
            
          </GridContainer>
          </Fade>          
          <br/> 

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={autologo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}}>AUTODEALZ.IN</h4>
            </GridItem>
            
          </GridContainer>
          </Fade>          
          <br/> 

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={callogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}}>CALIBRE</h4>
            </GridItem>
            
          </GridContainer>
          </Fade>          
          <br/> 

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={plucklogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > PLUCK ENGINEERING PRIVATE LIMITED </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={rtmlogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > RTM ENGINEERS PVT. LTD. </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={spainlogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > UNIVERSITY OF VALLADOLID SPAIN  </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={sgrtlogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > SCIENTIFIC GROUP FOR RESEARCH AND TECHNOLOGY  </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={gvlogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > GENOMIC VALLEY BIOTECH LIMITED  </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/> 

          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={negdlogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > NATIONAL E-GOVERNANCE DIVISION  </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>

          
          <Fade>
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={3} md={3}>
                     <div> <img src={thinklogo} style={container} /> </div> 
            </GridItem>

            <GridItem xs={12} sm={9} md={9}>
                         <h4  className={classes.title} style={{textAlign:"center", color : "black"}} > THINK PARYAVARAN : SAVE EARTH SAVE GENERATION  </h4>
            </GridItem>
            
          </GridContainer>
          </Fade>
          <br/>  

          
        
        </div>
        
      </div>
      </Fade>
      <Footer />

    </div>
  );
}
