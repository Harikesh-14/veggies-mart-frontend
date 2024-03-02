import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ProductCategories from "../../../../src/DataList/ProductCategories.json";

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
                <FontAwesomeIcon icon={faBars} className="bars" />
                <DropdownMenu>
                  <DropdownMenuTrigger>All Categories</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Product Categories</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
                    {ProductCategories &&
                      ProductCategories.map((category, index) => {
                        return (
                          <DropdownMenuItem key={index}>
                            <Link to={`/category/${category.category_name}`}>
                              {category.category_name}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                  </DropdownMenuContent>
                </DropdownMenu>
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
