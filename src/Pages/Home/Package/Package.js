import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Package = (props) => {
    const data = props.data || {};
    const history = useHistory();
    function handleSeeMore(id) {
        history.push(`/package-details/${id}`);
    }
    return (
        <Col md={4}>
            <div className="package-cart">
                <div className="cart-img">
                    <img className="w-100" src={data?.image} alt="" />
                </div>
                <div className="package-info">
                    <h5><span>${data?.price}</span>/Per Person</h5>
                    <h5><i className="fas fa-calendar-alt"></i> {data?.day} Days/{data?.night} nights</h5>
                </div>
                <h3 className="package-title" ><i className="fas fa-map-marker-alt"></i> {data?.packageName}</h3>
                <div className="cart-rating">
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
                <div className="cart-discription">
                    <p>{data?.discription}</p>
                </div>
                <button onClick={() => (handleSeeMore(data?._id))} className="main-button m-auto mx-5">See Details</button>
            </div>
        </Col>
    );
};

export default Package;