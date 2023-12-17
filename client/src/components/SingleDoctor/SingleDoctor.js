import React, { useEffect, useState } from 'react';
import { Container, ProgressBar, Table } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import { useGetDoctorsQuery } from '../../features/sigmaApi';
// import ContactForEveryPage from '../ContactForEveryPage/ContactForEveryPage';
import Footer from '../Home/Footer/Footer';
import Header from '../Share/Header/Header';
import './SingleDoctor.css';
import axios from '../../utils/axiosConfig';

const SingleDoctor = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
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
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const { id } = useParams();
    const [singleDoctor, setSingleDoctor] = useState(null);

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await axios.get(`/api/doctor/getDoctor/${id}`);
                setSingleDoctor(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchDoctor();
    }, [id]);
    console.log("single doctor",singleDoctor)



    // const doctorsInfo = useGetDoctorsQuery();
    // let doctorsInfo;
    // const fetchDoctor = async () => {
    //     const doctorsInfo = await axios.get("/api/doctor/getAllDoctors");
    // }
    // fetchDoctor();

    // console.log(doctorsInfo.data);

    // useEffect(() => {
    //     const foundDoctor = doctorsInfo?.data?.find(doctors => doctors?._id === id);
    //     setSingleDoctor(foundDoctor);
    // }, [doctorsInfo?.data, id]);

    return (
        <div>
            <Header />
            <div className='single-doctor-header'>
                <div>
                    <Container className='text-center header-text'>
                        <h1>{singleDoctor?.name}</h1>
                    </Container>
                </div>
            </div>
            <div className='single-doctor-body'>
                <Container>
                    <div className='row'>
                        <div className='col-md-4 col-12'>
                            <div className="card doctor-card">
                                <img src={singleDoctor?.photo} className="card-img" alt="..." />
                            </div>

                            <div className='opning-time2'>
                                <div className='service-card-icon2'>
                                    <i className="fas fa-clock fa-3x"></i>
                                </div>
                                <h4 className='time2'>Shifts Avalable</h4>
                                <div className='table-data2'>
                                    <Table>
                                        <tbody>
                                            <tr>
                                            {singleDoctor?.shifts?.map((shift, index) => (
                                                <td key={index}>{shift}</td>
                                            ))}
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            {/* <ContactForEveryPage /> */}
                            <div className="mb-4 d-flex justify-content-center align-items-center ">
                                <NavLink to={`/appointment`}>
                                    <button style={{ marginTop: "2rem auto" }} className="services-btn">
                                        <span>Get Appoinment</span><i className="fas fa-plus btn-icon" style={{background:"#05c9d0"}}></i>
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                        <div className='col-md-8 col-12'>
                            <div className='single-doctor-right'>
                                <h1 className='mt-3'>{singleDoctor?.title}</h1>


                                <div className='row'>
                                    <div className='col-md-6 col-6 HonorsandAwards'>
                                        <h4 className='mb-5'>Honors and Awards</h4>
                                        {Object.entries(singleDoctor?.awards || {}).map(([key, value]) => (
                                            <div key={key} className='row award-setup'>
                                            <div className='col-md-2 col-12'>
                                                <i className="fas fa-award fa-3x"></i>
                                            </div>
                                            <div className='col-md-10 col-12'>
                                                {value}
                                            </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='col-md-6 col-12 Skillset'>
                                        <h4 className='mb-5'>Decription</h4>
                                        <p>{singleDoctor?.description}</p>
                                    </div>
                                    {/* <div className='col-md-6 col-12 Skillset'>
                                        <h4 className='mb-5'>Skillset</h4>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p>Technique</p>
                                            <p>{`${singleDoctor?.percent1}%`}</p>
                                        </div>
                                        <ProgressBar variant='info' now={singleDoctor?.percent1} />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p>Empathy</p>
                                            <p>{`${singleDoctor?.percent2}%`}</p>
                                        </div>
                                        <ProgressBar variant='info' now={singleDoctor?.percent2} />
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p>Operation</p>
                                            <p>{`${singleDoctor?.percent3}%`}</p>
                                        </div>
                                        <ProgressBar variant='info' now={singleDoctor?.percent3} />
                                    </div> */}
                                </div>
                                <div className='row award-setup'>
                                    <div className='col-md-3'>
                                        <h4>Speciality</h4>
                                    </div>
                                    <div className='col-md-9'>
                                        <i className="far fa-star"></i> {singleDoctor?.speciality}
                                    </div>
                                </div>
                                
                                <div className='row award-setup'>
                                    <div className='col-md-3'>
                                        <h4>Education</h4>
                                    </div>
                                    <div className='col-md-9'>
                                    {Object.entries(singleDoctor?.eduLines || {}).map(([key, value]) => (
                                        <div key={key}>
                                            <i className="fas fa-check"></i> {value}
                                            <br /> <br />
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                <div className='row award-setup'>
                                    <div className='col-md-3'>
                                        <h4>Experience</h4>
                                    </div>
                                    <div className='col-md-9'>
                                        <i className="fas fa-file-alt"></i> {singleDoctor?.experience} Years of experience as a {singleDoctor?.speciality}
                                    </div>
                                </div>

                                {/* <div className='single-doctor-right-footer'>
                                    <h6 style={{ letterSpacing: "3px" }}>DOCTORS</h6>
                                    <h2>Recommended Colleague Doctors</h2>
                                    <Slider {...settings}>
                                        {
                                            doctorsInfo?.data?.map(doctor =>
                                                <div key={doctor._id}>
                                                    <div className="card doctor-card">
                                                        <img src={`data:image/*;base64,${doctor?.photo}`} className="card-img" alt="..." />
                                                        <div className="row card-img-overlay">
                                                            <div className='icon-setup'>
                                                                <a href={doctor?.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                                                                <br />
                                                                <a href={doctor?.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                                                                <br />
                                                                <a href={doctor?.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                                            </div>
                                                            <div className='ps-2 mt-auto about-doctor'>
                                                                <NavLink to={`/singleDoctor/${doctor._id}`} className="text-decoration-none">
                                                                    <h4>{doctor?.name}</h4>
                                                                    <h6>{doctor?.title}</h6>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                    </Slider>
                                </div> */}
                                <div className='single-doctor-right-footer'>
                                    <h6 style={{ letterSpacing: "3px" }}>DOCTOR MOTO</h6>
                                    <h2>Health and Wellness For Everyone</h2>
                                    <p>{singleDoctor?.moto}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default SingleDoctor;