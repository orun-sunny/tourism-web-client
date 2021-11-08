import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
// import "animate.css/animate.min.css";
//import ScrollAnimation from 'react-animate-on-scroll';

import './Bloges.css';

const Bloges = () => {
    return (
        <div className="packages-section">
            <Fade left>
                <Container>
                    <div className="packages-section-head">

                        {/* <ScrollAnimation animateIn="fadeIn">
                        Some Text
                    </ScrollAnimation> */}
                        <h5>Latest Blog</h5>
                        <h2>Stay Updated </h2>
                    </div>
                    <Row>


                        <Col md={4}>
                            <Fade left>
                                <div className="package-cart">


                                    <div className="cart-img">
                                        <img className="w-100" src="https://www.walldevil.co/wallpapers/p10/stream-mountain-view-nature-view-nature-photography-4k-wallpaper-free-photo-snow-capped-mountain-free-nature-wallpaper-outdoor.jpg" alt="" />
                                    </div>
                                    <div className="package-info">
                                        <h5><i className="fas fa-user"></i> Mira</h5>
                                        <h5> Comments <i className="fas fa-comment"></i></h5>
                                    </div>
                                    <h3 className="package-title" >jeans </h3>
                                    <div className="cart-discription">
                                        <p>When she reach the Line Lane.Pityful a rethoric question ran over her cheek, then she continued her way</p>
                                    </div>

                                    <div className="packages-section-head m-0 d-flex justify-content-between">
                                        {/* <h5 className="m-0 p-0">1 April, 2021</h5> */}
                                        <button className="main-button">See Details</button>
                                        <button className="main-button">Vote</button>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={4}>
                            <Fade left>
                                <div className="package-cart">
                                    <div className="cart-img">
                                        <img className="w-100" src="https://i.pinimg.com/736x/b1/ce/d2/b1ced24ab3164c28ec5954f60a7dd516--sky-hd-landscape-wallpapers.jpg" alt="" />
                                    </div>
                                    <div className="package-info">
                                        <h5><i className="fas fa-user"></i> Jems</h5>
                                        <h5> Comments <i className="fas fa-comment"></i></h5>
                                    </div>
                                    <h3 className="package-title" >Dina islam </h3>
                                    <div className="cart-discription">
                                        <p>When she reach the Line Lane.Pityful a rethoric question ran over her cheek, then she continued he, sunt animi omnis assumenda!</p>
                                    </div>

                                    <div className="packages-section-head m-0 d-flex justify-content-between">
                                        {/* <h5 className="m-0 p-0">1 April, 2021</h5> */}
                                        <button className="main-button">See Details</button>
                                        <button className="main-button">Vote</button>
                                    </div>
                                </div>
                            </Fade>
                        </Col>
                        <Col md={4}>
                            <div className="package-cart  " data-aos="fade-up">
                                <div className="cart-img">
                                    <img className="w-100" src="https://cache.desktopnexus.com/thumbseg/2248/2248506-bigthumbnail.jpg" alt="" />
                                </div>
                                <div className="package-info">
                                    <h5><i className="fas fa-user"></i>  Jems</h5>
                                    <h5>Comments <i className="fas fa-comment"></i></h5>
                                </div>
                                <h3 className="package-title" >james </h3>
                                <div className="cart-discription">
                                    <p>When she reach the Line Lane.Pityful a rethoric question ran over her cheek, then she continued her way</p>
                                </div>

                                <div className="packages-section-head m-0 d-flex justify-content-between">
                                    {/* <h5 className="m-0 p-0">1 April, 2021</h5> */}
                                    <button className="main-button">See Details</button>
                                    <button className="main-button">Vote</button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container >
            </Fade>
        </div >
    );
};

export default Bloges;