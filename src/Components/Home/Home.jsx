import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { ImSmile } from "react-icons/im";
import { FaTshirt } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import {VscSymbolColor } from "react-icons/vsc";



const Home = () => {
  return (
    <>
      <section className="upper-section">
        <div className="container con-home">
          <div className="row row-up">
            <div className="col-12 col-lg-12 col-md-12">
              <div className="tex-area">
                <h1 className="heading">Create your </h1>
                <p className="para">T-Shirt Design</p>
                <div className="nav-btn mt-4 d-flex">
                  <NavLink className="button-text2" to="#">
                    Get Started
                  </NavLink>
                </div>
                <p className="para2">
                  <strong>View how it works</strong>
                </p>
                <p className="para3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
       </section>
       <section className="lower-section">
        <div className="container">
          <div className="row row-down">
            <div className="col-12">
              <h2 className="head-line">
                <strong>Our Features</strong>
              </h2>
            </div>
            <div className="col-12 col-lg-3 col-md-6 feature-icon">
              <div className="card-box">
                <div className="c-icons">
                  <VscSymbolColor />
                </div>
                <div className="c-text">
                  <h4>Unique Design</h4>
                  <h5>Oct 19 2022</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 feature-icon">
              <div className="card-box">
                <div className="c-icons">
                  <FiLayers />
                </div>
                <div className="c-text">
                  <h4>Quality Material</h4>
                  <h5>Oct 15 2022</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 feature-icon">
              <div className="card-box">
                <div className="c-icons">
                  <FaTshirt />
                </div>
                <div className="c-text">
                  <h4>High Print Quality</h4>
                  <h5>Oct 14 2022</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-6 feature-icon">
              <div className="card-box">
                <div className="c-icons">
                  <ImSmile />
                </div>
                <div className="c-text">
                  <h4>Good Reviews</h4>
                  <h5>Oct 11 2022</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};
export default Home;
