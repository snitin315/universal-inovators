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
import Paypal from "components/Paypal/Paypal"
import Uiform from "assets/docs/UI_Membership_Form.docx"

const useStyles = makeStyles(styles);

export default function MemberDetails() {
  const classes = useStyles();

  const design = {
    color: 'gray',
    font: 'inherit',
    textAlign: 'justify',
    fontSize: 'small',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    alignItem: 'center'
  }

  const card = { textAlign: "justify", float: "left", color: "gray" }

  return (
    <div className={classes.section}>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>

          <h3 className={classes.title}>About Universal-Innovators</h3>
          <Fade bottom>
            <p style={design} >Universal Inovators aims to do non-profit collaborative research in the field of engineering, applied sciences and management with academicians, faculties, students, researchers and educational institutes. This leads us to be playing a creative and critical role in the society by disseminating teaching and research on a global scale, the cornerstones of which are good, long-term relationships, a focus on real life applications necessary for the welfare of the mankind, and an ability to combine quality and innovation.</p>
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

          <h3 className={classes.title}>Benefits for UI Members:</h3>

          <Fade bottom>
            <ol style={design, { flexDirection: 'column', color: 'gray', fontSize: 13, paddingLeft: 20 }}>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>All UI members will get DISCOUNT in the registration fee for all the upcoming events sponsored/supported by UI.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>UI TECHNICAL MAGAZINE (yearly) in Soft copy will be sent to all the UI members.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>Each Registered UI member will get an EXCLUSIVE UI MEMBERSHIP CARD AND CERTIFICATE with a UNIQUE ID.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>UI members can get assistance*/guidance in publishing Research Paper.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>UI offers a unified forum for all the UI members to collaborate and grow in their respective fields with fruitful networking.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>Free online access to all the UI sponsored/ supported activities as an attendee.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>Opportunity to join a large community of researchers, Startups, Academicians, Industrial Experts, IPR Experts, Investors and other Intellectuals.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>Opportunity to get the alerts of all the events Organized/ Sponsored/ Supported by UI.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>UI members will get free online access to UI Library.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>10.	UI offers consultancy services to Institutional Members in International Conferences/ International Collaboration/ Project Consultancy/ Workshops/ Startup Incubation services/ IPR services.</li>
            </ol>
            <p style={design, { textAlign: "left", color: '#707070', marginTop: 20 }}>
              Any individual who has attained the age of 16 or more can join UI as a member. To join UI, he / she has to fill the Membership Form and pay the required membership fees. At present researchers can join UI in the following categories, and mail the membership form with transaction details at universalinovators@gmail.com
            </p>
          </Fade>
        </GridItem>
      </GridContainer>
      <br />
      <Button onClick={() => { window.location.href = Uiform }} style={{ cursor: 'pointer', marginBottom: 40, backgroundColor: '#28a796' }} download={false}>Membership form</Button>
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
                          <strong>Life Time :</strong> INR 4000<br />
                          <strong>One Year :</strong> INR 1000<br />


                        </CardBody>
                      </Card>
                    </Fade>

                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                    <Fade left delay={1000}>
                      <Card >
                        <CardHeader color="info"><strong>For Others</strong></CardHeader>
                        <CardBody>

                          <strong>Life Time :</strong> USD 150<br />
                          <strong>One Year :</strong> USD 50<br />
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
                          <strong>Life Time :</strong> INR 2000<br />
                          <strong>One Year :</strong> INR 500<br />


                        </CardBody>
                      </Card>
                    </Fade>

                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                    <Fade left delay={1000}>
                      <Card >
                        <CardHeader color="info"><strong>For Others</strong></CardHeader>
                        <CardBody>

                          <strong>Life Time :</strong> USD 60<br />
                          <strong>One Year :</strong> USD 20<br />
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
                          <strong>Life Time :</strong> INR 25,000<br />
                          <strong>One Year :</strong> INR 5,000<br />
                        </CardBody>
                      </Card>
                    </Fade>

                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                    <Fade left delay={1000}>
                      <Card >
                        <CardHeader color="info"><strong>For Others</strong></CardHeader>
                        <CardBody>
                          <strong>Life Time :</strong> USD 500<br />
                          <strong>One Year :</strong> USD 200<br />
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
              <li>
                <strong>Account Name:  UNIVERSAL INOVATORS</strong><br />
                <strong>Account No:  510909010118890</strong><br />
                <strong>Bank:  City Union Bank</strong><br />
                <strong>Branch:  Sector-8, Rohini, Delhi</strong><br />
                <strong>IFSC Code:   CIUB0000244</strong><br />
                <strong>MICR: 600054027</strong><br />
                <strong>Swift Code: CIUBIN5M</strong><br />
                <strong>Account Type: CURRENT</strong><br />
              </li>
              <li>
                <Paypal />
              </li>
            </ul>

          </GridItem>
        </GridContainer>

        <br />

      </GridContainer>

      <Zoom>
        <Card className={classes.textCenter}>
          <CardHeader color="info"><strong>Why Join Universal-Inovators?</strong></CardHeader>
          <CardBody>
            <ol style={design, { flexDirection: 'column', color: 'gray', fontSize: 13, paddingLeft: 20 }}>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>All UI members will get DISCOUNT in the registration fee for all the upcoming events sponsored/supported by UI.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>UI TECHNICAL MAGAZINE (yearly) in Soft copy will be sent to all the UI members.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>Each Registered UI member will get an EXCLUSIVE UI MEMBERSHIP CARD AND CERTIFICATE with a UNIQUE ID.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>UI members can get assistance*/guidance in publishing Research Paper.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>UI offers a unified forum for all the UI members to collaborate and grow in their respective fields with fruitful networking.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>Free online access to all the UI sponsored/ supported activities as an attendee.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>Opportunity to join a large community of researchers, Startups, Academicians, Industrial Experts, IPR Experts, Investors and other Intellectuals.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>Opportunity to get the alerts of all the events Organized/ Sponsored/ Supported by UI.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>UI members will get free online access to UI Library.</li>
              <li style={{ textAlign: 'left', paddingLeft: 10 }}>10.	UI offers consultancy services to Institutional Members in International Conferences/ International Collaboration/ Project Consultancy/ Workshops/ Startup Incubation services/ IPR services.</li>
            </ol>
            <p style={design, { textAlign: "left", color: '#707070', marginTop: 20 }}>
              Any individual who has attained the age of 16 or more can join UI as a member. To join UI, he / she has to fill the Membership Form and pay the required membership fees. At present researchers can join UI in the following categories, and mail the membership form with transaction details at universalinovators@gmail.com
            </p>
          </CardBody>

        </Card>
      </Zoom>
      <br />

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>

          <h3 className={classes.title}>Terms & Conditions</h3>
          <Fade bottom>
            <div style={design} >
              Every member of UI is abiding by following rules and regulations :<br />
              <ul>
                <li>Every member of the UI will work as per aims and objectives of Universal Inovators.</li>
                <li>Initially, the membership is granted for one year.</li>
                <li>Claim of refund of the membership fee is not possible in any case.</li>
                <li>The Executive Committee has end rights to accept and reject the membership application of anybody.</li>
                <li>Executive Committee can also debar any of its members at any point of time, if found working against the aims and objectives of UI. The decision of the Executive Committee will be full and final.</li>
              </ul>
            </div>
          </Fade>
        </GridItem>
      </GridContainer>


    </div>
  );
}
