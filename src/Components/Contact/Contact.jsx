import React from "react";
import "./contact.css";
import { GrMailOption } from "react-icons/gr";
import { RiSmartphoneLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Con = () => {
  return (
    <>
      <section className="con-us">
        <div className="container  con-cn">
          <div className="upper-us">
            <h3 className="us-head">Contacts</h3>
            <h4 className="con-us-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h4>
          </div>

          <div className="row lower-us">
            <div className="card-us col-12 col-lg-6">
              <div className="lower-con-card">
                <div className="con-card-item">
                  <div className="lower-con-img">
                    <NavLink className="us-img">
                      <GrMailOption />
                    </NavLink>
                  </div>
                  <h4 className="us-img-text">Email</h4>
                  <p className="us-img-para">
                    We will reply as soon as possible
                  </p>
                  <h5 className="us-img-msg">Send us an email</h5>
                </div>
              </div>
            </div>

            {/* ============================================ */}
            <div className="card-us col-12 col-lg-6">
              <div className="lower-con-card">
                <div className="con-card-item">
                  <div className="lower-con-img">
                    <NavLink className="us-img">
                      <RiSmartphoneLine />
                    </NavLink>
                  </div>
                  <h4 className="us-img-text">Phone</h4>
                  <p className="us-img-para">Mon - Fri 09:00 - 18:00</p>
                  <h5 className="us-img-msg">Call (800) 123 45 67</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================Form-Section===================== */}
      <section className="cn-form">
        <div className="container con-form">
          <div className="form-head">
            <h3 className="form-text">Send Meassage</h3>
          </div>

          <div className="row form-data">
            <div className="col-lg-8 clo-12 mx-auto">
              <form className="fm-data" action="">
                <div className="form-area row">
                  <div className="col-sm-12 col-md mb-3">
                    <input
                      type="text"
                      name="name"
                      id="name-form"
                      placeholder="Name"
                      className="fm-name"
                    />
                  </div>
                  <div className="col-sm-12 col-md mb-3">
                    <input
                      type="email"
                      name="email"
                      id="email-form"
                      placeholder="E-mail"
                      className="fm-email"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="url"
                      name="url"
                      id="url-form"
                      placeholder="Your Site"
                      className="fm-url"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name="textarea"
                      id="textarea-form"
                      rows="5"
                      placeholder="Message"
                      className="fm-textarea"
                    ></textarea>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 form-btn">
                  <button type="submit" className="fm-btn">Send message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Con;
