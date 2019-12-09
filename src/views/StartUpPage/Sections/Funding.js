import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import NavPills from "components/NavPills/NavPills.js";
import  Album from '@material-ui/icons/Album';
import {Assessment, TrendingUp, MergeType} from "@material-ui/icons";
import GridItem from "components/Grid/GridItem.js";
import EventTracks from './EventTracks';


const flex = {display : "flex", alignItems : "center",textAlign : "justify"}
function ListStyle(props){
    const classes = useStyles(); 
    return (
      <h6 className={classes.description} style= {flex}><Album style = {{ color : "#28a796"}}/> <li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}> {props.text}</li> </h6>
    )
  }
const useStyles = makeStyles(styles);

export default function Example(){
    const classes = useStyles();
  return (
    <div className={classes.section} style={{marginTop:"-100px"}} > 
      <h3 className={classes.title}><b>The Startup Event Provides Funding in 3 forms of Ventures</b></h3>  
    <NavPills
      color="info"
      horizontal={{
        tabsGrid: { xs: 12, sm: 3, md: 3 },
        contentGrid: { xs: 12, sm: 8, md: 8 }
      }}
      tabs={[
        {
          tabButton: "Early Stage",
          tabIcon: Assessment,
          tabContent: (
              <GridItem xs={12} sm={12} md={12} style={{textAlign:"justify", margin:"50px auto"}}>
                  <h6 className={classes.description} style={{textAlign:"justify"}}> In Early Stage funding, the capital committed is up to the amount of INR Rs 20 Lakhs. This round is for start-ups who have formulated a MVP or Beta Product and need help to reach Product Launch.</h6>
                  <li className={classes.description} style={{textAlign:"justify",listStyleType:"none"}}> <b>To be Eligible for Early Stage Funding:</b></li>
                  <ListStyle text = "Startup must have a functioning Minimum Viable Product or Beta Product."/> 
                  <ListStyle text = "Start-up must be incorporated for not more than 1 year till the day of the Event."/> 
                  <ListStyle text = "Start-up has not been Previously Funded."/>                              
              </GridItem>        
          )
        },
        {
          tabButton: "Seed/Angel Stage",
          tabIcon: MergeType,
          tabContent: (
            <span>
              <GridItem xs={12} sm={12} md={12} style={{textAlign:"justify", margin:"50px auto"}}>
                  <h6 className={classes.description} style={{textAlign:"justify"}}>In Seed Stage funding, the capital committed is in range of the amount of INR 30 Lakhs to INR 1 Crore. This round is for start-ups who have completed a product and have officially launched their services.</h6>
                  <li className={classes.description} style={{textAlign:"justify",listStyleType:"none"}}> <b>To be Eligible for Seed Stage Funding:</b></li>
                  <ListStyle text = "Startup has launched their Product and Service and have successfully gained traction. Start-ups which have conducted a Successful Pilot Test before the official launch of the product will also be considered."/> 
                  <ListStyle text = "Start-up has User Traction. Start-ups that have Revenue will be preferred."/> 
                  <ListStyle text = "Start-up has not been previously funded. Funding by an Incubator/Accelerator/Friends and Family are acceptable."/>                              
              </GridItem>
            </span>
          )
        },
        {
          tabButton: "Growth Stage",
          tabIcon: TrendingUp,
          tabContent: (
            <GridItem xs={12} sm={12} md={12} style={{textAlign:"justify", margin:"40px auto"}}>
                  <h6 className={classes.description} style={{textAlign:"justify"}}>In Growth Stage funding, the capital committed is in amounts above INR 1 Crore. This round is for start-ups who have sufficient revenue and Traction. Start-ups that require help in raising Series A, B etc. are eligible for this round.</h6>
                  <li className={classes.description} style={{textAlign:"justify",listStyleType:"none"}}> <b>To be Eligible for Growth Stage Funding:</b></li>
                  <ListStyle text = "Startup has launched their Product and Service and have successfully gained traction."/> 
                  <ListStyle text = "Start-up has User Traction and Appropriate Revenue."/> 
                  <ListStyle text = "Start-up has been operating for at least 6 months post official launch of their Products/Services."/>          
                  <ListStyle text = "Start-up looking for a Lead Investor in their Current Round are eligible. However, Start-ups with already a commitment from a Lead Investor may also be considered." />                    
            </GridItem>
          )
        }
      ]}
    />
    <EventTracks/>
    </div>
  );
}