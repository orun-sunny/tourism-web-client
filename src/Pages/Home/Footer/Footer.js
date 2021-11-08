import React from 'react';
import './Footer.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/fontawesome-svg-core"

const Footer = () => {
    return (
        <div className="footerSection">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="footerRecentPosts">
                            <h3>Recent Posts</h3>
                            <Link>About us</Link>
                            <Link>services</Link>
                            <Link>Gallery </Link>
                            <Link>How to Live a Healthier Life</Link>
                            <Link>mission</Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footerRecentPosts">
                            <h3>Categories</h3>
                            <Link>Guide</Link>
                            <Link>Health Basics</Link>
                            <Link>Medical benefits</Link>
                            <Link>Motivation</Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="footerAbout">
                            <h3>About Tour-hobe</h3>
                            <p>"Being here is a kind of spiritual surrender. We see only what the others see. The thousands who were here in the past, those who will come in the future. We've agreed to be part of a collective perception. It literally colors our vision. A religious experience in a way, like all tourism."</p>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus ipsum assumenda voluptate aperiam aut.!</p> */}
                        </div>
                    </Col>
                    <Col md={12} className="d-flex justify-content-between">

                        <div className="text-center">
                            <i class="fab fa-instagram mx-2"></i>
                            <i class="fab fa-facebook-square mx-2 "></i>
                            <i class="fab fa-facebook-messenger mx-2"></i>
                            <i class="fab fa-linkedin mx-2"></i>
                            <i class="fab fa-youtube mx-2"></i>
                            <i class="fab fa-twitter-square mx-2"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p
                style={{ background: "#000099" }}
                className="m-0 fw-bold py-3  text-white text-center"
            >
                Copyright &copy; All Reserved by{" "}
                <a
                    className="text-decoration-none"
                    style={{ color: "#ff136f" }}
                    target="orun-sunny.github.io"
                    rel="noreFerrer"
                    href="orun-sunny.github.io"
                >
                    orun-sunny
                </a>{" "}
                in 2021
            </p>
        </div >
    );
};

export default Footer;