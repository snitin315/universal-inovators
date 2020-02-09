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
import Tooltip from "@material-ui/core/Tooltip";
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
          height: 300,
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
                labelText="About your StartUp"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.216812707" , 
                    type : "text",
                 }}
            />
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
            <CustomInput
                labelText="Business Summary : (A one para description of your business)"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    name : "entry.604889351" , 
                    type : "text",
                 }}
            />
        </GridItem>

        <GridItem  xs={12} sm={12} md={4} >
            <h4 style={{color : "black" , fontWeight : '900'}} >Type of Venture :</h4>  
             
            <label class="container3">Single Ownership
              <input type="radio"  name="entry.63668602" value="Single Ownership" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Partnership / LLP
              <input type="radio"  name="entry.63668602" value="Partnership / LLP" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Other
              <input type="radio"  name="entry.63668602" value="Other" required />
              <span class="checkmark"></span>
            </label>       

        </GridItem>

        <GridItem  xs={12} sm={12} md={4} >
            <h4 style={{color : "black" , fontWeight : '900'}} >Stage of Start-up</h4>  

            <label class="container3">Idea
              <input type="radio"  name="entry.1119135260" value="Idea" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Idea with Prototype
              <input type="radio"  name="entry.1119135260" value="Idea with Prototype" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Pilot Launched
              <input type="radio"  name="entry.1119135260" value="Pilot Launched" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Already Launched
              <input type="radio"  name="entry.1119135260" value="Already Launched" required />
              <span class="checkmark"></span>
            </label>
            
        </GridItem>

        <GridItem  xs={12} sm={12} md={4} >
            <h4 style={{color : "black" , fontWeight : '900'}} >Business Model</h4>  

            <label class="container3">For profit
              <input type="radio"  name="entry.2010769821" value="For profit" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Not-for-profit
              <input type="radio"  name="entry.2010769821" value="Not-for-profit" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Hybrid
              <input type="radio"  name="entry.2010769821" value="Hybrid" required />
              <span class="checkmark"></span>
            </label>    
        </GridItem>

        <GridItem  xs={12} sm={12} md={4} >
            <h4 style={{color : "black" , fontWeight : '900'}} >Category of Participants</h4>  

            <label class="container3">Student
              <input type="radio"  name="entry.1984042516" value="Student" required />
              <span class="checkmark"></span>
            </label>
            <label class="container3">Passed-out Student working on Innovative Idea/Start-up
              <input type="radio"  name="entry.1984042516" value="Passed-out Student working on Innovative Idea/Start-up" required />
              <span class="checkmark"></span>
            </label>
             
            <label class="container3">Start-up registered with incubation center
              <input type="radio"  name="entry.1984042516" value="Start-up registered with incubation center." required />
              <span class="checkmark"></span>
            </label>       

        </GridItem>

        <GridItem  xs={12} sm={12} md={4} >
            <h4 style={{color : "black" , fontWeight : '900'}} > Current Revenue Size</h4>  

            <label class="container3">Pre-revenue
              <input type="radio"  name="entry.2052913070" value="Pre-revenue" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3"> Less than 10 Lakhs
              <input type="radio"  name="entry.2052913070" value="< 10 Lakhs" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3"> 10 Lakhs - 50 Lakhs
              <input type="radio"  name="entry.2052913070" value="10 Lakhs - 50 Lakhs" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">50 Lakhs - 1 Crore
              <input type="radio"  name="entry.2052913070" value="50 Lakhs - 1 Crore" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3"> Greater than 1 Crore
              <input type="radio"  name="entry.2052913070" value="> 1 Crore" required />
              <span class="checkmark"></span>
            </label>
              
        </GridItem>

        <GridItem  xs={12} sm={12} md={4} >
            <h4 style={{color : "black" , fontWeight : '900'}} >Current Funding Status</h4>  

            <label class="container3">Self Funded
              <input type="radio"  name="entry.1618994458" value="Self Funded" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Friends and Family
              <input type="radio"  name="entry.1618994458" value="Friends and Family" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Angels
              <input type="radio"  name="entry.1618994458" value="Angels" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">VC
              <input type="radio"  name="entry.1618994458" value="VC" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Incubator
              <input type="radio"  name="entry.1618994458" value="Incubator" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Other
              <input type="radio"  name="entry.1618994458" value="Other" required />
              <span class="checkmark"></span>
            </label>
   
        </GridItem>

        <GridItem  xs={12} sm={12} md={6} >
            <h4 style={{color : "black" , fontWeight : '900'}} >Category of Participants</h4>  

            <label class="container3">Patent applied for
              <input type="radio"  name="entry.1465147416" value="Patent applied for" required />
              <span class="checkmark"></span>
            </label>
            <label class="container3">Patent awarded
              <input type="radio"  name="entry.1465147416" value="Patent awarded" required />
              <span class="checkmark"></span>
            </label>
            <label class="container3">Regulatory permissions applied for
              <input type="radio"  name="entry.1465147416" value="Regulatory permissions applied for" required />
              <span class="checkmark"></span>
            </label>
            <label class="container3">Regulatory permissions received
              <input type="radio"  name="entry.1465147416" value="Regulatory permissions received" required />
              <span class="checkmark"></span>
            </label>
            <label class="container3">Not Applicable
              <input type="radio"  name="entry.1465147416" value="Not Applicable" required />
              <span class="checkmark"></span>
            </label>
        </GridItem>

        <GridItem  xs={12} sm={12} md={6} >
            <h4 style={{color : "black" , fontWeight : '900'}} > Idea Belonging to Sector</h4>  

            <label class="container3">Hospitality
              <input type="radio"  name="entry.1740434126" value="Hospitality" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Tech-Automation
              <input type="radio"  name="entry.1740434126" value="Tech-Automation" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">IT
              <input type="radio"  name="entry.1740434126" value="IT" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Health-Wellness & Pharma
              <input type="radio"  name="entry.1740434126" value="Health-Wellness & Pharma" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Environment, Green Tech & Sustainability
              <input type="radio"  name="entry.1740434126" value="Environment, Green Tech & Sustainability" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Social Development and Art & Culture
              <input type="radio"  name="entry.1740434126" value="Social Development and Art & Culture" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Supply Chain & Logistics
              <input type="radio"  name="entry.1740434126" value="Supply Chain & Logistics" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Media, Communication & Entertainment
              <input type="radio"  name="entry.1740434126" value="Media, Communication & Entertainment" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Textile & Apparels
              <input type="radio"  name="entry.1740434126" value="Textile & Apparels" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">Food & Beverage
              <input type="radio"  name="entry.1740434126" value="Food & Beverage" required />
              <span class="checkmark"></span>
            </label>

            <label class="container3">FMCG
              <input type="radio"  name="entry.1740434126" value="FMCG" required />
              <span class="checkmark"></span>
            </label>
            
            <label class="container3">Other
              <input type="radio"  name="entry.1740434126" value="Other" required />
              <span class="checkmark"></span>
            </label>
        </GridItem>

        <GridItem xs={8} sm={10} md={9}>
            <CustomInput
                labelText="What is the value proposition/pain point that you are addressing?"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.944397714" ,
                   type : "text"
                }}
            />
        </GridItem> 
        <GridItem xs={4} sm={2} md={3} >   
            <br/>
            <Tooltip
                id="tooltip-right"
                title="Who is going to buy your product/service and how much they would pay for it. Why would consumers choose this overothers? Remember to articulate the key differentiation in customer beneNts, not an internal perspective on technologysuperiority."
                placement="right"
                classes={{ tooltip: classes.tooltip }}
            >
                <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
            </Tooltip>
        </GridItem>

        <GridItem xs={8} sm={10} md={9}>
            <CustomInput
                labelText="Business model / Financial model ( 2 year projections)"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.2028315883",
                   type : "text"
                }}
            />
        </GridItem> 
        <GridItem xs={4} sm={2} md={3} >   
            <br/>
            <Tooltip
                id="tooltip-right"
                title="This is about how you will make money from this business opportunity (example who will pay you,who will charge the customer, how, when etc) Financial Projections: Provide next 2 year quarterly Nnancial projectionsand provide an estimate of the 5 year Nnancial projection. Cover revenue, cost, gross margin and net cash how."
                placement="right"
                classes={{ tooltip: classes.tooltip }}
            >
                <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
            </Tooltip>
        </GridItem>

        <GridItem xs={8} sm={10} md={9}>
            <CustomInput
                labelText="What is the GOTO Market Strategy?"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.980713676" ,
                   type : "text"
                }}
            />
        </GridItem> 
        <GridItem xs={4} sm={2} md={3} >   
            <br/>
            <Tooltip
                id="tooltip-right"
                title="How are you going to market and sell your products/services (Go to Market Model). What capability does the teamhave and plans to build to take the offerings to the market. What partnerships are critical to your business. What is thecurrent status of customer and partner pipeline."
                placement="right"
                classes={{ tooltip: classes.tooltip }}
            >
                <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
            </Tooltip>
        </GridItem>

        <GridItem xs={8} sm={10} md={9}>
            <CustomInput
                labelText="Major Competitors & Barriers"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.1607748443" ,
                   type : "text"
                }}
            />
        </GridItem> 
        <GridItem xs={4} sm={2} md={3} >   
            <br/>
            <Tooltip
                id="tooltip-right"
                title="Explain your competitor products (Give speciNc Product/Company). Major barriers you will face entering in market andhow do you plan to overcome these barriers. (word limit: 150)"
                placement="right"
                classes={{ tooltip: classes.tooltip }}
            >
                <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
            </Tooltip>
        </GridItem>

        <GridItem xs={8} sm={10} md={9}>
            <CustomInput
                labelText="Customer traction"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.1004490213",
                   type : "text"
                }}
            />
        </GridItem> 
        <GridItem xs={4} sm={2} md={3} >   
            <br/>
            <Tooltip
                id="tooltip-right"
                title="Mention key milestones achieved since inception of company (prototype development, Nrst revenues etc)."
                placement="right"
                classes={{ tooltip: classes.tooltip }}
            >
                <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
            </Tooltip>
        </GridItem>

        <GridItem xs={8} sm={10} md={9}>
            <CustomInput
                labelText="What are you looking for? (Investment, Mentorship etc.)"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.455168759",
                   type : "text"
                }}
            />
        </GridItem> 
        <GridItem xs={4} sm={2} md={3} >   
            <br/>
            <Tooltip
                id="tooltip-right"
                title="Describe how much money you want to raise and what you intend doing with these funds."
                placement="right"
                classes={{ tooltip: classes.tooltip }}
            >
                <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
            </Tooltip>
        </GridItem>

        <GridItem xs={8} sm={10} md={9}>
            <CustomInput
                labelText="Link to your Pitch template"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.980890318" ,
                   type : "text"
                }}
            />
        </GridItem> 
        <GridItem xs={4} sm={2} md={3} >   
            <br/>
            <Tooltip
                id="tooltip-right"
                title="Upload your pitch to Drive(or any other platform) and share the link. (Not more than 8 Slides FONT size 22 and no background color )"
                placement="right"
                classes={{ tooltip: classes.tooltip }}
            >
                <Button color="info"  style={{width:"3px"}}> <Info className={classes.icons} /> </Button>
            </Tooltip>
        </GridItem>

        <GridItem xs={8} sm={10} md={9}>
            <CustomInput
                labelText="Video link, please provide a link of the video of product/Service ( if any )"
                id="float"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                   name : "entry.1975068442",
                   type : "text"
                }}
            />
        </GridItem> 
    </GridContainer>
                 

        <label class="container3"><sup style={{color:"red"}}>*</sup> I have sent Transaction Details to registerationui@gmail.com
        <input name = "entry.1953338999"  value="I have sent Transaction Details to registerationui@gmail.com" required type="checkbox" />
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









