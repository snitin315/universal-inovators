import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";

// core components
import Button from "components/CustomButtons/Button.js";
import ParticlesContainer from "components/Particle/Particle.js"
import { Info} from "@material-ui/icons";
import rocket from "assets/img/rocket2.gif"
import './ApplicationForm.css';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import StartupHeader from "components/Header/StartupHeader";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import Fade from 'react-reveal/Fade';
import CustomInput from "components/CustomInput/CustomInput.js";


// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import Preloader from "components/Preloader/Preloader";
import PayFees from "components/PayFees/PayFee";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const popstyle = {
    width : "300px",
    padding : "20px",
    color : "#fff",
    backgroundColor : "rgba(0,0,0,0.6)"
}

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const btn ={
    borderRadius: "25px",
    border : "1px solid #fff"
  }
  const flex = {
    display : 'flex',
    alignItems : 'center',
  } ;

  const [anchorElLeft, setAnchorElLeft] = React.useState(null);

  return (
    <div>
      
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="StartUp Meet Investors"
        rightLinks={<StartupHeader />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "info"
        }}
        {...rest}
      />
      
      
    <Parallax filter responsive style={{backgroundColor:"#28a796"}}> 
    <ParticlesContainer />
        <div className={classes.container}>
          <GridContainer style={flex}>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}><CharPose text="Registration Form" /></h2>
              <h6 className={classes.title} style={{marginTop : "-10px"}}>Fill the registration form here and pay the registration fees using the button below.</h6>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                    <Button
                    style={btn}
                    color="white"
                    size="md"
                    href="/startup-application-form"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-pencil-alt" />
                    <b style={{color:"#888"}}>Register Today</b> 
                  </Button>
                </GridItem>
                <GridItem xs={12} sm={6} md={8}>
                  <PayFees style={btn}/>
                </GridItem>
              </GridContainer>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <br/>
              <img src ={rocket} style={{maxWidth:"100%", opacity:"0.8", borderRadius:" 100% 100% 0% 0%"}}/>
            </GridItem>
          </GridContainer>
        </div>
    </Parallax> 
      
    
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
           <div className={classes.section}  style = {{ display : "flex", justifyContent : 'center'}}>
               <h3 className={classes.title} style={{textAlign:"center", color : "black"}}> Application Form </h3>
           </div>
         <br/>
         
         
<form class="form" target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLSdrs2xXlLNt2QCD_Kj27dmvfu_SZJgF1qyGigSFOZPUf3QQFQ/formResponse" >
  
  
       
    <input type="submit" value="Submit" />
    <br/>
    </form>
     <br/>

     </div>
        
      </div>
      <Footer />

    </div>
  );
}









