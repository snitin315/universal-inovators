import React from "react";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Quote from "components/Typography/Quote.js";

export default function Steps(props) {

  const design ={
    width : '50%',
    textAlign : 'justify',
    
  }

  const border ={
    border : "2px solid #3aafa9",
    borderRadius : '10px',
    minwidth: "12rem"
  }
  return (
    
    <Card style={border}>
      <strong><CardHeader color="info" style={design}>As {props.num} Step</CardHeader></strong>
      <CardBody >
        <Quote style ={{textAlign:"justify",textJustify:"inter-word",color:"blue"}} 
          text={props.text}
        />
      </CardBody>
    </Card>
  );
}
