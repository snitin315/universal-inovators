import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Check from "@material-ui/icons/Check";

// Sections for this page
import CharPose from "../LandingPage/Sections/CharPose.js";
import PayFees from "components/PayFees/PayFee";
import FooterArea from "components/FooterArea/FooterArea";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);


export default function InitialForm(props) {
    const [checked, setChecked] = React.useState([24, 22]);
    const classes = useStyles();
    const wrapperDiv = classNames(
      classes.checkboxAndRadio,
      classes.checkboxAndRadioHorizontal
    );
    const handleToggle = value => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };
  const { ...rest } = props;
  const btn ={
    borderRadius: "25px",
    border : "1px solid #fff"
  }
  const flex = {
    display : 'flex',
    alignItems : 'center',
  } ;


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
               <h3 className={classes.title} style={{textAlign:"center", color : "black"}}> Registration Form </h3>
           </div>
         <br/>
         
         
    <form class="form" target="_blank" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfwA9no8bq4ei1bIZxsYU2Lmbf4w65kn579xWArq7kIn8t5cQ/formResponse" >
        <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
            <CustomInput
                labelText="Name of Venture/ StartUp"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.800826381",
                   type : "text",
                   required : "true"
                }}
            />
        </GridItem>

        <GridItem xs={12} sm={6} md={6}>
            <CustomInput
                labelText="Founder Name"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.1867725001" , 
                    type : "text",
                    required : "true"
                 }}
            />
        </GridItem>

        <GridItem xs={12} sm={6} md={6}>
            <CustomInput
                labelText="Contact Number"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.1303408001" , 
                    type : "number",
                    required : "true"
                 }}
            />
        </GridItem>

        <GridItem xs={12} sm={6} md={6}>
            <CustomInput
                labelText="Email"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.741139356" , 
                    type : "email",
                    required : "true"
                 }}
            />
        </GridItem>

        <GridItem xs={12} sm={4} md={4}>
            <CustomInput
                labelText="Website"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.841654917" , 
                    type : "text",
                 }}
            />
        </GridItem>

        <GridItem xs={12} sm={4} md={4}>
            <CustomInput
                labelText="City"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.191361227" , 
                    type : "text",
                    required : "true"
                 }}
            />
        </GridItem>

        <GridItem xs={12} sm={4} md={4}>
            <CustomInput
                labelText="State"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.1571296917" , 
                    type : "text",
                    required : "true"
                 }}
            />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
            <CustomInput
                labelText="Link for pitch deck (if any)"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.2038164463" , 
                    type : "text",
                 }}
            />
        </GridItem>
    </GridContainer>
                 

        <label class="container3"><sup style={{color:"red"}}>*</sup> I have sent Transaction Details to registerationui@gmail.com
        <input name = "entry.1264776458" required  value="I have sent Transaction Details to universalinovators@gmail.com" type="checkbox" />
        <span class="checkmark"></span>
        </label>    
       
 
       
    <input type="submit" value="Submit" />
    <br/>
    </form>
     <br/>

     </div>
        <FooterArea/>
      </div>
      

    </div>
  );
}









