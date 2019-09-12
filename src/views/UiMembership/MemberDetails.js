import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import Button from "components/CustomButtons/Button.js";
import Zoom from "react-reveal/Zoom"
import Fade from 'react-reveal/Fade'
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function MemberDetails() {
  const classes = useStyles();

  const design= {
      color : 'gray',
      font : 'inherit',
      textAlign : 'justify',
      fontSize : 'small'
  }
 
  const card ={textAlign: "justify",float : "left", color : "gray"}
  
  return (
    <div className={classes.section}>
      
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>

          <h3 className={classes.title}>About Universal-Innovators</h3>
          <Fade bottom> 
          <p style={design} >Universal Inovator is an Indian research lab to promote research and development in India via conferences, FDPs, workshops, seminars, summer and winter schools, journals, research collaborations, patents, paper publication, book publications and collaborated national and international projects.</p>
          </Fade> 
        </GridItem>
      </GridContainer>
      
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>

          <h3 className={classes.title}>Objectives</h3>
           <Fade bottom>
          <p style={design} >
          The UI aims to do non-profit collaborative research in the field of engineering, applied sciences, management and other domains. We aim to be the leading independent academic and professional body working in collaboration with academicians, faculties, students, researchers, industry experts, Private bodies, government bodies and
          educational institutes. This leads us to be playing a creative and critical role in the society by disseminating teaching and research on a global scale, the cornerstones of which are good, long-term relationships, a focus on real life applications necessary for the welfare of the mankind, and an ability to combine quality and innovation.
          The mission of Universal Inovator is to cultivate and carry out research in high-tech, productive and cost efficient methodologies. We deal in conducting FDP’s, workshops, seminars, summer and winter schools, research projects, Book publishing, internship, and conferences. As a recognized body, Universal Innovators (UI) seeks to facilitate
          the availability of academic excellence and disseminate innovative knowledge worldwide.
          </p>
          </Fade> 
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>

          <h3 className={classes.title}>Universal-Inovators Membership</h3>
          
          <Fade bottom>
          <p style={design} >
          Any individual who has attained the age 18 or more and/or possesses/ studying Under Graduate degree in any discipline can join UI as a member. To join UI, he / she has to fill the<strong> <a href="https://drive.google.com/file/d/1DVHFi78IntGbSDfwJPUdwpc1bTVNJY10/view" target="_blank">Membership Form</a></strong> and pay the required membership fees. At present researchers can join UI in the following categories, and mail the membership form with transaction details at <strong> <a>universalinovators@gmail.com</a></strong>
          </p>
          <Button href="https://drive.google.com/file/d/1DVHFi78IntGbSDfwJPUdwpc1bTVNJY10/view" target="_blank" color="info"> Membership Form</Button>
          </Fade> 
        </GridItem>
      </GridContainer>
      <br/>
      
      <GridContainer justify="center">
        
          <GridItem xs={12} sm={12} md={10}>
          <Fade left>
            <Card >
              <CardHeader color="info"><strong>Professional Membership</strong></CardHeader>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={6} md={6}>
                      <Fade left delay={500}>
                      <Card >
                        <CardHeader color="info"><strong>For Indian</strong></CardHeader>
                        <CardBody>
                         <strong>Life Time :</strong> INR 2500<br/>
                         <strong>One Year :</strong> INR 800<br/>
                         
                          
                        </CardBody>
                      </Card>
                      </Fade>
                      
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                      <Fade left delay={1000}>
                      <Card >
                        <CardHeader color="info"><strong>For Others</strong></CardHeader>
                        <CardBody>
                    
                          <strong>Life Time :</strong> USD 100<br/>
                          <strong>One Year :</strong> USD 40<br/>
                        </CardBody>
                      </Card>
                      </Fade>
                      
                  </GridItem>
                  <strong style={card}>There will be reduction of 10% of UI Professional Membership’s registration fee for the authors who already published their research paper(s) in UI conferences or journals.</strong>
                </GridContainer>
                
              </CardBody>
            </Card>

            </Fade>
            
             
          </GridItem>
          
          <GridItem xs={12} sm={12} md={10}>
          <Fade left>
            <Card >
              <CardHeader color="info"><strong>Student Membership</strong></CardHeader>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={6} md={6}>
                      <Fade left delay={500}>
                      <Card >
                        <CardHeader color="info"><strong>For Indian</strong></CardHeader>
                        <CardBody>
                         <strong>Life Time :</strong> INR 1500<br/>
                         <strong>One Year :</strong> INR 500<br/>
                         
                          
                        </CardBody>
                      </Card>
                      </Fade>
                      
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                      <Fade left delay={1000}>
                      <Card >
                        <CardHeader color="info"><strong>For Others</strong></CardHeader>
                        <CardBody>
                    
                          <strong>Life Time :</strong> USD 60<br/>
                          <strong>One Year :</strong> USD 20<br/>
                        </CardBody>
                      </Card>
                      </Fade>
                      
                  </GridItem>
                 
                </GridContainer>
                
              </CardBody>
            </Card>

            </Fade>
            
             
          </GridItem>

          <GridItem xs={12} sm={12} md={10}>
          <Fade left>
            <Card >
              <CardHeader color="info"><strong>Institutional Membership</strong></CardHeader>
              <CardBody>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={6} md={6}>
                      <Fade left delay={500}>
                      <Card >
                        <CardHeader color="info"><strong>For Indian</strong></CardHeader>
                        <CardBody>
                         <strong>Life Time :</strong> INR 30,000<br/>                      
                          
                        </CardBody>
                      </Card>
                      </Fade>
                      
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                      <Fade left delay={1000}>
                      <Card >
                        <CardHeader color="info"><strong>For Others</strong></CardHeader>
                        <CardBody>
                    
                          <strong>Life Time :</strong> USD 1000<br/>
                        </CardBody>
                      </Card>
                      </Fade>
                      
                  </GridItem>
                
                </GridContainer>
                
              </CardBody>
            </Card>

            </Fade>
            
             
          </GridItem>
      
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>

          <h3 className={classes.title}>Payment</h3>
          
          
          <p className={classes.description} style={design} > The fee for the membership may be paid via online, cash / DD /cheque or via wired transfer to the ICICC bank account. If there is any surcharge over outstation DD or cheque, it is to be borne by the member.</p>
          <ul className={classes.description} style={design}>
            <strong>Account Name:  ICICC</strong><br/>
            <strong>Account No:  510909010080523</strong><br/>
            <strong>Bank:  City Union Bank</strong><br/>
            <strong>Branch:  Sector-8, Rohini, Delhi</strong><br/>
            <strong>IFSC Code:   CIUB0000244</strong><br/>
          </ul>

        </GridItem>
      </GridContainer>

      <br/>

      </GridContainer>

      <Zoom>
      <Card className={classes.textCenter}>
        <CardHeader color="info"><strong>Why Join Universal-Inovators?</strong></CardHeader>
        <CardBody>
         
          <p>
          
            
               <strong style ={card}>UI provides a common platform for the matured and young researchers working in the field of research.</strong> <br/>
               <strong style ={card}>Opportunity to join a large community of universal inovators.</strong> <br/>
               <strong style ={card}>Young and upcoming researchers can interact with the leading researchers of the world.</strong> <br/>
               <strong style ={card}>Opportunity to get information of all events organized / sponsored by UI.</strong> <br/>
               <strong style ={card}>All members of UI will receive the discount in the registration fee of ICICC series conferences, UI schools, FDPs and all other events sponsored/supported by UI.</strong> 
            
        
          </p>
          
        </CardBody>
        
      </Card>
      </Zoom>
      <br/>

      <Zoom> 
      <Card className={classes.textCenter}>
        <CardHeader color="info"><strong>Benefits of Professional Membership</strong></CardHeader>
        <CardBody>
         
          <p>
          
          
               <strong style ={card}>UI provides platform to discuss with the experts (editors and Reviewers of UI) about technical concepts related to the experts during UI conferences or via email.</strong> <br/>
               <strong style ={card}>Reduction of 10% of registration fee will be made for publishing research works in UI conferences or journals.</strong> <br/>
               <strong style ={card}>Assistance to publish conference research papers in Scopus Indexed, UGC approved Journals (Conditions applied).</strong> <br/>
               <strong style ={card}>UI yearly magazine containing outstanding research works of that year or research related books will be issued by the end of December month (Soft copy).</strong> <br/>
               <strong style ={card}>After registration process, the UI membership ID card having member’s photo with membership identification number and other details of his/her profession, will be issued within 20 working days. This will add credit to member’s resume.</strong> <br/>
               <strong style ={card}>UI members will be given more preference during the issuing of UI’s yearly awards.</strong> <br/>
               <strong style ={card}>UI members will get complete assistance in publishing textbooks at nominal charges.</strong> <br/>
               <strong style ={card}>Periodical promotions will be there as region wise Coordinator and Chief Coordinator.</strong> 
         
          </p>
          
        </CardBody>
        
      </Card>

      </Zoom>
             
      <br/>
      <Zoom> 
      <Card className={classes.textCenter}>
        <CardHeader color="info"><strong>Benefits of Student Membership </strong></CardHeader>
        <CardBody>
         
          <p>
        
             

               <strong style ={card} >Complete assistance in writing technical papers. </strong> <br/>
               <strong style ={card}>Reduction of 10% of registration fee will be made for publishing research works in UI conferences or journals and also for participation in workshops, seminars, school and training. </strong> <br/>
               <strong style ={card}>After registration process, the UI membership ID card will be issued within 20 working days.</strong> <br/>
               <strong style ={card}>UI member will be given more preference during the issuing of UI’s yearly awards.</strong> <br/>
               <strong style ={card}>Periodical promotions will be there as region wise Coordinator and Chief Coordinator.</strong> 

           
        
          </p>
          
        </CardBody>
        
      </Card>

      </Zoom>

      <br/>
      <Zoom> 
      <Card className={classes.textCenter}>
        <CardHeader color="info"><strong>Benefits of Institute Membership</strong></CardHeader>
        <CardBody>
         
          <p>
         
             

               <strong style ={card}>MOU with the Institute/Department to establish Faculty/Student Chapter. </strong> <br/>
               <strong style ={card}>Assistance to conduct National/International conferences (Conditions applied) in the institute including online publication, offline publication along with conference kit.</strong> <br/>
               <strong style ={card}>UI-Editorial Board Membership will be given to the all Ph.D holders of the institute along with unique UI ID and certificate.</strong> <br/>
               <strong style ={card}>UI Professional Membership to all the faculties of Institute/Department (Only e-Certificate and e-Id card will be issued). </strong> <br/>
               <strong style ={card}> Two pages for advertisement will be reserved for the institute in UI YEAR BOOK which will be circulated to more than 15,000 UI subscribers all over the country.</strong> <br/>
               <strong style ={card}>Assistance to publish conference proceedings with ISBN (Conditions applied).</strong> <br/>
               <strong style ={card}>Assistance to publish conference research papers in Scopus Indexed, UGC approved Journals (Conditions applied).</strong> <br/>
               <strong style ={card}>Assistance in publishing thesis / text books under UI Publication House with nominal charges.</strong> 

           
        
          </p>
          
        </CardBody>
        
      </Card>

      </Zoom>

      <br/>    
      
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>

          <h3 className={classes.title}>Terms & Conditions</h3>
           <Fade bottom>
          <p style={design} >
          Every member of UI is abiding by following rules and regulations :<br/>
            <ul>
              <li>Every member of the UI will work as per aims and objectives of Universal Inovators.</li>
              <li>Initially, the membership is granted for one year.</li>
              <li>Claim of refund of the membership fee is not possible in any case.</li>
              <li>The Executive Committee has end rights to accept and reject the membership application of anybody.</li>
              <li>Executive Committee can also debar any of its members at any point of time, if found working against the aims and objectives of UI. The decision of the Executive Committee will not be questioned.</li>
            </ul>
          </p>
          </Fade> 
        </GridItem>
      </GridContainer>         
       
      
    </div>
  );
}
