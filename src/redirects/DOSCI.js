import React, { useEffect } from "react";

const DOSCI = () => {

  useEffect(() => {
    window.location.href = "http://dosci-conf.com";
  }, []);

  return (
    <div style={{margin: "50px"}}>
      <h4>Redirecting to <a href="http://dosci-conf.com">dosci-conf.com</a> ...</h4>
    </div>
  );
}

export default DOSCI;