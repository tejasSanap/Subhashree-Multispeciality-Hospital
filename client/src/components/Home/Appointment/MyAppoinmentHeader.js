import React from 'react';
import Header from '../../Share/Header/Header';
import Footer from '../Footer/Footer';
import Appointment from './Appointment';
import MyAppointment from './MyAppointment';
// import MyAppointment from './MyAppointment';

const MyAppointmentHeader = () => {
    return (
        <>
            <Header />
            {/* <Appointment /> */}
            {/* <MyAppointment /> */}
            <MyAppointment />
            <Footer />
        </>
    );
};

export default MyAppointmentHeader;