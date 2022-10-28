import React from "react";
import "./partner.css";
import { NavLink } from "react-router-dom";
import OE from "../Images/img6.jpg";
import { AiFillRightCircle } from "react-icons/ai";
import OP from "../Images/P1.png";
import PO from "../Images/P2.png";
import OO from "../Images/P3.png";

const Part = () => {
  return (
    <>
      <section className="part">
        <div className="container con-part">
          <div className="row row-part">
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="part-item">
                <div className="part-img">
                  <img src={OP} alt="" className="img-part" />
                </div>
                <div className="part-content">
                  <h6 className="part-content-head">Our partner</h6>
                  <h5 className="part-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fringilla suscipit.
                  </h5>
                  <div className="btn-part">
                    <NavLink href="#" className="part-bnt">
                      Learn More
                      <span className="icon-bn"></span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
     {/* ===================================================== */}
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="part-item">
                <div className="part-img">
                  <img src={PO} alt="" className="img-part" />
                </div>
                <div className="part-content">
                  <h6 className="part-content-head">Our partner</h6>
                  <h5 className="part-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fringilla suscipit.
                  </h5>
                  <div className="btn-part">
                    <NavLink href="#" className="part-bnt">
                      Learn More
                      <span className="icon-bn"></span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
           {/* ========================================= */}
            <div class="сol-12 col-md-6 col-lg-4">
              <div className="part-item">
                <div className="part-img">
                  <img src={OO} alt="" className="img-part" />
                </div>
                <div className="part-content">
                  <h6 className="part-content-head">Our partner</h6>
                  <h5 className="part-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fringilla suscipit.
                  </h5>
                  <div className="btn-part">
                    <NavLink href="#" className="part-bnt">
                      Learn More
                      <span className="icon-bn"></span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================Client-Section=======================       */}

      <section className="client">
        <div className="container con-cli">
          <div className="row row-client">
            <div className="col-12 col-md-12 col-lg-6">
              <div className="client-text">
                <p className="client-para">
                  <em>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eu accumsan diam, elementum maximus arcu. Lobortise
                    est ut blandit facilisis, est quam dictum dolor, sed mollis
                    augue. In elementum maximus tempus. Suspendisse augue eget
                    massa vestibulum hendrerit purus."
                  </em>
                </p>
                <h2 className="client-head">
                    <strong>Steve Jason</strong>
                    <br />
                    Client
                </h2>
                <div className="client-btn ">
                <NavLink to="#" className="bnt-cl">
                    Read Full Review
                     <AiFillRightCircle className="ic-bnt" />
                  </NavLink>
                </div>
              </div>
            </div> <div className="col-12 col-md-12 col-lg-6">
                <img src={OE}alt="" className="img-fluid client-img" />
            </div>


          </div>
        </div>
      </section>
    </>
  );
};
export default Part;
