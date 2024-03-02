import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="myFooter">
        <ul className="ftr">
          <li className="footer_li">
            <h4>Free Shipping</h4>
            <p>When ordering more than $100</p>
          </li>
          <li className="footer_li">
            <h4>Free Return</h4>
            <p>Get return within 30 days</p>
          </li>
          <li className="footer_li">
            <h4>Secure Payment</h4>
            <p>100% Secure Online Payment</p>
          </li>
          <li className="footer_li">
            <h4>Best Quality</h4>
            <p>Original Product Guarenteed</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
