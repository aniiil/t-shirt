import React from "react";
import "./team.css";
import OM from "../Images/img5.jpg";
import OD from "../Images/img4.jpg";
import OE from "../Images/img6.jpg";
import { NavLink } from "react-router-dom";
import { AiFillRightCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <section className="team">
        <div className=" container con-team">
          <div className="team-head">
            <h5 className="team-title">Our Team</h5>
            <h5 className="team-title-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h5>
          </div>
          <div className="row row-tools">
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="team-item">
                <div className="team-img">
                  <img src={OM} alt="" className="img-fluid" />
                </div>
                <div className="team-content">
                  <h6 className="team-content-head">Jessica Swift</h6>
                  <h6 className="team-content-pos">Manager</h6>
                  <h5 className="team-content-text">
                    Lorem ipsum dolor sit amet Lorem, ipsum dolor.
                  </h5>

                  <NavLink href="#" className="team-bnt">
                    View Profile
                    <span className="icon-bn">
                      <AiFillRightCircle />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="team-item">
                <div className="team-img">
                  <img src={OD} alt="" className="img-fluid" />
                </div>
                <div className="team-content">
                  <h6 className="team-content-head">Ben Palmer</h6>
                  <h6 className="team-content-pos">Designer</h6>
                  <h5 className="team-content-text">
                    Lorem ipsum dolor sit amet Lorem, ipsum dolor.
                  </h5>

                  <NavLink href="#" className="team-bnt">
                    View Profile
                    <span className="icon-bn">
                      <AiFillRightCircle />
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="team-item">
                <div className="team-img">
                  <img src={OE} alt="" className="img-fluid" />
                </div>
                <div className="team-content">
                  <h6 className="team-content-head">Adam Brown</h6>
                  <h6 className="team-content-pos">Devloper</h6>
                  <h5 className="team-content-text">
                    Lorem ipsum dolor sit amet Lorem, ipsum dolor.
                  </h5>

                  <NavLink href="#" className="team-bnt">
                    View Profile
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

      {/* ==============2nd sectiom============== */}
      <section className="action">
        <div className="container">
          <div className="act-head">
            <h4 className="act-text">View in Action</h4>
          </div>
          <div className="row-act">
            <div className="col-12 col-lg-8 col-act">
              <div className="box">
                <div className="box-content d-flex ">
                  <div >
                    <NavLink to="https://youtu.be/PivzLLqDZac" className="act-icon">
                   
                      <FaYoutube />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Team;
