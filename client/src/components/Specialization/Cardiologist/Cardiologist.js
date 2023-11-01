import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Share/Header/Header";

const Cardiologist = () => {
  return (
    <>
      <Header />
      <div className="specialization_container">
        <div className="specialization_banner">
          <h2>Cardiologist</h2>
          <div className="specialization_navigation">
            <Link to="/">Home </Link>
            <span>&#62;</span>
            <Link to="/specialization/cardiologist"> Cardiologist</Link>
          </div>
        </div>
        <div className="container">
          <div className=" inner_specialization">
            <div className="specialization_left ">
              <div className="special_img">
                <img src="https://i.ibb.co/GpD9kD0/blog-5.jpg" alt="" />
              </div>
              <div className="department">
                <h5>DEPARTMENT</h5>
                <h2>
                  <span>Cardiology </span> Interventional
                </h2>
                <p>
                  A cardiologist is a doctor that deals with the cardiovascular
                  system. This means he or she treats any abnormality in our
                  blood vessels and heart. This can include heart disease or
                  condition which requires diagnosis and treatment.
                </p>
              </div>
              <div className="special_services_point">
                <div className="services_point_left">
                  <p>
                    <i className="fas fa-check"></i> Treats minor illnesses
                  </p>
                  <p>
                    <i className="fas fa-check"></i> Answers health questions
                  </p>
                  <p>
                    <i className="fas fa-check"></i> Conducts health checkups
                  </p>
                </div>
                <div className="services_point_right">
                  <p>
                    <i className="fas fa-check"></i> Specialty physicians
                  </p>
                  <p>
                    <i className="fas fa-check"></i> Performs routine health
                    tests
                  </p>
                  <p>
                    <i className="fas fa-check"></i> List Items
                  </p>
                </div>
              </div>
              {/* progress bar */}
              <div className="operation_progress_section">
                <div className="operation_done specialization_services">
                  <h2>1000 +</h2>
                  <h3>Operations done</h3>
                  <p>
                    There is a lot to do in little time. But the stakes are
                    high.
                  </p>
                </div>
                <div className="operation_progress">
                  <div>
                    <div className="progress_label">
                      <p>
                        Immunotherapy <span>91%</span>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg_progress"
                        role="progressbar"
                        style={{ width: "91%" }}
                        aria-valuenow="91"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        id="pp"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="progress_label">
                      <p>
                        Hormone therapy <span>84%</span>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg_progress"
                        role="progressbar"
                        style={{ width: "84%" }}
                        aria-valuenow="84"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="progress_label">
                      <p>
                        Targeted drug therapy <span>75%</span>
                      </p>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar bg_progress"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tips_and_info">
                <div className="department">
                  <h5>TIPS & INFO</h5>
                  <h3>Subhashree Tips for Healthy Children and Families</h3>
                  <p>
                    Raising a family isn’t always easy. You are busy, and so are
                    your children. There is a lot to do in little time. But the
                    stakes are high. Today, many kids are overweight or obese. A
                    healthy, active lifestyle can help maintain weight. It also
                    can prevent health issues, such as diabetes, heart disease,
                    asthma, and high blood pressure.
                  </p>
                </div>
              </div>
              <hr />
              <div className="accordion">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Can I trust my tap water?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item's accordion body.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Is my microwave giving me cancer?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the second
                        item's accordion body. Let's imagine this being filled
                        with some actual content.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How long am I contagious when I have the flu or a cold?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the{" "}
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="specialization_right ">
              <div className="specialization_nav">
                <h3>Specialization</h3>
                <ul>
                  <li>
                    <Link to="/specialization/oncologist">
                      <span>Oncologist</span>
                      <span className="fas fa-plus"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialization/neurologist">
                      <span>Neurologist</span>
                      <span className="fas fa-plus"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialization/ent-specialist">
                      <span>ENT specialist</span>
                      <span className="fas fa-plus"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialization/cardiologist">
                      <span>Cardiologist</span>
                      <span className="fas fa-plus"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialization/audiologist">
                      <span>Audiologist</span>
                      <span className="fas fa-plus"></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/specialization/psychiatrists">
                      <span>Psychiatrists</span>
                      <span className="fas fa-plus"></span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="specialization_timeTable">
                <i className="far fa-clock"></i>
                <h3>Opening Time</h3>
                <div className="special_time">
                  <div>
                    <span>Monday – Friday</span> <span>6.00 – 7:00 pm</span>
                  </div>
                  <div>
                    <span>Saturday</span> <span>9.00 – 8.00 pm</span>
                  </div>
                  <div>
                    <span>Sunday</span> <span>10.00 – 9.00 pm</span>
                  </div>
                </div>
              </div>
              <div className="specialization_services">
                <img src="" alt="" />
                <h3>Subhashree Services</h3>
                <div className="special_address">
                  <p>
                    <span>Call</span> : +123456789
                  </p>
                  <p>
                    <span>Mail</span> : support@example.com
                  </p>
                  <p>
                    <span>Address</span> : 1234 North Avenue Luke Lane, South
                    Bend, IN 360001
                  </p>
                </div>
                <div className="special_social">
                  <Link to="/">
                    <i className="fab fab fa-facebook"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link to="/">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cardiologist;
