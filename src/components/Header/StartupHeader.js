/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// @material-ui/icons
import { Apps,Home,PersonAdd,CheckBox,Money} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function StartupHeader(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/"
          color="transparent"
          className={classes.navLink}
        >
         <Home className={classes.icons} /> Home
        </Button>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Button
          href="/startup/sessions"
          color="transparent"
          className={classes.navLink}
        >
         <Apps className={classes.icons} />Sessions
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup/eligibility"
          color="transparent"
          className={classes.navLink}
        >
         <CheckBox className={classes.icons} />Eligibility 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/startup/application"
          color="transparent"
          className={classes.navLink}
        >
          <PersonAdd className={classes.icons} />Applications
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Button
          href="/startup/funding"
          color="transparent"
          className={classes.navLink}
        >
          <Money className={classes.icons} />Funding
        </Button>
      </ListItem>
      
    </List>
  );
}
