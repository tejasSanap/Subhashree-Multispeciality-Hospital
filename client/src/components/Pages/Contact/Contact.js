import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelopeOpen } from "react-icons/fa";
import { RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Share/Header/Header";
import "./Contact.css";
import specializationBanner from '../../../images/specialization_banner.jpg';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5fctlnm",
        "template_c9ss9cm",
        form.current,
        "user_cKgbE80VqOVlLKlhO7S97"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been Send",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something worng",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <>
      <Header />
      <div
        style={{ background: `url(${specializationBanner})` }}
        className="backcrumb-my "
      >
        <nav aria-label="breadcrumb">
          <h3>Contact Us</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
      </div>
      <div className="contact">
        <Container>
          <Row className="g-3 padding-container" xs={1} md={2} lg={3}>
            <Col>
              <div className="contact-item">
                <RiMapPinLine />
                <h6>LOCATION</h6>
                First Floor, Durganand Heights Gajanan Mandir, Road, Pundlik
                Nagar, Aurangabad, Maharashtra 431009
              </div>
            </Col>
            <Col>
              <div className="contact-item">
                <FaEnvelopeOpen />
                <h6>EMAIL</h6>
                <p>subhasharihospital123</p>
              </div>
            </Col>
            <Col>
              <div className="contact-item">
                <RiPhoneLine />
                <h6>CALL ANYTIME</h6>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
