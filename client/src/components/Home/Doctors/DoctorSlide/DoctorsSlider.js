import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./DoctorsSlide.css";
import { NavLink } from "react-router-dom";
import axios from "../../../../utils/axiosConfig";
// import { useGetDoctorsQuery } from '../../../../features/sigmaApi';

const DoctorsSlider = () => {
  const [doctorInfo, setDoctorInfo] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await axios.get("/api/doctor/getAllDoctors");
      setDoctorInfo(res.data);
    };
    fetchDoctors();
  }, []);

  console.log("doc info", doctorInfo);
  // const doctorInfo = useGetDoctorsQuery();
  // console.log(doctorInfo.data);

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* <h1>{doctorInfo[0].name}</h1> */}
      <Container className="mt-5 mb-5">
        <Slider {...settings}>
          {doctorInfo?.map((doctor) => (
            <div key={doctor._id}>
              <div className="card doctor-card">
                <img src={doctor.photo} style={{maxHeight: "fit-content"}} className="card-img" alt="..." />
                <p
                  style={{
                    color: "#2779a7",
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                >
                  {doctor.name}
                </p>
                <div className="row card-img-overlay">
                  <div className="mt-auto about-doctor">
                    <NavLink
                      to={`/singleDoctor/${doctor?._id}`}
                      className="text-decoration-none"
                    >
                      <h2
                        style={{
                          color: "#2779a7",
                          textTransform: "capitalize",
                        }}
                      >
                        {doctor?.name}
                      </h2>
                      <h5
                        style={{
                          color: "#2779a7",
                          textTransform: "capitalize",
                        }}
                      >
                        {doctor.title}
                      </h5>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default DoctorsSlider;
