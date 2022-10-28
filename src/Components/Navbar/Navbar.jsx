import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillRightCircle } from "react-icons/ai";

const Nav = () => {
  return (
    <>
     
      <div class="navbar navbar-expand-lg navbar-light nav-container">
        <div class="container-fluid">
          <div className="main-nav">
            {" "}
            <NavLink class="navbar-brand" to="#">
              <h1>ToolM5</h1>
            </NavLink>
          </div>
          <button
            class="navbar-toggler"
            type="button"   
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <div className="nav-list ms-auto navbar-nav  mb-lg-0">
              <NavLink className="nav-menu " to="/">
                About us
              </NavLink>
              <NavLink className="nav-menu " to="/">
                Services
              </NavLink>
              <NavLink className="nav-menu " to="/">
                Contacts
              </NavLink>
            </div>
            <div className="nav-icons d-flex">
              <NavLink className="icons" to="#">
                <FaFacebookF />
              </NavLink>
              <NavLink className="icons" to="#">
                <FaInstagram />
              </NavLink>
              <NavLink className="icons" to="#">
                <FaTwitter />
              </NavLink>
            </div>
            <div className="nav-btn d-flex">
              <NavLink className="button-text" to="#">
                Get Started
                <span className="btn-icon">
                  <AiFillRightCircle />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
