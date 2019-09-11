import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Fade from 'react-reveal/Fade'
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

const design = {
  textAlign : "justify" 
}

export default function BooksDetails() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
     
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
         
        <h3 className={classes.title}><strong> Electrical Engineering and Computer Science Book Series </strong></h3> 
        <Fade bottom>
        <p className={classes.description} style={design}>The Electrical Engineering and Computer Science Book Series is an Open Access publication series dedicated to archiving <b>conference proceedings, edited books, monograph books</b> dealing with all the aspects related to electrical engineering and computer science. The aims and scope of the publication series cover the whole spectrum of algorithms, bioinformatics and biomedical engineering, big data management and analytics, broadband networks, distributed computing and computer architectures, electromagnetism, radio-frequencies and microwaves, information management and data mining, multimedia and interactive virtual environments, photonics, privacy and security, robotics, machine vision and autonomous systems, software engineering, speech/audio/image/video processing, text analysis and machine learning, wireless communications, wireless networks and mobile computing.<br/>
        <b>The Electrical Engineering and Computer Science Book Series </b>offers a wide range of services from the organization of the submission of conference proceedings to the worldwide dissemination of the conference papers. It provides an efficient archiving solution, ensuring maximum exposure and wide indexing of scientific conference proceedings.</p>
         </Fade>

        <h3 className={classes.title}>The Engineering and Management Book Series</h3> 
        <Fade bottom>
        <p className={classes.description} style={design}><b>The Engineering and Management Book Series</b> is an Open Access publication series dedicated to archiving <b>conference proceedings, edited books, monograph books</b> dealing with all the aspects related to electrical engineering and computer science. The aims and scope of the publication series cover the all topics related to Engineering (CSE, IT, ECE, MAE, EEE) and Management.<br/> <b>The Engineering and Management Book Series</b>  offers a wide range of services from the organization of the submission of conference proceedings to the worldwide dissemination of the conference papers. It provides an efficient archiving solution, ensuring maximum exposure and wide indexing of scientific conference proceedings.Proceedings are published under the scientific responsibility of the conference editors.</p>
        </Fade>
        <h3 className={classes.title}><strong> Abstracted In </strong></h3> 
        <Fade bottom>
        <p className={classes.description} style={design}>
          
        All articles published in this book series are submitted for indexation evaluation to CPCI (part of Clarivate's Web of Science), CNKI, Crossref and Google Scholar. Where applicable, they are also submitted to Ei Compendex and Scopus. For any information about the indexation of a particular proceedings, you are requested to contact the conference organizers as we are not able to respond to messages received directly from participants.  
        </p>  
        </Fade> 

        <h3 className={classes.title}><strong> Our Process </strong></h3> 
        <Fade bottom cascade>
        <p className={classes.description} style={design}>
          
        <b>The following notes provide a summary of the Proceedings of UI publishing process :</b>

        <li style={design}>Submit a quote request directly by email <b><a href="#">(universalinovators@gmail.com)</a> </b>with details of the conference.</li>
        <li style={design}>Our team will review the details of your conference and write to confirm if we can offer a proceedings publishing contract. After any further discussions we will send you a draft publishing agreement that will contain all the details and terms of publication.</li>
        <li style={design}>The organizers must inform authors of the Publication Ethics and Malpractice Statement.</li>
        <li style={design}>Authors submit their papers to the conference organizers who manage the peer review. Once review of the papers is completed the conference organizers submit the final papers to us in one batch. Papers submitted to us must be DOC as well as PDFs and must be in their final form ready for publication (as we do not edit or proofread papers after they are submitted to us). Please ensure that all changes have been approved by authors prior to the PDFs being submitted to us.</li>
        <li style={design}>Papers should be submitted to us via email using the account details recorded in the publishing agreement.</li>
        <li style={design}>
          Production and publication. We will process the PDFs into a format suitable for publication and upload them on FTP server. The guest editor will access that server to make a final check of the proceedings before they publish online. Please note the following important points:
          <ol>
            <li style={design} >Once a paper has been published online, changes will only be permitted in cases of serious scientific error. In those cases, an erratum or corrigendum will be published according to the practices of professional scientific publishing.</li>
            <li style={design} >Changes resulting from stylistic issues cannot be made to proceedings once they are published, so it is important that authors and organizers ensure papers have been adequately checked and proofed prior to submission.</li>
          </ol>
        </li>
        <li style={design}>Upon publication we will write to authors (who have supplied an e-mail address) informing them of publication and provide them with the URL of their paper.</li>
        <li style={design}>Printed copies (if applicable) will be prepared and shipped shortly after the online publication of the articles. The guest editor will be supplied with PDF proofs of the cover.</li>

        </p>
        </Fade>
        </GridItem>
      </GridContainer>
    


       
      
    </div>
  );
}
