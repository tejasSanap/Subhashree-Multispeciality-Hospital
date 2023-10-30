import React from 'react';
import Footer from '../../../Home/Footer/Footer';
import Header from '../../../Share/Header/Header';
import History from '../History';
import Patner from './Patner/Patner';
import Progress from './Progress/Progress';

const AboutHome = () => {
    return (
        <div>
            <Header />
            <Progress />
            <History />
            <Patner />
            <Footer />
        </div>
    );
};

export default AboutHome;