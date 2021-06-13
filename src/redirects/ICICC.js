import React, { useEffect } from "react";

const ICICC = () => {

  useEffect(() => {
    window.location.href = "http://icicc-conf.com";
  }, []);

  return (
    <div style={{margin: "50px"}}>
      <h4>Redirecting to <a href="http://icicc-conf.com">icicc-conf.com</a> ...</h4>
    </div>
  );
}

export default ICICC;
