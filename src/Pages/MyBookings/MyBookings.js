import React, { useEffect, useState } from 'react';
import './MyBookings.css'
import { Container, Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import "bootstrap/dist/js/bootstrap.min.js";

const MyBookings = () => {
    const [massage, setMassage] = useState({});
    const [bookings, setBooking] = useState();
    const [deletingItem, setDeletingItem] = useState();
    const { user } = useAuth();
    useEffect(() => {
        async function myBooking() {
            await axios.get(`https://vast-hamlet-93518.herokuapp.com/my-bookings/${user.email}`).then(res => {
                setBooking(res.data);
            });
        }
        myBooking();
    }, [massage])
    const handleWantToDelete = (deleteItem) => {
        setDeletingItem(deleteItem);
    }
    const handleDeleteBooking = (bookingId) => {
        async function deleteBooking() {
            await axios.delete(`https://vast-hamlet-93518.herokuapp.com/delete-booking/${bookingId}`).then(res => {
                setMassage(res.data);
            });
        }
        deleteBooking();
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
            <div className="modal fade " id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  " role="document">
                    <div className="modal-content bg-color-main">
                        <div className="modal-header">
                            <h5 className="modal-title text-color-second" id="exampleModalLongTitle ">Are You sure Want To Cancel !!</h5>
                            <div type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cancel-x" aria-hidden="true">&times;</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="text-white">Name : {deletingItem?.packageName}</p>
                            <p className="text-white">From : {deletingItem?.datefrom}</p>
                            <p className="text-white">To : {deletingItem?.dateto}</p>
                            <p className="text-color-second">Status : {deletingItem?.status}</p>
                        </div>
                        {deletingItem ?
                            <div className="modal-footer">
                                <button type="button" className=" main-button" data-dismiss="modal">No</button>
                                <button type="button" className="main-button" data-dismiss="modal" onClick={() => { handleDeleteBooking(deletingItem._id) }}>Yes</button>
                            </div> : <></>}
                    </div>
                </div>
            </div>
            <div className="packages-section-head">
                <h5 className="my-3">YOUR ALL BOOKINGS</h5>
            </div>
            <table id="customers">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>Package Name</th>
                        <th>Booked from</th>
                        <th>Booked to</th>
                        <th>Status</th>
                        <th className="text-center" >Delete</th>
                    </tr>
                    {bookings.map((ele, index) => (
                        <tr key={ele._id}>
                            <td>{index + 1}</td>
                            <td>{ele.packageName}</td>
                            <td>{ele.placeName}</td>
                            <td>{ele.datefrom}</td>
                            <td>{ele.dateto}</td>
                            <td>{ele.status}</td>
                            <td className="main-button text-center cursor-pointer" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => (handleWantToDelete(ele))}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* <!-- Modal --> */}

        </Container>
    );
};

export default MyBookings;