import React from 'react';
import Header from '../../Share/Header/Header';
import Footer from '../Footer/Footer';
import Appointment from './Appointment';

const AppointmentHeader = () => {
    return (
        <>
            <Header />
            <Appointment />
            <Footer />
        </>
    );
};

export default AppointmentHeader;