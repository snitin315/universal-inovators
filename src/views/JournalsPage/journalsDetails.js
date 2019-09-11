import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from "react-reveal/Fade"
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Details() {
  const classes = useStyles();

  const design = {
    textAlign :"justify"
  }



  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <h3 className={classes.title}>JOURNALS</h3>
          <Fade bottom>
          <p className={classes.description} style={design}>
          Universal Inovators have already launches its first journal entitled <strong>"Innovative Computing and Communication: An International Journal"</strong>.
          Many more journals are in the pipeline, to being the part of our journals, write to us at <a> ijicc.editor@gmail.com</a>
          </p>
          </Fade>
        </GridItem>
      </GridContainer>
      <h3 className={classes.title}>ABOUT THE JOURNAL </h3>
      <Fade bottom>
      <p className={classes.description} style={design}>
      Innovative Computing and Communication Journal (IJICC) is an annual international scientific peer-reviewed journal. Journal publishes original scientific papers, preliminary communications and review articles from the field of Computing, Communication Networks and Security and Internet of Things, 
      as well as relevant contributions from related scientific disciplines. Publication in Innovative Computing and Communication Journal is without any costs/charge to authors. All processing and publishing costs are borne by the journal owner rather than by the author.
      <br/>Innovative Computing and Communication Journal is dedicated to the dissemination of information on computer science, computer engineering, and computer systems. This journal encourages articles on original research in the areas of computer software, hardward, man-machine interface, theory and applications.
      tutorial papers in the above-mentioned areas, and state-of-the-art papers on various aspects of computer systems and applications.
      </p>
      </Fade>
      <h3 className={classes.title}>PEER REVIEW PROCESS </h3>
      <Fade bottom>
      <p className={classes.description} style={design}>
      The Innovative Computing and Communication Journal - IJICC will not accept or publish papers without prior peer review. There shall be a review process of submitted papers by one or more independent referees who are conversant in the pertinent subject area.<br/>
      Peer reviews will be proposed by the Editing board, or will be confirmed by the Editorial board and the editor. For each paper two referees will be nominated, and when necessery the third one. The final decision about publishing the reviewed paper will bring the Editor.<br/>
      Authors should strive for maximum clarity of expression, bearing in mind that the peer reviewers are eminent scientists in the field of their research.<br/>
      Referees shall treat the contents of papers under review as privileged information not to be disclosed to others before publication. It is expected that no one with access to a paper under review will make any inappropriate use of the special knowledge which that access provides. Contents of abstracts submitted to conference program committees shall be regarded as privileged as well, and handled in the same manner.

      </p>
      </Fade>
      <h3 className={classes.title}>OPEN ACCESS POLICY</h3>
      <Fade bottom>
      <p className={classes.description} style={design}>
      This journal provides immediate open access to its content on the principle that making research freely available to the public supports a greater global exchange of knowledge.
      </p>
      </Fade>

      <h3 className={classes.title}>ARTICLE PROCESSING CHARGES </h3>
      <Fade bottom>
      <p className={classes.description} style={design}>
      Publication in Innovative Computing and Communication Journal (IJICC) is without any costs/charge to authors. All processing and publishing costs are borne by the journal owner rather than by the author.
      </p>
      </Fade>
      <h5 className={classes.title}>Web-Link For The Journal : <a href="http://icc-journal.com/" target="_blank" rel="noopener">icc-journal.com</a></h5>
      
    </div>
  );
}
