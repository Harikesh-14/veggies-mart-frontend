import React from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import '../../../../public/fruits.png'

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
    <div className="navbarMainBackground">
      <div className="navbarMainContainer">
        <div className="allCategories">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none" style={{ padding: '.35rem 2rem .35rem 0' }}>
              <FontAwesomeIcon icon={faBars} className="bars" />
              All Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Product Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {
                ProductCategories.categories.map((category) => {
                  return (
                    <>
                      <DropdownMenuItem key={category.id}>
                        <div className="categoryGroup">
                          <img src={category.path} className="logos" />
                          <Link to={`/category/${category.category_name}`}>
                            {category.category_name}
                          </Link>
                        </div>
                      </DropdownMenuItem>
                    </>
                  )
                })
              }
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="navButtons">
          <ul>
            <li>
              <NavLink to={'/'} className="tabs">Home</NavLink>
            </li>
            <li>
              <NavLink to={'/'} className="tabs">Shop +</NavLink>
            </li>
            <li>
              <NavLink to={'/'} className="tabs">Pages +</NavLink>
            </li>
            <li>
              <NavLink to={'/'} className="tabs">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={'/'} className="tabs">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to={'/'} className="tabs">About Us</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-row gap-4">
          <Link to={'/authenticate'} className="buttons">User Login</Link>
          <Link to={'/authenticate'} className="buttons">Seller Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
