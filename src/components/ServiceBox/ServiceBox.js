import React, {Component, Children} from 'react';
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
const ServiceBox = (props) => {
    const classes = useStyles();
    return ( 
        <div className="box">
            <div className="icon"><a href={props.link}><i class={props.icon}></i></a></div>
            <h4 className="title"><a href={props.link}>{props.title}</a></h4>
            <p className={classes.description} style={{color:"#888"}} >{props.description}</p>
        </div>
    )
}

export default ServiceBox ;