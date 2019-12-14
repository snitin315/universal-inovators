import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from 'components/CustomButtons/Button';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import StartupHeader from "components/Header/StartupHeader";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from 'react-reveal/Fade';

import PayButton from "./PayButton.js";
import { LooksOne, Looks3, Looks4, LooksTwo, Looks5 } from "@material-ui/icons";
import FooterArea from "components/FooterArea/FooterArea.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Application(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    alignItems : 'center',
    color:"#333",
  } ;
  const btn ={
    borderRadius: "25px",
    border : "1px solid #fff",
  
  }
 
  return (
    <div>
      
      <Header
        color="info"
        routes={dashboardRoutes}
        brand="Startup Meet Investors"
        rightLinks={<StartupHeader />}
        fixed
        changeColorOnScroll={{
          height: -1,
          color: "info"
        }}
        {...rest}
      />
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
           <div className={classes.section}  style = {{ display : "flex", justifyContent : 'center'}}>
               <h3 className={classes.title} style={{textAlign:"center", color : "black", marginTop:"100px", marginBottom:"-10px"}}> Registration Process</h3>
           </div>
         <br/>
        <Fade duration={1500}>
          <GridContainer style={flex}>
              <GridItem xs={12} sm={2} md={1}>
                <LooksOne style={{fontSize : "70px" , color : "#28a796"}}/>
              </GridItem>
              <GridItem xs={10} sm={10} md={11}>
                <h5><b>The venture must fill the form and complete their registration of INR 5,000 here. Click the button below to fill the application form.  </b></h5>
              </GridItem>
          </GridContainer>
            <GridContainer>
                <GridItem md={2}>
                    <span></span>
                </GridItem>
                <GridItem xs={12} sm={6} md={5}>
                    <Button
                    style={btn}
                    size="md"
                    color = "info"
                    href="/startup-application-form"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-pencil-alt" />
                    <b style={{color:"#fff"}}>Register Here</b> 
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={5}>
                  <PayButton style={btn} />
                </GridItem>
              </GridContainer>    
                        
        </Fade> 

        <Fade duration={1500}>
          <GridContainer style={flex}>
            <GridItem xs={12} sm={2} md={1}>
              <LooksTwo style={{fontSize : "70px" , color : "#28a796"}}/>
            </GridItem>
            <GridItem xs={12} sm={10} md={11}>
              <h5><b>After Submission, All Entries will be evaluated by our Team of Analysts. All Entries that are Shortlisted will be intimated (Intimation by 1st Feb, 2020) about the same. All decision made by ICICC are final.</b></h5>
            </GridItem>
          </GridContainer>
        </Fade> 

        <Fade duration={1500}>
          <GridContainer style={flex}>
              <GridItem xs={12} sm={2} md={1}>
                <Looks3 style={{fontSize : "70px" , color : "#28a796"}}/>
              </GridItem>
              <GridItem xs={10} sm={10} md={11}>
                <h5><b> After Shortlisting, The Selected Start-ups will be invited to the Start-up Event to pitch their Venture to the Panel of Judges and Investors. The decision for Investment is at the sole discretion of the Investors and the Judges. </b></h5>
              </GridItem>
          </GridContainer>
        </Fade>  
        <Fade duration={1500}>
          <GridContainer style={flex}>
                <GridItem xs={12} sm={2} md={1}>
                  <Looks4 style={{fontSize : "70px" , color : "#28a796"}}/>
                </GridItem>
                <GridItem xs={10} sm={10} md={11}>
                  <h5><b> Post Event, ICICC will collect the details from investors regarding any investment decisions and will intimate your Startup about the same (within one week after the event).</b></h5>
                </GridItem>
            </GridContainer>
        </Fade>   
        <Fade duration={1500}>
           <GridContainer style={flex}>
                <GridItem xs={12} sm={2} md={1}>
                  <Looks5 style={{fontSize : "70px" , color : "#28a796"}}/>
                </GridItem>
                <GridItem xs={10} sm={10} md={11}>
                  <h5><b> All investment discussion between the investor and the Startup will take place under the presence of an ICICC representative. </b></h5>
                </GridItem>
            </GridContainer>
        </Fade> 
                  
        </div>
        
        <FooterArea/>
      </div>
  
    </div>
  );
}
