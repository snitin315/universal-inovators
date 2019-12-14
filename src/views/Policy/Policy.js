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

import { LooksOne, Looks3, Looks4, LooksTwo, Looks5 } from "@material-ui/icons";
import FooterArea from "components/FooterArea/FooterArea.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Policy(props) {
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
               <h3 className={classes.title} style={{textAlign:"center", color : "black", marginTop:"100px", marginBottom:"-10px"}}> Privacy Policy</h3>
           </div>
            <div className={classes.container}>
                  <h5 className={classes.description} style={{color: "black", fontSize:"20px" , fontWeight : "400"}}>
                   Your privacy is important to us. It is Universal-inovators' policy to respect your privacy regarding any information we may collect from you across our website <a href="https://universal-inovators.com/startup">https://universal-inovators.com/startup</a> , and other sites we own and operate.
                   <br/> 
                   <br/> 
                   We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                   <br/>
                   <br/> 
                   We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                   <br/>
                   <br/> 
                   We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
                    <br/>
                    <br/> 
                    Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
                    <br/>
                    <br/> 
                    You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.
                    <br/>
                    <br/> 
                    Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
                    <br/>
                    <br/> 
                    This policy is effective as of 1 December 2019. 
                    <br/>
                    <br/> 
                    For any enquiry or updates kindly mail us at <a><b>universalinovators@gmail.com</b></a> .

                  </h5>
            </div>
         <br/>
         
        </div>
        
        <FooterArea/>
      </div>
  
    </div>
  );
}
