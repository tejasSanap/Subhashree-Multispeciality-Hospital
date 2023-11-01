import { Col, Container, Row } from "react-bootstrap";
import "./Progress.css";

const Progress = () => {
  return (
    <section className="progres">
      <Container className="padding-container">
        <Row className="align-items-center" lg={2} sm={1}>
          <Col>
            <div className="progres-info">
              <div className="progres-title">
                <h4>About Subhashree</h4>
                <h2>Health Commitments</h2>
                <p>
                  We are ready to provide you with any Medical, health and
                  fitness help as well as prepare a business plan. We are ready
                  to provide you with any Medical, health and fitness help as
                  well as prepare a business plan.
                </p>
              </div>
              <div>
                <div className="progress_label">
                  <p>
                    Successful Operations <span>90%</span>
                  </p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg_progress"
                    role="progressbar"
                    style={{ width: "90%", backgroundColor: "#2779a7" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div>
                <div className="progress_label">
                  <p>
                    Empathy for Patients <span>85%</span>
                  </p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg_progress"
                    role="progressbar"
                    style={{ width: "85%", backgroundColor: "#2779a7" }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div>
                <div className="progress_label">
                  <p>
                    Hygiene <span>98%</span>
                  </p>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar bg_progress"
                    role="progressbar"
                    style={{ width: "98%", backgroundColor: "#2779a7" }}
                    aria-valuenow="98"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              
            </div>
          </Col>
          <Col>
            <div className="progress-img">
              <img
                className="img-fluid"
                src="https://i.ibb.co/3FYfhw2/medi.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Progress;
