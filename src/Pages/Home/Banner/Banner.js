import React from 'react';
import './Banner.css';
import { ButtonGroup, Carousel, Container, Form, Button, Row, InputGroup } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce'
// import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import { fadeOutEnabled } from 'react-reveal/globals';




const Banner = () => {
    return (

        <div>



            <Carousel fade>
                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/travelo/img/banner/xbanner3.png.pagespeed.ic.Q9oCO7T4OK.jpg"
                        alt="First slide"
                    />


                    <Carousel.Caption>
                        <div className="mb-5 p-8 align-item-center">
                            <Bounce left>
                                <h1>Discover the world</h1>
                            </Bounce>


                            <p></p>
                            <button className="main-button">Get your tour package</button>
                        </div>



                        <Fade left>
                            <p>Discover Your Favorite Place with Us</p>
                        </Fade>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/travelo/img/banner/xbanner2.png.pagespeed.ic.XXlHdbyWF8.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="mb-5 p-8 align-item-center">

                            <h1>Discover the world</h1>
                            <p></p>
                            <Bounce right>
                                <button className="main-button">Get your tour package</button>
                            </Bounce>
                        </div>
                        <Bounce left>
                            <h3>Travel to the any corner of the world, without going around in circle</h3>
                            <p>Discover Your Favorite Place with Us</p>
                        </Bounce>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://preview.colorlib.com/theme/travelo/img/banner/xbanner3.png.pagespeed.ic.Q9oCO7T4OK.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="mb-5 p-8 align-item-center">

                            <h1>Discover the world</h1>
                            <p></p>
                            <button className="main-button">Get your tour package</button>
                        </div>
                        <h3>Travel to the any corner of the world, without going around in circle </h3>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>






            </Carousel>

            <section class="ftco-appointment ftco-section ftco-no-pt ftco-no-pb mb-90">
                <div class="overlay"></div>
                <div class="container">
                    <Fade left>
                        <div class="row d-md-flex justify-content-center">
                            <div class="col-md-12">

                                <div class="wrap-appointment d-md-flex">
                                    <div class="col-md-8 bg-dark p-5 heading-section heading-section-white">
                                        {/* <span class="subheading bg-white">Booking an Appointment</span> */}
                                        <h2 class="mb-4 bg-white ">Free Consultation</h2>
                                        <form action="#" class="appointment">
                                            <div class="row justify-content-center d-flex">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <Form.Group
                                                            className="mb-3 text-white"
                                                            controlId="formBasicText"
                                                        >
                                                            <Form.Label>Your Name </Form.Label>
                                                            <Form.Control
                                                                // style={formStyle}
                                                                type="text"
                                                                placeholder="Enter Your Name"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group
                                                            className="mb-3 text-white"
                                                            controlId="formBasicEmail"
                                                        >
                                                            <Form.Label>Your Email </Form.Label>
                                                            <Form.Control
                                                                // style={formStyle}
                                                                type="email"
                                                                placeholder="Enter Your Email"
                                                            />
                                                        </Form.Group>

                                                    </div>
                                                </div>

                                                <div class="col-md-6 mt-2">
                                                    <div class="form-group">
                                                        <div class="form-field">
                                                            <div class="select-wrap">
                                                                <div class="icon"><span class="fa fa-chevron-down">choose your services</span></div>

                                                                <select name="" id="#" class="form-control">
                                                                    <option value="">Select Services</option>
                                                                    <option value="">Couple pakage</option>
                                                                    <option value="">Team pakage</option>
                                                                    <option value="">Honeymoon pakage</option>
                                                                    <option value="">with Guide</option>
                                                                    {/* <option value="">Therapeutic Exercise</option>
                                                                <option value="">Substance abuse counseling</option> */}
                                                                </select>


                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <Button className="mb-5 px-6 mt-4" variant="light" type="submit">
                                                    Make a Appointment
                                                </Button>

                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-md-4 bg-white text-center p-5">
                                        <div class="desc border-bottom pb-4">
                                            <h2>Business Hours</h2>
                                            <div class="opening-hours">
                                                <h4>Opening Days:</h4>
                                                <p class="pl-3">
                                                    <span><strong>Monday – Friday:</strong> 9am to 20 pm</span>
                                                    <span><strong>Saturday :</strong> 9am to 17 pm</span>
                                                </p>
                                                <h4>Vacations:</h4>
                                                <p class="pl-3">
                                                    <span>All Sunday Days</span>
                                                    <span>All Official Holidays</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="desc pt-4 ">
                                            <h3 class="heading">For Emergency Cases</h3>
                                            <span class="phone">(+088) 123 456 7890</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Fade>
                </div>
            </section>


        </div>
    );
}


export default Banner;