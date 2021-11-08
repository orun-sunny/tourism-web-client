import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Route, useLocation, useParams, Switch, useRouteMatch } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Booking from '../Booking/Booking';
import { useHistory } from 'react-router-dom';

const PackageDetails = () => {
    const { id } = useParams();

    const [singlePackage, setSinglePackage] = useState({});

    useEffect(() => {
        const getPackage = async () => {
            await axios.get(`https://vast-hamlet-93518.herokuapp.com/package-details/${id}`)
                .then(res => {
                    console.log(res.data)
                    setSinglePackage(res.data);
                });
        };
        getPackage();
    }, [id]);

    const location = useLocation();
    const history = useHistory()
    const { user } = useAuth();
    const { path, url } = useRouteMatch();

    const handleBooking = () => {
        history.push(`${url}/${user.uid}`)
    };
    if (!singlePackage) {
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="info" />
            </div>
        );
    }
    return (<>
        <Route exact path={url}>
            <Container className="">

                <div className="package-cart my-5 m-auto d-flex col-lg-8">
                    {/* <p className=" d-flex justify content center">Details here</p> */}
                    <div className="cart-img">
                        <img className="w-100 h-100" src={singlePackage.image} alt="" />
                    </div>
                    <div className="col-lg-5">
                        <div className="package-info m-2">
                            <h5><span>${singlePackage.price}</span>/Per Person</h5>
                            <h5><i className="fas fa-calendar-alt"></i> {singlePackage.day} Days/{singlePackage.night} nights</h5>
                        </div>
                        <h3 className="package-title" ><i className="fas fa-map-marker-alt"></i> {singlePackage.packageName}</h3>
                        <div className="cart-rating m-2">
                            <div className="star">
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <div className="vote">
                                <h5>8K Ratings</h5>
                            </div>
                        </div>
                        <div className="cart-discription m-2 p-2">
                            <p>{singlePackage.discription}</p>
                        </div>
                        <div className="d-flex p-3">
                            <button className="main-button  w-100" onClick={handleBooking}>Book Now</button>
                        </div>
                    </div>
                </div>
            </Container>
        </Route>

        <Route path={`${path}/${user.uid}`}>
            <Booking uid={user.uid} name={user.displayName} email={user.email} packageId={id} packageName={singlePackage.packageName}></Booking>
        </Route>

    </>
    );
};

export default PackageDetails;