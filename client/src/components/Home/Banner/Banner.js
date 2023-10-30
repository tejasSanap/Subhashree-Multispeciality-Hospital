import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container>
      <div className="banner">
        <div className="banner_top_hidden">
          <h4>TOP DOCTORS</h4>
          <h2>Make Your</h2>
          <p>Life Helthy</p>
        </div>
        <div className="banner_container">
          <div className="banner_left ">
            <div className="banner_left_social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="banner_left_bottom">
              <h4>TOP DOCTORS</h4>
              <h2>Make Your</h2>
              <p>Life Helthy</p>

              <Link to="/appointment" className="appointment_btn">
                <span>Get Appointment</span> <i className="fas fa-plus"></i>
              </Link>
            </div>
          </div>

          <div className="banner_middle ">
            {/* <img src={bannerImg} alt="" className="img-fluid" /> */}
          </div>
          <div className="banner_right">
            <div className="moto">
              <h4>OUR MOTO</h4>
              <h2>GREAT HEALTH</h2>
            </div>
            <div className="specialization">
              <h6>SPECIALIZATION IN</h6>
              <p>CARDIOLOGIST:</p>
              <p>AUDIOLOGIST:</p>
              <p>INTERNISTS:</p>
            </div>
            <div className="madical_info">
              <h5>MADICAL INFO</h5>
              <h4>DR. K.F. BRANDINA</h4>
              <img src="https://i.ibb.co/9rPhX7r/signature.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
