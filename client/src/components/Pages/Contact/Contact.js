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

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    console.log(form.current);
    e.preventDefault();
    emailjs.sendForm(
      "service_5fctlnm",
      "template_c9ss9cm",
      form.current,
      "user_cKgbE80VqOVlLKlhO7S97"
    )
      .then(
        (result) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been Send',
            showConfirmButton: false,
            timer: 1500
          })
        },
        (error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something worng',
            showConfirmButton: false,
            timer: 1500
          })
        }
      );
  };

  return (
    <>
      <Header />
      <div style={{ background: `url(https://i.ibb.co/9nmC6s9/ki-14-1.jpg)` }} className="backcrumb-my ">
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
                <p>1234 North Avenue Luke, South Bend, IN 360001</p>
              </div>
            </Col>
            <Col>
              <div className="contact-item">
                <FaEnvelopeOpen />
                <h6>EMAIL</h6>
                <p>sigmacare2022@gmail.com</p>
              </div>
            </Col>
            <Col>
              <div className="contact-item">
                <RiPhoneLine />
                <h6>CALL ANYTIME</h6>
                <p>+8801629094984</p>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="padding-container">
            <div className="contact-title">
              <h6>JUST A CALL AWAY</h6>
              <h2>
                <strong>We'd love to</strong> hear from you!
              </h2>
              <p>
                We are here and always ready to help you. Let us know how we
                serve you and we’ll get back within no time.
              </p>
            </div>
          </Row>
          <form ref={form} onSubmit={sendEmail}>
            <Row className="g-4 px-0 mx-0 px-lg-5 mx-lg-5">
              <Col xs={12} md={6}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                />
              </Col>
              <Col xs={12} md={6}>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  required
                />
              </Col>
              <Col xs={12} md={6}>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  required
                />
              </Col>
              <Col xs={12} md={6}>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </Col>
              <Col xs={12}>
                <textarea
                  rows="7"
                  placeholder="Your Message"
                  name="message"
                  required
                />
              </Col>
              {/* <Col xs={12} md={6}>
                                <input type="text" placeholder='First Name' {...register("FirstName", { required: true, maxLength: 80 })} />
                                {errors.FirstName && errors.FirstName.type === "required" && <span className='text-danger pt-2  d-inline-block'>First Name is required</span>}
                            </Col>
                            <Col xs={12} md={6}>
                                <input type="text" placeholder='Last Name' {...register("LastName", { required: true, maxLength: 100 })} />
                                {errors.LastName && errors.LastName.type === "required" && <span className='text-danger pt-2  d-inline-block'>Last Name is required</span>}

                            </Col>
                            <Col xs={12} md={6}>
                                <input type="number" placeholder='Phone Number ' {...register("MobileNumber", { required: true, minLength: 6, maxLength: 12 })} />
                                {errors.MobileNumber && errors.MobileNumber.type === "required" && <span className='text-danger pt-2  d-inline-block'>Phone Number is required</span>}
                                {errors.MobileNumber && errors.MobileNumber.type === "maxLength" && <span className='text-danger pt-2  d-inline-block'>Phone Number must be 12 Digit</span>}
                                {errors.MobileNumber && errors.MobileNumber.type === "minLength" && <span className='text-danger pt-2  d-inline-block'>Phone Number at least 6 Digit</span>}
                            </Col>
                            <Col xs={12} md={6}>
                                <input type="email" placeholder='Email Address' {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                {errors.Email && errors.Email.type === "required" && <span className='text-danger pt-2  d-inline-block'>Email Address is required</span>}
                                {errors.LastName && errors.LastName.type === "pattern" && <span className='text-danger pt-2  d-inline-block'>Please provide a valide Email </span>}
                            </Col>
                            <Col xs={12}>
                                <textarea rows="7" placeholder='Your Message' {...register("Message", { required: true, maxLength: 1000 })} />
                                {errors.Message && errors.Message.type === "required" && <span className='text-danger pt-2  d-inline-block'>Message is required</span>}
                                {errors.Message && errors.Message.type === "maxLength" && <span className='text-danger pt-2  d-inline-block'>Message text overloaded</span>}
                            </Col> */}
              <button type="submit" className="header-btn btn-hover">
                Sent Message
              </button>
            </Row>
          </form>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
