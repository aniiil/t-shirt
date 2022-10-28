import React from "react";
import "./about.css";
import IG from "../Images/img.jpeg";
import TS from "../Images/img3.jpg";
import TT from "../Images/img2.jpg";
import { NavLink } from "react-router-dom";
import { AiFillRightCircle } from "react-icons/ai";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container con-ab">
          <div className="row row-about">
            <div className="section-head col-12 ">
              <h4 className="sec-text">How it works?</h4>
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="card-section">
                <div className="c-img">
                  <img className="img-fluid" src={IG} alt="" />
                </div>
                <div className="c-text">
                  <h5 className="text-c">Unique T-Shirts</h5>
                </div>
                <div className="c-btn d-flex">
                  <NavLink href="#" className="card-bn">
                    Buy for $100
                  </NavLink>

                  <NavLink href="#" className="bnt">
                    View all
                    <span className="icon-bn">
                      <AiFillRightCircle />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
              <div className="card-section">
                <div className="c-item">
                  <h5 className="c-item-head">Unique T-Shirt Design</h5>
                  <p className="c-item-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    autem explicabo ea nemo sapiente blanditiis doloremque qui
                    minima quasi possimus.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis obcaecati ducimus dolorum, aliquid praesentium
                    fugiat. Cumque nam reiciendis
                  </p>
                </div>
                <div className="c-btn2 d-flex">
                  <NavLink href="#" className="card-bn">
                    Subscribe $500/Yr
                  </NavLink>

                  <NavLink href="#" className="bnt">
                    More Info
                    <span className="icon-bn">
                      <AiFillRightCircle />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className=" container con-about">
          <div className="row row-about-us">
            <div className="col-12 col-lg-4">
              <h5 className="us-head">About Us</h5>
            </div>
            <div className="col-12 col-md-12 col-lg-8">
              <p className="us-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
                vel, iste voluptatem error doloribus magni officiis suscipit
                consectetur minus itaque? Eum, optio dignissimos nam, quaerat
                vitae possimus a praesentium ad vero commodi ipsa sit tempore
                assumenda modi at! Facere, corrupti!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="tools">
        <div className=" container con-about">
          <div className="t-head">
            <h5 className="t-title">Professional Tools</h5>
          </div>
          <div className="row row-tools">
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="tools-item">
                <div className="tools-img">
                  <img src={TS} alt="" className="img-fluid" />
                </div>
                <div className="tools-content">
                  <h6 className="t-content-head">Quality Materials</h6>
                  <h5 className="t-content-text">
                    Lorem ipsum dolor sit amet.
                  </h5>
                  <p className="t-content-para">Read More &gt;</p>
                </div>
              </div>
             
            </div>
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="tools-item">
                <div className="tools-img">
                  <img src={TT} alt="" className="img-fluid" />
                </div>
                <div className="tools-content">
                  <h6 className="t-content-head">Good Reviews</h6>
                  <h5 className="t-content-text">
                    Lorem ipsum dolor sit amet.
                  </h5>
                  <p className="t-content-para">Read More &gt;</p>
                </div>
              </div>
            </div>
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="tools-item">
                <div className="tools-img">
                  <img src={IG} alt="" className="img-fluid" />
                </div>
                <div className="tools-content">
                  <h6 className="t-content-head">High Print Quality</h6>
                  <h5 className="t-content-text">
                    Lorem ipsum dolor sit amet.
                  </h5>
                  <p className="t-content-para">Read More &gt;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
