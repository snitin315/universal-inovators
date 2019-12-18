import React, {Component, Children} from 'react';
import Particles from 'react-particles-js';


const ParticlesContainer = (props) => {

    const bg ={
        top: "0px",
        bottom: "0px",
        right: "0px",
        left: "0px",
        position: "fixed",
        zIndex: "-1",
    }

    return ( 
        <Particles 
            style ={bg}
            params={{
                "particles": {
                    "number": {
                        "value": 40
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
                
            }} >

            {props.children}    

        </Particles>        
    )
}

export default ParticlesContainer ;