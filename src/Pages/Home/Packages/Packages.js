import React, { useEffect, useState } from 'react';
import './Packages.css';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Package from '../Package/Package';
import sectionBg from "./../../../assets/sectionBg.png"
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";



const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const getPackages = async () => {
            await axios.get("https://vast-hamlet-93518.herokuapp.com/package")
                .then(res => {
                    setPackages(res.data);
                });
        };
        getPackages();
    }, []);
    return (
        <div className="packages-section">
            <Bounce bottom>
                <Container>
                    <div className="packages-section-head">
                        <Zoom>
                            <h5>Choose Your Package</h5>
                        </Zoom>
                        {/* <h2>Select Your best Package For Your Travel</h2> */}
                    </div>
                    <Row>

                        {packages.map(e => <Package key={e._id} data={e}></Package>)}

                    </Row>
                </Container>
            </Bounce>
        </div>
    );
};

export default Packages;