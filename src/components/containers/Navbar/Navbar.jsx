import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="background">
      <div className="flex flex-row">
        <div className="subContainer">
          <ul className="flex flex-row">
            <li className="all_categories list">
              <Link to={"/"}>
                {" "}
                <FontAwesomeIcon icon={faBars} className="bars"/>
                All Categories
              </Link>
            </li>
            <li className="list">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="list">
              <Link to={"/"}>Shop +</Link>
            </li>
            <li className="list">
              <Link to={"/"}>Pages +</Link>
            </li>
            <li className="list">
              <Link to={"/"}>About</Link>
            </li>
            <li className="list">
              <Link to={"/"}>Blog</Link>
            </li>
            <li className="list">
              <Link to={"/"}>User Dashboard</Link>
            </li>
            <li className="list">
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to={"/"} className="seller">
              Seller Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;