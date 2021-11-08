import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import axios from 'axios';
// import React from 'react';

import "bootstrap/dist/js/bootstrap.min.js";
import './AllBookings.css';

const AllBookings = () => {
    var value = '';
    const [massage, setMassage] = useState({});
    const [bookings, setBooking] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});

    async function myBooking() {
        await axios.get(`https://vast-hamlet-93518.herokuapp.com/all-bookings`).then(res => {
            setBooking(res.data);
        });
    }
    useEffect(() => {
        myBooking();
    }, [massage])
    const handleWantToDelete = (deleteItem) => {
        setSelectedItem(deleteItem);
    }
    const handleDeleteBooking = (bookingId) => {
        async function deleteBooking() {
            await axios.delete(`https://vast-hamlet-93518.herokuapp.com/delete-booking/${bookingId}`).then(res => {
                setMassage(res.data);
            });
        }
        deleteBooking();
    }
    const handleWantToStatusChange = (statusChangingItem) => {
        setSelectedItem(statusChangingItem);
    }
    const handleOnChangeStatus = (e) => {
        value = e.target.value;
    }
    const handleStatusChange = (bookingId) => {
        async function updateStatus() {
            await axios.put(`https://vast-hamlet-93518.herokuapp.com/update-booking-status/${bookingId}/${value}`).then(res => {
                setMassage(res.data);
            });
        }
        updateStatus();

    }
    if (!bookings) {
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="info" />
            </div>
        );
    };
    return (
        <Container>
            <div className="packages-section-head">
                <h5 className="my-3">{massage?.massage}</h5>
            </div>


            {/* Delete confirmation Modal start */}
            <div className="modal fade " id="deleteModel" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  " role="document">
                    <div className="modal-content bg-color-main">
                        <div className="modal-header">
                            <h5 className="modal-title text-color-second" id="exampleModalLongTitle ">Are You sure Want To Cancel !!</h5>
                            <div type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cancel-x" aria-hidden="true">&times;</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="text-white">Name : {selectedItem?.packageName}</p>
                            <p className="text-white">From : {selectedItem?.datefrom}</p>
                            <p className="text-white">To : {selectedItem?.dateto}</p>
                            <p className="text-color-second">Status : {selectedItem?.status}</p>
                        </div>
                        {selectedItem ?
                            <div className="modal-footer">
                                <button type="button" className=" main-button" data-dismiss="modal">No</button>
                                <button type="button" className="main-button" data-dismiss="modal" onClick={() => { handleDeleteBooking(selectedItem._id) }}>Sure</button>
                            </div> : <></>}
                    </div>
                </div>
            </div>
            {/* Delete confirmation Modal end */}

            {/* Status chnanging Modal start */}
            <div className="modal statusModal fade " id="statusModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  " role="document">
                    <div className="modal-content bg-color-main">
                        <div className="modal-header">
                            <h5 className="modal-title text-color-second" id="exampleModalLongTitle ">Are You sure Want To change booking status !!</h5>
                            <div type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cancel-x" aria-hidden="true">&times;</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="text-white">Booking Name : {selectedItem?.packageName}</p>
                            <p className="text-white">Booking Email : {selectedItem?.email}</p>
                            <p className="text-white">From : {selectedItem?.datefrom}</p>
                            <p className="text-white">To : {selectedItem?.dateto}</p>
                            <label htmlFor="status" className="text-color-second">Status : </label>

                            <select id="status" onChange={handleOnChangeStatus} className="mx-2">
                                {/* <option value={selectedItem?.status}>{selectedItem?.status}</option> */}
                                <option value="pending">pending</option>
                                {/* <option value="verifying">verifying</option> */}
                                <option value="Confirmed">Confirmed</option>
                            </select>
                        </div>
                        {selectedItem ?
                            <div className="modal-footer">
                                <button type="button" className=" main-button" data-dismiss="modal">No</button>
                                <button type="button" className="main-button" data-dismiss="modal" onClick={() => { handleStatusChange(selectedItem._id) }}>Sure</button>
                            </div> : <></>}
                    </div>
                </div>
            </div>
            {/* Status chnanging Modal start */}



            <div className="packages-section-head">
                <h5 className="my-3">YOUR ALL BOOKINGS</h5>
            </div>
            <table id="customers">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>Package Name</th>
                        <th>Booking Email</th>
                        <th>Booked from</th>
                        <th>Booked to</th>
                        <th>Status</th>
                        <th className="text-center" >Delete</th>
                    </tr>
                    {bookings.map((ele, index) => (
                        <tr key={ele._id}>
                            <td>{index + 1}</td>
                            <td>{ele.packageName}</td>
                            <td>{ele.email}</td>
                            <td>{ele.datefrom}</td>
                            <td>{ele.dateto}</td>
                            <td className="cursor-pointer" data-toggle="modal" data-target="#statusModal" onClick={() => (handleWantToStatusChange(ele))} >{ele.status} <i className="fas fa-edit text-color-second"></i></td>

                            <td className="main-button text-center cursor-pointer" data-toggle="modal" data-target="#deleteModel" onClick={() => (handleWantToDelete(ele))}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </Container>
    );
};

export default AllBookings;