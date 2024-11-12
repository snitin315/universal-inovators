import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import sideImage from "assets/img/rocket2.gif"

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import Fade from 'react-reveal/Fade';
import  css from "./ProductSection.css"

const useStyles = makeStyles(styles);
const design= {
  textAlign : 'justify',
   }

const flex = {
  display : 'flex',
  alignItems : 'center',
}   

const Service = function(props){
  const classes = useStyles();
        return (
           <div style={{height:"270px"}} className="box">
              <div className="icon"><a href={props.link}><i class={props.icon}></i></a></div>
              <h4 className="title"><a href={props.link}>{props.title}</a></h4>
              <p className={classes.description} >{props.description}</p>
            </div>
        )}

export default function ProductSection() {
  const classes = useStyles();
  const design= {
    textAlign : 'justify',
     }
  return (

    <div className={classes.section} >
      
          
          <h3 className={classes.title}>Courses</h3>         
          
       
      <div>
      <br/>
      <br/>
        <GridContainer >
          
          <GridItem xs={12} sm={6} md={4}>
            <Fade left >
            <Service
                link = "/"
                icon = "fas fa-users"
                title = "Digital Marketing"
                description = "Price: INR 1000"
                
            />
            </Fade>

          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={500}>
            <Service
                link = "/"
                icon = "fas fa-check-circle"
                title = "Data Science Bootcamp"
                description = "Price: INR 3000"
                
            />  
           </Fade>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            
            <Fade left delay={1000}>
            <Service
                link = "/"
                icon = "fas fa-search"
                title = "Patent And Research Course"
                description = "Price: INR 2000"
                
            />
            
            </Fade>
          </GridItem>

          <GridItem xs={12} sm={6} md={4}>
           <Fade left>
           <Service
                link = "/"
                icon = "fas fa-gem"
                title = "Internet of Things"
                description = "Price: INR 2000"
                
            />
            
           </Fade>
          </GridItem>

          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={500}>
            <Service
                link = "/"
                icon = "fas fa-graduation-cap"
                title = "Data Analytics"
                description = "Price: INR 2000"
                
            />
            
            </Fade>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Fade left delay={1000}>
            <Service
                link = "/"
                icon = "fas fa-book "
                title = "Machine Learning"
                description = "Price: INR 3000"
                
            />
            
            </Fade>
          </GridItem>
         
        </GridContainer>
        
        <h4  className={classes.title}>Universal Inovators Have Begin Their Aim & Move Ahead Towards Their Goal.</h4>
      </div>
    </div>
  );
}
