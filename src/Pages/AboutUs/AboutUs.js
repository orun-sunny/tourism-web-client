import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './AboutUs.css'
import sectionBg from "./../../assets/sectionBg.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

const AboutUs = () => {
    return (
        <div
            style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}  //./assets/sectionBg.png";
            className="py-5"
        >
            <Container>
                <Zoom>
                    <h2 className="text-center text-white mb-4">
                        WELCOME TO Tour hobe
                    </h2>
                </Zoom>
                <Row>
                    <Col md className="pe-3">
                        <Bounce bottom>
                            <h5 className="text-white">About Us</h5>
                            <p className="text-muted">
                                "We are delighted to work with My Online Tourist, a digital-first partner who will provide important tourism to our members."
                            </p>
                            <p className="text-muted">
                                The tourism and hospitality industry is one of the leading global economic activities and the largest employer worldwide. The WTTC (World Travel and Tourism Council) has, in its long-term forecast, predicted the number of international travelers alone doubling from 700 million to 1.6 billion shortly. According to WTTC, in 2016, travel & tourism directly supported 317,500 jobs (5.4% of total employment). Tourism employment is expected to rise by 2.4% pa to 410,000 jobs (5.9% of total employment) in 2027
                            </p>
                        </Bounce>
                    </Col>
                    <Col md className="pe-3">
                        <Bounce bottom>
                            <h5 className="text-white">Our Vision</h5>
                            <p className="text-muted">
                                We analyse data from key tourism sectors to monitor and measure the industry's performance and its alignment with the priorities of the National Tourism Plan. We leverage expertise within our focus areas and engage in strategic partnerships with the government, the private sector and other stakeholders to grow the island's tourism industry and strengthen Bermuda's overall economy.
                            </p>
                            <h5 className="text-white">Our Mission</h5>
                            <p className="text-muted">

                            </p>
                        </Bounce>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md>
                        <Bounce bottom>
                            <h5 className="text-white">Sign up for our monthly newsletter</h5>
                            <p className="text-muted">
                                Be the first to know about news and updates.We never share you
                                mail with others. Trust us!
                            </p>
                        </Bounce>
                    </Col>
                    <Col md className="d-flex align-items-center">
                        <Bounce bottom>
                            <Form className="w-100">
                                <Form.Label className="text-white">
                                    Leave your mail below
                                </Form.Label>
                                <Form.Group
                                    className="d-flex text-white"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Control
                                        style={{ background: "transparent", color: "white" }}
                                        className="py-2 rounded-0"
                                        type="email"
                                        placeholder="Enter email"
                                    />
                                    <button
                                        style={{ width: "120px" }}
                                        className="btn rounded-0 btn-primary"
                                    >
                                        SIGN UP
                                    </button>
                                </Form.Group>
                            </Form>
                        </Bounce>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default AboutUs;