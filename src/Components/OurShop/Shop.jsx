import React from "react";
import "./shop.css";
import TT from "../Images/img2.jpg";
import IG from "../Images/img.jpeg";
import { NavLink } from "react-router-dom";
import { AiFillRightCircle } from "react-icons/ai";

const Shop = () => {
  return (
    <>
      <section className="Shop">
        <div className=" container con-shop">
          <div className="row row-shop">
            <div className="col-md-12 col-lg-9">
              <h4 className="shop-head">Our Shop</h4>

              <p className="shop-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquid aliquam nobis aspernatur alias vel, distinctio quaerat
                magni laboriosam neque nam tenetur, quae aperiam facere impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-card">
        <div className="container con-shop-card">
          <div className="card-1">
            <div className="card-wrapper">
              <div className=" card-row d-flex align-items-center">
                <div className="c-row-img">
                  <div className="card-img ">
                    <img src={TT} alt="" className="img-fluid" />
                  </div>
                </div>

                <div className="c-row-con">
                  <div className="card-box">
                    <div className="row shop-r2">
                      <div className="col-md">
                        <h6 className="card-head">T-shirt with Print</h6>
                        <p className="card-para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab eveniet rerum sit ducimus vel quasi dolorem
                          suscipit odit optio neque, vero laboriosam id natus
                          inventore mollitia architecto? Quia autem perferendis
                          minima pariatur nemo aperiam at.
                        </p>
                      </div>
                      <div className="col-md-auto">
                        <p className="para2">$50</p>
                        <div className="card-btn">
                          <NavLink href="#" className="bnt">
                            Buy Now
                            <span className="icon-bn">
                              <AiFillRightCircle />
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =======================2nd-Card================================= */}
          <div className="card-1">
            <div className="card-wrapper">
              <div className=" card-row d-flex align-items-center">
                <div className="c-row-img">
                  <div className="card-img ">
                    <img src={IG} alt="" className="img-fluid" />
                  </div>
                </div>

                <div className="c-row-con">
                  <div className="card-box">
                    <div className="row shop-r2">
                      <div className="col-md">
                        <h6 className="card-head">T-shirt with Slogan</h6>
                        <p className="card-para">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ab eveniet rerum sit ducimus vel quasi dolorem
                          suscipit odit optio neque, vero laboriosam id natus
                          inventore mollitia architecto? Quia autem perferendis
                          minima pariatur nemo aperiam at.
                        </p>
                      </div>
                      <div className="col-md-auto">
                        <p className="para2">$80</p>
                        <div className="card-btn">
                          <NavLink href="#" className="bnt">
                            Buy Now
                            <span className="icon-bn">
                              <AiFillRightCircle />
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
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
export default Shop;
