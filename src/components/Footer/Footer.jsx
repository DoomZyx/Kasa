import React from "react";
import "../Footer/_Footer.scss";
import LFooter from "../../assets/Footer.png";

function Footer() {
  return (
    <div className="Footer">
      <img className="footer-img" src={LFooter} alt="Logo Footer" />
      <h3>© 2020 Kasa. All rights reserved</h3>
    </div>
  );
}

export default Footer;
