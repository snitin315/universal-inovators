import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-slick";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from 'react-reveal/Fade';
import NavPills from "components/NavPills/NavPills.js";
import  Album from '@material-ui/icons/Album';
import Card from "components/Card/Card.js";

//images 
import image1 from "assets/img/catA.jpeg";
import image2 from "assets/img/startup-3.jpg";
import image3 from "assets/img/startup-9.jpg";
import image4 from "assets/img/startup-8.jpg";

import bigdata from "assets/img/book1.png";
import iot from "assets/img/iot.jpg";
import cloud from "assets/img/cloud.png";
import cyber from "assets/img/cyber.jpg";
import ml from "assets/img/ml.jpeg";
import water from "assets/img/water.png";
import recycle from "assets/img/recycle.jpg";
import renew from "assets/img/renew.png";
import idea from "assets/img/idea.jpeg";
import idea2 from "assets/img/startup-about.jpeg";

const flex = {display : "flex", alignItems : "center",textalign : "justify"}

function ListStyle(props){
  const classes = useStyles(); 
  return (
    <h6 className={classes.description} style= {flex}><Album style = {{ color : "#28a796"}}/> <li style={{listStyle: "none", marginLeft : "5px" , textAlign : "left"}}> {props.text}</li> </h6>
  )
}

const useStyles = makeStyles(styles);

export default function About() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
 
  return (

    <div className={classes.section} style={{marginTop:"-100px"}} >
      <h3 className={classes.title} style={{marginBottom:"-40px"}}>Core Fields of Research for the Start-Up </h3>
      <br/>
      <NavPills
      color="info"
      alignCenter
      tabs={[
        {
          tabButton: "Category A",
          tabContent: (
            <GridContainer style = {flex}>
              <GridItem xs={12} sm={12} md={6}>
              <Fade >  
              <Card>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={bigdata}
                      alt="First slide"
                      className="slick-image"
                    />
                    
                  </div>
                  <div>
                    <img
                      src={iot}
                      alt="Second slide"
                      className="slick-image"
                    />
                    
                  </div>
                  <div>
                    <img
                      src={cloud}
                      alt="Cloud Computing"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={cyber}
                      alt="Cyber Security"
                      className="slick-image"
                    />
                  </div>
                  <div>
                    <img
                      src={ml}
                      alt="Machine Learning"
                      className="slick-image"
                    />
                  </div>
                </Carousel>
            </Card>
             </Fade>
               
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>

              <h3 className={classes.title}> Advanced Technologies </h3>
                <ListStyle text = "Internet of Things"/> 
                <ListStyle text = "Big Data"/> 
                <ListStyle text = "Cloud computing "/> 
                <ListStyle text = "Cyber Security "/> 
                <ListStyle text = "ICT "/> 
                <ListStyle text = "Bio-Sciences "/> 
                <ListStyle text = "Artificial Intelligence / ML"/> 
                <ListStyle text = "Intelligent Transportation"/> 
                <ListStyle text = "5G and beyond Communications"/> 
                <ListStyle text = "Robotics & Automation"/> 
                                              
              </GridItem>

            
              </GridContainer>
          )
        },
        {
          tabButton: "Category B",
          tabContent: (
            <GridContainer style = {flex} justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <Fade >  
                <Card>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={renew}
                        alt="Renewable Energy"
                        className="slick-image"
                      /> 
                    </div>
                    <div>
                      <img
                        src={water}
                        alt="Clean Water"
                        className="slick-image"
                      />
                      
                    </div>
                    <div>
                      <img
                        src={recycle}
                        alt="Second slide"
                        className="slick-image"
                      />
                      
                    </div>
                  
                  </Carousel>
                </Card>
                </Fade> 
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>

              <h3 className={classes.title}> Environment & Sustainability </h3>
                <ListStyle text = "Water-Crisis/ Clean Water"/> 
                <ListStyle text = "Recycling/ Waste Management"/> 
                <ListStyle text = "Renewable Energy"/> 
                <ListStyle text = "Sanitation"/> 
                <ListStyle text = "Food Waste Prevention and Separation"/> 
                
               
                                              
              </GridItem>

            
              </GridContainer>
            
          )
        },
        {
          tabButton: "Category C",
          tabContent: (
            <span>
              <GridContainer style = {flex} justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <Fade > 
                    <Card>
                      <Carousel {...settings}>
                        <div>
                          <img
                            src={image3}
                            alt="First slide"
                            className="slick-image"
                          />
                          
                        </div>
                        <div>
                          <img
                            src={image1}
                            alt="Second slide"
                            className="slick-image"
                          />
                          
                        </div>
                        <div>
                          <img
                            src={image2}
                            alt="Third slide"
                            className="slick-image"
                          />
                        </div>
                      </Carousel>
                  </Card>
                </Fade>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                  <h3 className={classes.title}> Societal Applications </h3>
                  <ListStyle text = " Agriculture/Food "/> 
                  <ListStyle text = "Healthcare"/> 
                  <ListStyle text = "Education "/> 
                  <ListStyle text = "Hospitality"/>                             
              </GridItem>
            </GridContainer>
            </span>
          )
        },
        
        {tabButton: "Category D",
          tabContent: (
            <span>
              <GridContainer style = {flex} justify="center">
               
              <GridItem xs={12} sm={12} md={6}>
              <Fade > 
              <Card>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={idea}
                      alt="First slide"
                      className="slick-image"
                    />
                    
                  </div>
                  <div>
                    <img
                      src={idea2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    
                  </div>
                  <div>
                    <img
                      src={image4}
                      alt="First slide"
                      className="slick-image"
                    />
                    
                  </div>
                  
                </Carousel>
            </Card>
            </Fade> 
             
               
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>

              <h3 className={classes.title}> Miscellaneous </h3>
                <ListStyle text = "Candidates having any unique innovative idea other than mentioned categories can submit their application in this category."/> 
                
                                              
              </GridItem>

            
              </GridContainer>
            </span>
          )
        }
      ]}
    />
          
         
            
         

        
          
       
      
    </div>
  );
}
