import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container>
      <div className="banner">
        <div className="banner_top_hidden">
          {/* <h4>TOP DOCTORS</h4>
          <h2>Make Your</h2>
          <p>Life Helthy</p> */}
        </div>
        <div className="banner_container">
          <div className="banner_left ">
            <div className="banner_left_social"></div>
            <div className="banner_left_bottom">
              <Link to="/appointment" className="appointment_btn">
                <span style={{ fontWeight: "500" }}>Get Appointment</span>{" "}
                <i
                  style={{ backgroundColor: "#03989e" }}
                  className="fas fa-plus"
                ></i>
              </Link>
            </div>
          </div>
          {/* <img src="https://files.yappe.in/place/full/csmss-3806731.webp"></img> */}

          <div className="banner_middle ">
            <img src="/" alt="" className="img-fluid" />
          </div>
          <div className="banner_right">
            <div className="moto">
              <h4>OUR MOTO</h4>
              <h2>GREAT HEALTH</h2>
            </div>

            <div className="madical_info">
              <div className="specialization">
                <h6>SPECIALIZATION IN</h6>
                <p>CARDIOLOGIST</p>
                <p>AUDIOLOGIST</p>
                <p>INTERNISTS</p>
              </div>
              <h5>MEDICAL INFO</h5>
              {/* <h4>DR. UDAY RAJPUT</h4> */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
