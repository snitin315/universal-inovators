import React from "react";

import { Planets } from 'react-preloaders';




export default function Preloader() {
    return(
        <div>
            <Planets time={1000} animation = "slide" color = {"#00A5BB"} />  
            
        </div>
    );
}
