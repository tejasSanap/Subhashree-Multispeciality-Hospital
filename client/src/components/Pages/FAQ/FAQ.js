import React, { useEffect, useState } from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Share/Header/Header';
import './FAQ.css'

const FAQ = () => {
    const [pageFaq, setPageFaq] = useState(0)
    const handleHight = () => setPageFaq(window.pageYOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleHight)
    }, [])
    return (
        <>
        <Header/>
            <div style={{ background: `url(https://i.ibb.co/9nmC6s9/ki-14-1.jpg)` }} className="backcrumb-my ">

                <nav aria-label="breadcrumb">
                    <h3>FAQ</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>

                        <li className="breadcrumb-item active" aria-current="page">FAQ</li>
                    </ol>
                </nav>
            </div>
            <div className="faq padding-container">
                <h4 style={{ transform: `translateX(${pageFaq * 1.6}px)`, paddingTop: "30px" }}>FAQ</h4>
                <Container>

                    <Row>
                        <div className="title text-center">
                            <h6>FAQ</h6>
                            <h3>Frequently Asked Questions</h3>
                        </div>
                    </Row>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Can I trust my tap water?</Accordion.Header>
                            <Accordion.Body>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Is my microwave giving me cancer?</Accordion.Header>
                            <Accordion.Body>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How long am I contagious when I have the flu or a cold?</Accordion.Header>
                            <Accordion.Body>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How to book an appointment?</Accordion.Header>
                            <Accordion.Body>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What is heart surgery?</Accordion.Header>
                            <Accordion.Body>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>What is Lasik Treatment?</Accordion.Header>
                            <Accordion.Body>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>What are bed charges?</Accordion.Header>
                            <Accordion.Body>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Which vegetables to eat?</Accordion.Header>
                            <Accordion.Body>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>
            <Footer/>
        </>
    );
};

export default FAQ;