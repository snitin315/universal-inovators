import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import  Album from '@material-ui/icons/Album';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';

const flex = {display : "flex", alignItems : "center",textalign : "justify"}

function ListStyle(props){
  const classes = useStyles(); 
  return (
    <h6 className={classes.description} style= {flex}><Album style = {{ color : "#28a796"}}/>  </h6>
  )
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
const useStyles = makeStyles(styles);

export default function PayFees() {
  const [modal, setModal] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
        <Button color="white" size="md" round onClick={() => setModal(true)}>
        <i class="fas fa-ticket-alt"/>  
        <b style={{color:"#888"}}>Registration Fees</b>
        </Button>
      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal
        }}
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <h5 className={classes.modalTitle}><b>Pay via NEFT/RTGS</b></h5>
        </DialogTitle>
        <DialogContent
          id="modal-slide-description"
          className={classes.modalBody}
          style={{marginTop : "-45px"}}
        ><br/>
          <h6><li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}>Account Name - ICICC </li></h6>
          <h6><li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}>Account No - 510909010080523  </li></h6>
          <h6><li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}>Bank - City Union Bank </li></h6>
          <h6><li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}>Branch - Sector-8, Rohini, Delhi </li></h6>
          <h6><li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}>IFSC Code - CIUB0000244 </li></h6>
    
          <GridContainer>
              <GridItem xs={5} sm={5} md={5}>
                <hr/>
              </GridItem>
              <GridItem xs={2} sm={2} md={2}>
                 <b>OR</b>
              </GridItem>
              <GridItem xs={5} sm={5} md={5}>
                  <hr/>
              </GridItem> 
          </GridContainer>
          <Button color="info" size="md" round target="_blank" href="https://www.scupo.in/event/3rd-international-conference-on-innovative-computing-communication/#bookticket">
            <i class="fas fa-ticket-alt"/>  
            <b style={{color:"#fff"}}>Pay Registration Fees Online</b>
          </Button>
          
        </DialogContent>
        <DialogActions
          className={classes.modalFooter + " " + classes.modalFooterCenter}
        >
        </DialogActions>
      </Dialog>
    </div>
  );
}