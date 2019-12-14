import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { LooksOne, Looks3, Looks4, LooksTwo, Looks5 } from "@material-ui/icons";


// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import StartupHeader from "components/Header/StartupHeader";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from 'react-reveal/Fade';
import FooterArea from "components/FooterArea/FooterArea";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Eligibility(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    alignItems : 'center',
    color:"#333"
  } ;
  const justify ={
    textAlign:"justify",
    fontWeight:"900"
  }

  return (
    <div>
   
      <Header
        color="info"
        routes={dashboardRoutes}
 
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
             <h3 className={classes.title} style={{textAlign:"center", color : "black", marginTop:"100px", marginBottom:"-10px"}}> ELIGIBILITY CRITERIA FOR STARTUP EVENT</h3>
          </div>

          <br/>
          <Fade duration={1500}>
            <GridContainer style={flex}>
                <GridItem xs={12} sm={2} md={1}>
                  <LooksOne style={{fontSize : "70px" , color : "#28a796"}}/>
                </GridItem>
                <GridItem xs={10} sm={10} md={11}>
                  <h5 style={justify}>You must have an idea related to any field of Engineering or Non-Engineering.</h5>
                </GridItem>
            </GridContainer>
           </Fade> 

           <Fade duration={1500}>
            <GridContainer style={flex}>
                <GridItem xs={12} sm={2} md={1}>
                  <LooksTwo style={{fontSize : "70px" , color : "#28a796"}}/>
                </GridItem>
                <GridItem xs={10} sm={10} md={11}>
              
                    <h5 style={justify} >The business must be involved in a new product or service. Only start-ups developing a new product or service or process are eligible under this scheme. This criterion has three conditions :</h5>
                 
                    <ul>
                    <li style={{fontWeight:"400" , textAlign:"justify"}}> The start-up must be working towards innovation, development, deployment or commercialization of a new product, process or service driven by technology or intellectual property. </li>
                    <li style={{fontWeight:"400", textAlign:"justify"}}> The start-up must aim to develop and commercialize a new product or service or a significantly improved existing product or service that will create or add value to customers or workflow.</li>
                    <li style={{fontWeight:"400", textAlign:"justify"}}> The start-up must not be merely engaged in developing products or services which do not have the potential for commercialization, undifferentiated product or service with no or limited incremental value for customers or workflow. </li>
                    </ul>
                
                </GridItem>
            </GridContainer>
           </Fade> 

           <Fade duration={1500}>
            <GridContainer style={flex}>
                <GridItem xs={12} sm={2} md={1}>
                  <Looks3 style={{fontSize : "70px" , color : "#28a796"}}/>
                </GridItem>
                <GridItem xs={10} sm={10} md={11}>
                  <h5 style={justify} >
                    The StartUp may be DIPP recognized.
                  </h5>  
                    <ul>
                    <li style={{fontWeight:"400", textAlign:"justify"}}>For registering Startup can log on to <a href="https://startupindia.gov.in" target="_blank">www.startupindia.gov.in</a></li>
                    </ul>
                </GridItem>
            </GridContainer>
           </Fade> 

           <Fade duration={1500}>
            <GridContainer style={flex}>
                <GridItem xs={12} sm={2} md={1}>
                  <Looks4 style={{fontSize : "70px" , color : "#28a796"}}/>
                </GridItem>
                <GridItem xs={10} sm={10} md={11}>
                  <h5 style={justify}>The StartUp must show the capability to develop Minimum Viable Product (MVP) or Beta Product.</h5>
                </GridItem>
            </GridContainer>
           </Fade> 
        </div>
        <FooterArea/>
      </div>
    </div>
  );
}
