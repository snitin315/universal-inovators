import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from 'components/CustomButtons/Button';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



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

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#28a796",
      color: theme.palette.common.white,
      fontSize: 20,
      overflow :"x-scrollable"
    },
    body: {
      fontSize: 20,
      overflow :"x-scrollable"
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('10:00 am - 10:30 am', 'Registration' , 'Registration', 'Registration' , 'Registration'),
    createData('10:30 am - 1:00 pm', 'Judges Round 1', 'Judges Round 1', 'Judges Round 1','Judges Round 1'),
    createData('1:00 pm - 3:00 pm', 'Lunch','Lunch','Lunch','Lunch'),
    createData('3:00 pm - 3:15 pm', 'High Tea','High Tea','High Tea','High Tea'),
    createData('3:15 pm - 5:00 pm', 'Judges Round 2','Judges Round 2','Judges Round 2','Judges Round 2'),
  ];

export default function Agenda(props) {
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
               <h3 className={classes.title} style={{textAlign:"center", color : "black", marginTop:"100px", marginBottom:"-10px"}}> Agenda</h3>
           </div>
            <div className={classes.container}>
                  
            </div>
         <br/>
            <div style={{overflow:"scroll"}}>
        
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center"><b>Time</b></StyledTableCell>
                    <StyledTableCell align="center"><b>Track 1</b></StyledTableCell>
                    <StyledTableCell align="center"><b>Track 2</b></StyledTableCell>
                    <StyledTableCell align="center"><b>Track 3</b></StyledTableCell>
                    <StyledTableCell align="center"><b>Track 4</b></StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <StyledTableRow >
                    <StyledTableCell align="center">
                        <b> 9:00 am - 10:00 am</b>
                    </StyledTableCell>
                    <StyledTableCell colSpan={4} align="center">
                        <b>Inauguration Ceremony</b>
                    </StyledTableCell>
                </StyledTableRow>
                {rows.map(row => (
                    <StyledTableRow key={row.desc}>
                    <StyledTableCell component="th" scope="row" align="center">
                        <b>{row.name}</b>
                    </StyledTableCell>
                    <StyledTableCell align="center"><b>{row.calories}</b></StyledTableCell>
                    <StyledTableCell align="center"><b>{row.fat}</b></StyledTableCell>
                    <StyledTableCell align="center"><b>{row.carbs}</b></StyledTableCell>
                    <StyledTableCell align="center"><b>{row.protein}</b></StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>


            </div>
        </div>
        
        <FooterArea/>
      </div>
  
    </div>
  );
}
