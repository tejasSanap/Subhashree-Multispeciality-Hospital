import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./AboutSigma.css";

const AboutSigma = () => {
  /*
    const [pageHight, setPageHight] = useState(0)
    const handleHight = () => setPageHight(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleHight)
    }, [])
    */
  return (
    <section className="sigma-about-fild">
      <div className=" container padding-container ">
        <div className="row align-items-center pt-3">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <p className="about-heding">About Subhashree Hospital</p>
            <h3 className="welcome-msg">Welcome to
              <div className="bold-welcome">
                 Subhashree Hospital
              </div>
            </h3>
            <p className="content">
              Committed to Providing Exceptional Care, Supporting Your Health
              and Wellbeing Every Step of the Way.
            </p>
            <div className="opning-time">
              <img
                // src="https://i.ibb.co/FB7CCS9/watch.png"
                src="https://i.pinimg.com/originals/03/fd/28/03fd284948387458641483ef58822e3c.png"
                alt=""
                className="watch"
              />
              <h4 className="time">Opening Time</h4>
              <div className="table-data">
                <Table className="text-white">
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: "#2779a7" }}>
                        Monday-Friday
                      </td>
                      <td style={{ backgroundColor: "#2779a7" }}>
                        11:00 - 22:00
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: "#2779a7" }}>Saturday</td>
                      <td style={{ backgroundColor: "#2779a7" }}>
                        10:00 – 22:00
                      </td>
                    </tr>
                    <tr>
                      <td style={{ backgroundColor: "#2779a7" }}>Sunday</td>
                      <td style={{ backgroundColor: "#2779a7" }}>
                        10:00 – 23:00
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ps-5">
            <ul>
              <li>
                <i
                  style={{ fontSize: "16px" }}
                  className="far fa-check-square checkbox-icon"
                ></i>
                Treats minor illnesses
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Answers health questions
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Conducts health checkups
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Performs routine health tests
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Orthopaedic surgeon
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Endocrinologist
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Cardiothoracic surgeon
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Specialty physicians
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Best in class equipment's
              </li>
              <li>
                <i className="far fa-check-square checkbox-icon"></i>
                Answers health questions
              </li>
            </ul>

            <br />
          </div>
          <div className="col-lg-4 col-md-12 d-lg-block d-none col-sm-12">
            <div
              className="img-about w-100"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/8442147/pexels-photo-8442147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
              }}
            >
              {/* <img src="{doctor}" alt="" className='img-fluid' /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSigma;
