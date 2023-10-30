import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import Testimonial from "../Home/Testimonial/Testimonial";
import Header from "../Share/Header/Header";
import Footer from "../Home/Footer/Footer";

const Service = () => {
  return (
    <>
      <Header />
      <div
        style={{ background: `url(https://i.ibb.co/nkk3JJV/specialization-banner.jpg)` }}
        className="backcrumb-my mb-5"
      >
        <nav aria-label="breadcrumb">
          <h3>Service</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <span className="sr-nav">&#62;</span>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/service">Service</Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container mt-5 pb-5 mb-2">
        <h6 className="text-center pt-3 sr">services</h6>
        <h1 className="text-center pt-3 kivi">
          SigmaCare <span>Medical Services</span>
        </h1>
        <p className="text-center pt-3 para mb-3">
          It is a long established fact that a reader will be distracted by the
          readable <br />
          content of a page when looking at its layout.
        </p>
        <div className="services">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src="https://i.ibb.co/DWFNsJ3/Health-Check-Up.png" alt="" />
                </div>
                <h4 className="text-center">Health CheckUp</h4>
                <p className="para text-center">
                  A usual full-body health check-up is made up of blood and
                  urine tests lungs function tests, and cardiac test.
                </p>
                <Link to="/appointment" className="service-btn">
                <span>Appointment</span> <i className="fas fa-plus"></i>
              </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src="https://i.ibb.co/FKtN5rj/X-Ray.png" alt="" />
                  <h4 className="text-center">X-Ray</h4>
                  <p className="para text-center">
                    An X-ray is an imaginaring test that produces pictures of
                    the organs, tissues, and bones of the body.
                  </p>
                  <Link to="/appointment" className="service-btn">
                <span>Appointment</span> <i className="fas fa-plus"></i>
              </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src="https://i.ibb.co/XLKn1KF/Blood-Bank.png" alt="" />
                </div>
                <h4 className="text-center">Blood Bank</h4>
                <p className="para text-center">
                  Blood banking is the process that takes place in the lab to
                  make sure that donated blood, or blood products
                </p>
                <Link to="/appointment" className="service-btn">
                <span>Appointment</span> <i className="fas fa-plus"></i>
              </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src="https://i.ibb.co/xm4wKc6/Laboratory.png" alt="" />
                </div>
                <h4 className="text-center">Laboratory</h4>
                <p className="para text-center">
                  Clinical lab services are tests on specimens from the body
                  that are used to diagnose and treat patients.
                </p>
                <Link to="/appointment" className="service-btn">
                <span>Appointment</span> <i className="fas fa-plus"></i>
              </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src="https://i.ibb.co/4fCm8JX/Outdoor-Checkup.png" alt="" />
                </div>
                <h4 className="text-center">Outdoor Checkup</h4>
                <p className="para text-center">
                  Clinics / Hospitals of Outdoor Checkup Services, Emergency
                  Care Service, Postoperative Care Service.
                </p>
                <Link to="/appointment" className="service-btn">
                <span>Appointment</span> <i className="fas fa-plus"></i>
              </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <div className="service mb-3">
                <div>
                  <img className="img-fluid" src="https://i.ibb.co/3W8XMwT/Ambulance.png" alt="" />
                </div>
                <h4 className="text-center">Ambulance</h4>
                <p className="para text-center">
                  Emergency ambulance services have dedicated staff to handle
                  medical conditions at any time anywhere.
                </p>
                <Link to="/appointment" className="service-btn">
                <span>Appointment</span> <i className="fas fa-plus"></i>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <Footer />
    </>
  );
};

export default Service;
