import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./History.css";

const History = () => {
  const [pageHistory, setPageHistory] = useState(0);
  const [history, sethistory] = useState([]);
  const handleHight = () => setPageHistory(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleHight);
  }, []);
  useEffect(() => {
    fetch("./history.json")
      .then((res) => res.json())
      .then((data) => sethistory(data));
  }, []);
  console.log(history);

  return (
    <>

      <section className="history padding-container">
        <h4
          style={{
            transform: `translateX(${pageHistory * 2}px)`,
            paddingTop: "30px",
          }}
        >
          HISTORY
        </h4>
        <Container>
          <Row>
            <div className="title text-center">
              <h6>HISTORY</h6>
              <h3>OUR HISTORY</h3>
            </div>
          </Row>
          <Row className="align-items-center justify-content-center  gy-5">
            {history?.map((item) => (
              <>
                <Col sm={2}>
                  <div className="img-div">
                    <img className="img-fluid" src={item?.img} alt="" />
                  </div>
                </Col>
                <Col sm={2} className="border-div h-100">
                  <h3>{item?.year}</h3>
                </Col>
                <Col sm={8}>
                  <p style={{ fontSize: "18px" }}>{item?.text}</p>
                </Col>
                <hr className="mt-5  mb-0 p-0" />
              </>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default History;
