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
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from 'react-reveal/Fade';


// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import Steps from "../LandingPage/Sections/Steps"

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Application(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const flex = {
    display : 'flex',
    alignItems : 'center',
  } ;

  const style={
    color : 'cyan'
  }

  const design ={
    width : '50%',
    textAlign : 'justify',
    
  }

  const border ={
    border : "2px solid skyblue",
    borderRadius : '10px',
    minwidth: "12rem"
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
          <GridContainer style = {flex}>
            <GridItem xs={12} sm={12} md={6}>
            
              <h1 className={classes.title} style={style} > <CharPose  text = "Application Procedure" /></h1>
               
              <br />

            </GridItem>

          </GridContainer>
        </div>
      </Parallax>
      </Fade>
      
      <Fade bottom duration ={2000} delay="500">
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
           <div className={classes.section}  style = {{ display : "flex", justifyContent : 'center'}}>
               <h3 className={classes.title} style={{textAlign:"center", color : "black"}}>Application Procedure</h3>
           </div>
         <br/>
        <Fade left duration={1500}>
        <GridContainer style = {flex}>
            <GridItem   xs={12} sm={10} md={9}>
            <Steps num= "1st" text="The Venture must fill the form and complete their Registration at the ICICC Website."/> 
            </GridItem>
            <GridItem  xs={12} sm={2} md={3}>
            <Button color="info" href="/startup-application-form" target="-blank" type="button">Click Here To Fill the Form </Button>
            </GridItem>

        </GridContainer>
        
        </Fade> 

        <br/>
        <Fade left duration={1500}>
        <Steps num= "2nd" text="The Registration must include a Pitch Deck with not more than 10 Slides. The Deck Must include Business Plan, Value Proposition, Projections for the next 5 years, Current Financials and Necessary Statistics (Traction, Users, Pricing etc.), Competition Analysis, Team and any other relevant data"/>  
        </Fade> 

        <br/>
        <Fade left duration={1500}>
        <Steps num= "3rd" text="If the Start-up has any video highlighting their Venture and/or Product, the link of the video must also be shared in the Registration"/>  
        </Fade>   

        <br/>
        <Fade left duration={1500}>
        <Steps num= "4th" text="After Submission, All Entries will be evaluated by our Team of Analysts. All Entries that are Shortlisted will be intimated about the same. All decision made by ICICC are final"/>  
        </Fade> 

        <br/>
        <Fade left duration={1500}>
        <Steps num= "5th" text="After Shortlisting, The Selected Start-ups will be invited to the Start-up Event to pitch their Venture to the Panel of Judges and Investors. The decision for Investment is at the sole discretion of the Investors and the Judges."/>  
        </Fade> 

        <br/>  
        <Fade left duration={1500}>
        <Steps num= "6th" text="Post Event, ICICC will collect the details from investors regarding any Investment Decisions and will intimate your Start-up about the same"/>  
        </Fade>   

       <br/>
        <Fade left duration={1500}>
        <Steps num= "7th" text="All Investment Discussion between the Investor and the Start-up will take place under the presence of an ICICC Representative."/>  
        </Fade> 

         <br/>
         <Fade left duration={1500}>
        <Steps num= "8th" text="Post Successful investment, The Start-up will pay 4% of the total amount successfully raised by the Start-up through the medium of the Start-up Event."/>  
        </Fade> 
        <br/>
                         
        </div>
        
      </div>
      </Fade>
      <Footer />

    </div>
  );
}
