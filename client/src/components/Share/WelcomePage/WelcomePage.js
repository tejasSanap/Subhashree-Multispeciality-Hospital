import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./WelcomePage.css"

const WelcomePage = () => {
    return (
        <section className="welcome-section">
            <Container>
            <Row>
                <Col>
                    <div className="wel-img">
                       <h1>Welcome To SigmaCare</h1> 
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    );
};

export default WelcomePage;