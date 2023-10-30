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
                                <h4>About SigmaCare</h4>
                                <h2>Health Commitments</h2>
                                <p>We are ready to provide you with any Medical, health and fitness help as well as prepare a business plan. We are ready to provide you with any Medical, health and fitness help as well as prepare a business plan.</p>
                            </div>
                            <div>
                                <div className="progress_label">
                                    <p>
                                    Successful Operations <span>84%</span>
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
                                    Empathy for Patients <span>78%</span>
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
                                    Hygiene <span>75%</span>
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
                            <div className="sig d-flex">
                                <div>
                                    <h5>Briar Ford</h5>
                                    <p>Briar Ford</p>
                                </div>
                                <img className="img-fluid" src="https://i.ibb.co/9rPhX7r/signature.png" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="progress-img">
                            <img className="img-fluid" src="https://i.ibb.co/3FYfhw2/medi.jpg" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Progress;