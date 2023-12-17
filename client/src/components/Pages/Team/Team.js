import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import Header from "../../Share/Header/Header";
import SingleTeam from "./SingleTeam";
import "./Team.css";
import specializationBanner from '../../../images/specialization_banner.jpg';

const Team = () => {
  const [pageTeam, setPageTeam] = useState(0);
  const handleHight = () => setPageTeam(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleHight);
  }, []);
  return (
    <>
      <Header />
      <div style={{ background: `url(${specializationBanner})` }} className="backcrumb-my ">
        <nav aria-label="breadcrumb">
          <h3>OUR TEAM</h3>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              OUR TEAM
            </li>
          </ol>
        </nav>
      </div>
      <div className="team padding-container">
        <h4
          style={{
            transform: `translateX(${pageTeam * 1.6}px)`,
            paddingTop: "30px",
          }}
        >
          OUR TEAM
        </h4>
       <SingleTeam />
      </div>
      <Footer />
    </>
  );
};

export default Team;
