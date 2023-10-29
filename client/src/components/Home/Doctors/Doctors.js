import React, { useEffect, useState } from 'react';
import './Doctor.css';
import DoctorsSlider from './DoctorSlide/DoctorsSlider';

const Doctors = () => {
  const [pageDoctors, setPageDoctors] = useState(0);
  const handleHight = () => setPageDoctors(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleHight);
  }, []);
  return (
    <div className="doctors">
      <h3 style={{ transform: `translateX(${(pageDoctors - 2300) * 0.5}px)` }}>
        OUR DOCTORS
      </h3>
      <div className="doctor-section text-center">
        <h5 style={{ letterSpacing: '3px' }}>Doctors</h5>
        <h1>
          Our outstanding doctors <br /> <span> are active to help you!</span>
        </h1>
        <DoctorsSlider />
      </div>
    </div>
  );
};

export default Doctors;
