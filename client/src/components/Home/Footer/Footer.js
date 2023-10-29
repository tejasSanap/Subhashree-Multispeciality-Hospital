import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Footer.css";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:7050/emailSub", data).then((res) => {
      if (res.status === 200) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Email has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Your Email has been not saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // const admin = useSelector((state) => state.admin.admin);
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={4}>
            <div className="footer-logo">
              <img
                className="img-fluid"
                src="https://i.ibb.co/hRX83Sc/logo.png"
                alt="Sigma Central Hospital"
              />
            </div>
            <div className="footer-text">
              <h2>Newsletter</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
            <div className="footer-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-cover d-flex justify-content-between">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email Adress"
                  />

                  <button type="submit" value="sign up">
                    <FaPaperPlane />
                  </button>
                </div>

                {errors.email && errors.email.type === "required" && (
                  <span className="py-4 text-danger">This is required</span>
                )}
              </form>
            </div>
          </Col>
          <Col sm={6} lg={2}>
            <div className="footer-menu-heading">
              <h3>Useful Links</h3>
            </div>
            <ul className="footer-menu">
              <Link className="footer-item" to="/about">
                About Us
              </Link>
              <Link className="footer-item" to="/appointment">
                Appointment
              </Link>
              <Link className="footer-item" to="/Service">
                Service
              </Link>
              <Link className="footer-item" to="/contact">
                Contact Us
              </Link>
              <Link className="footer-item" to="/adminLogin">
                Admin Login
              </Link>
            </ul>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footer-menu-heading">
              <h3>Working Day</h3>
            </div>
            <ul className="working">
              <li>
                <span>Weekdays</span>
                <span>9:00 - 20:00</span>
              </li>
              <li>
                <span>Friday</span>
                <span>9:00 - 20:00</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>10:00 - 18:00</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footer-menu-heading">
              <h3>Reach Us</h3>
            </div>
            <ul className="reach-us">
              <li>
                <a rel="noreferrer" target="_blank" href="tell:01629094984">
                  {" "}
                  <FaPhone />
                  +8801629094984
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:support@gmail.com"
                >
                  <FaEnvelope />
                  support@gmail.com
                </a>
              </li>
              <li>
                {" "}
                <FaMapMarkerAlt />
                1234 North Avenue Luke, South Bend, IN 360001
              </li>
              <li className="spical">
                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.twitter.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="foot-note">
              Copyright 2022 Sigma All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
