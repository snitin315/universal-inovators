import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import { Person , Album } from "@material-ui/icons";

import "./Footer.css"

const useStyles = makeStyles(styles);


const flex = {display : "flex", alignItems : "center",textalign : "justify"}

function ListStyle(props){
  const classes = useStyles(); 
  return (
    <h6 className={classes.description} style= {flex}><i class={props.icon} style = {{ color : "#fff"}}/> <li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}><a style={{color:"#fff"}} href={props.link} target="_blank">{props.text}</a></li> </h6>
  )
}

export default function FooterArea(props) {
  const classes = useStyles();
 
  return (
    <footer class="footer-distributed">
 
		<div class="footer-left">
 
		<h3>Universal-<span>Inovators</span></h3>
        <h6 style={{color:"#fff"}}>LET YOUR DREAMS COME TRUE || YOUR STORY STARTS WITH US</h6>
		<p style={{color:"#fff" , textAlign:"justify"}}>ICICC in association with many reputed funding agencies is organizing a Startup event, where startup ideas meet Investors. The selection procedure for the startup idea will be professional, stringent and scientific in nature. The prime objective of the startup meet is for successful ventures of future.</p>

		</div>
 
		<div class="footer-center" style={{color:"#fff"}}>
        <h3 style={{textAlign:"center"}}>Contact Us</h3>
        <ListStyle icon="fa fa-map-marker" text = "SHAHEED SUKHDEV COLLEGE OF BUSINESS STUDIES, University of Delhi, New Delhi"/>    
		<ListStyle icon="fa fa-phone" text ="+91 " />
        <ListStyle icon="fa fa-envelope" text ="universalinovators@gmail.com" /> 
		 
		</div>
 
		<div class="footer-right">
 
		<p class="footer-company-about">
		<h3 >Important Links</h3>
        <div style={{marginLeft:"50px"}}>
        <ListStyle link="/startup" icon="fas fa-chevron-circle-right" text = "Home"/>
        <ListStyle link="/startup-investors-and-partners" icon="fas fa-chevron-circle-right" text = "Investors & Partners"/>
        <ListStyle link ="/privacy-policy" icon="fas fa-chevron-circle-right" text = "Privacy Policy"/>
        </div>
		</p>
 
		<div style={{marginLeft:"30px"}} class="footer-icons">
 
		<a href="#" target="_blank"><i class="fab fa-facebook-square"></i></a>
		<a href="" target="_blank"><i class="fa fa-envelope"></i></a>
		<a href="https://www.linkedin.com/company/icicc2020/" target="_blank" ><i class="fab fa-linkedin"></i></a>
		<a href="https://github.com/snitin315/universal-inovators" target="_blank"><i class="fab fa-github"></i></a>
 
		</div>
 
		</div>
        <hr/>
        <p class="footer-company-name" style={{textAlign:"center"}}> Universal-Inovators &copy; 2019 | All Right Reserved</p>
		</footer>
  );
}
