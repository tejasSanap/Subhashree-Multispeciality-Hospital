import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ChooseUs.css";

const ChooseUs = () => {
  const [pageUs, setPageUs] = useState(0);
  const handleHight = () => setPageUs(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleHight);
  }, []);

  return (
    <div className="section chooseUs-Fild">
      <h2 style={{ transform: `translateX(${(pageUs - 1000) * 0.5}px)` }}>
        WHY CHOOSE US
      </h2>
      <Container className="why-choose padding-container">
        <div className="outer-why-content row">
          <div className="why-content col-lg-12">
            <p className="why-choose-pragraph">why choose us</p>
            <h1 className="Turst-people">Why Patients Rely on</h1>
            <h4 className="Treatment">Our Treatment</h4>
            <p className="sigma-text">
              Discover the confidence that comes from our history of successful
              treatment and our unwavering dedication to your health and
              well-being.
            </p>
          </div>
        </div>

        <div className=" row mt-3">
          <div className="peaper col-lg-12">
            <div className="row gy-5 gx-4">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="paper-item">
                  <div className="paper-hover">
                    <img
                      src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740&t=st=1698787552~exp=1698788152~hmac=332c5ad16d8c6687955fab56f8c0aa4dc35151bbca01ab97a50ec11b0662ba8b"
                      alt=""
                      className="image-icon"
                    />

                    <h5>Qualified Doctors</h5>
                    <p className="content-pragraph">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin.
                    </p>
                    <button className="read-btn">
                      READ MORE <i className="fas fa-plus btn-red"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="  col-lg-4 col-md-6 col-sm-12 ">
                <div className="paper-item">
                  <div className="paper-hover">
                    <img
                      src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740&t=st=1698787552~exp=1698788152~hmac=332c5ad16d8c6687955fab56f8c0aa4dc35151bbca01ab97a50ec11b0662ba8b"
                      alt=""
                      className="image-icon"
                    />

                    <h5>Trusted Treatment</h5>
                    <p className="content-pragraph">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin.
                    </p>
                    <button className="read-btn">
                      READ MORE <i className="fas fa-plus btn-red"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="paper-item">
                  <div className="paper-hover">
                    <img
                      src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=740&t=st=1698787552~exp=1698788152~hmac=332c5ad16d8c6687955fab56f8c0aa4dc35151bbca01ab97a50ec11b0662ba8b"
                      alt=""
                      className="image-icon"
                    />

                    <h5>24/7 Services</h5>
                    <p className="content-pragraph">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin.
                    </p>
                    <button className="read-btn">
                      READ MORE <i className="fas fa-plus btn-red"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
