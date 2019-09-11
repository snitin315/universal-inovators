import React from 'react';
import SplitText from 'react-pose-text';


const charPoses = {
  exit: { 
    opacity: 0, y: 20 , 
  },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 140,
  }
};

function CharPose(props) {
  return (
    <div className="container">
      <SplitText initialPose="exit" pose="enter" charPoses={charPoses} >
        {props.text}
      </SplitText>
    </div>
  );
}


export default CharPose;
