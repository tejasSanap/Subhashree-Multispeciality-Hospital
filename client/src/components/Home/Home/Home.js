import React from "react";
import AboutSub from "../AboutSub/AboutSub";
import Testimonial from "../Testimonial/Testimonial";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Doctors from "../Doctors/Doctors";
import Services from "../Services/Services";
import Header from "../../Share/Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AboutSub />
      <ChooseUs />
      <Services />
      <Doctors />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
