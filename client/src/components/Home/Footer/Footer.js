import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
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
  // const admin = useSelector((state) => state.admin.admin);
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} lg={4}>
            <div className="footer-logo">
              <div className="Header-icon">
                <img src="/Subhashree-logo.png" className="w-20" alt="logo" />
                <div className="title">
                  <div className="title-upper">Subhashree</div>
                  <div className="title-below">Hospital</div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={4}>
            <div className="footer-menu-heading">
              <h3 style={{ fontSize: "24px" }}>Useful Links</h3>
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
          <Col sm={6} lg={4}>
            <div className="footer-menu-heading">
              <h3 style={{ fontSize: "24px" }}>Reach Us</h3>
            </div>
            <ul className="reach-us">
              <li>
                <a
                  style={{ fontSize: "15px" }}
                  rel="noreferrer"
                  target="_blank"
                  href="tell:01629094984"
                >
                  <FaPhone />
                  +91 072493 71093
                </a>
              </li>
              <li>
                <a
                  style={{ fontSize: "15px" }}
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:contact@subhashreehospital.com"
                >
                  <FaEnvelope />
                  @subhashreehospital.com
                </a>
              </li>
              <li style={{ fontSize: "15px" }}>
                <FaMapMarkerAlt />
                First Floor, Durganand Heights, Pundlik Nagar, Aurangabad,
                Maharashtra 431009
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
                  {/* <FaTwitter /> */}
                  <i
                    class="fa-brands fa-x-twitter"
                    style={{ color: "#fafafa" }}
                  ></i>{" "}
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
              Copyright© 2023 Subhashree All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
