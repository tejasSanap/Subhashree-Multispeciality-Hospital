import React, { useEffect, useState } from "react";
import "./Services.css";
import { Card, CardGroup, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [pageServices, setPageServices] = useState(0);
  const handleHight = () => setPageServices(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleHight);
  }, []);
  console.log(pageServices - pageServices + 1);
  return (
    <div className="our-service mb-5" style={{ backgroundColor: "#FDF4F4" }}>
      <h3
        style={{
          transform: `translateX(${(pageServices - 1500) * 0.5}px)`,
          zIndex: 1,
        }}
      >
        OUR SERVICE
      </h3>
      <Container className="service-section">
        <Row className="g-0">
          <Col className="col-12 col-md-7">
            <Card className="service-left border-0 rounded-0">
              <Card.Body>
                <h6 style={{ letterSpacing: "3px" }}>SERVICES</h6>
                <h1>
                  We Provide <br /> <span> Medical Services</span>
                </h1>
                <p className="text-secondary lh-2 mt-3">
                  It is a long established fact that a reader will be distracted
                  by the <br /> readable content of a page when looking at its
                  layout.
                </p>
                <NavLink to="/service">
                  <button className="services-btn mt-5 mb-5">
                    <span>Services</span>
                    <i className="fas fa-plus btn-icon"></i>
                  </button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-12 col-md-5">
            <Card className="service-right border-0 rounded-0">
              <img
                variant="top"
                alt="servicePhoto"
                src="https://i.ibb.co/JKW8S58/ki-020.png"
              />
            </Card>
          </Col>
        </Row>

        <CardGroup className="service-card">
          <Card className="service-first-card rounded-0">
            <div className="service-card-icon">
              <i className="fas fa-users fa-3x"></i>
            </div>
            <Card.Body>
              <h2>Family Consultation</h2>
              <Card.Text className="mt-4 mb-4 text-secondary">
                It is a long established fact that a will be distracted by the
                readable content of a page looking at its layout.
              </Card.Text>
              {/* <Nav.Link className='read-more-link'>
                                APPOINTMENT <i className="fas fa-plus"></i>
                            </Nav.Link> */}
            </Card.Body>
          </Card>
          <Card className="service-middle-card rounded-0">
            <div className="service-card-icon">
              <i className="fas fa-notes-medical fa-3x"></i>
            </div>
            <Card.Body>
              <h2>Home Health Services</h2>
              <Card.Text className="mt-4 mb-4 text-secondary">
                It is a long established fact that a will be distracted by the
                readable content of a page looking at its layout.
              </Card.Text>
              {/* <Nav.Link className='read-more-link'>
                                APPOINTMENT <i className="fas fa-plus"></i>
                            </Nav.Link> */}
            </Card.Body>
          </Card>
          <Card className="border-0 rounded-0">
            <div className="service-card-icon">
              <i className="fas fa-thumbs-up fa-3x"></i>
            </div>
            <Card.Body>
              <h2>Minor Procedures</h2>
              <Card.Text className="mt-4 mb-4 text-secondary">
                It is a long established fact that a will be distracted by the
                readable content of a page looking at its layout.
              </Card.Text>
              {/* <Nav.Link className='read-more-link'>
                                APPOINTMENT <i className="fas fa-plus"></i>
                            </Nav.Link> */}
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Services;
