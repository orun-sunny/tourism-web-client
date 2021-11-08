import axios from 'axios';
import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Booking = (props) => {
    const [massage, setMassage] = useState(null);
    const { uid, packageId, packageName, name, email } = props;
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const booking = { uid: uid, packageId: packageId, ...data, status: "pending" }
        async function postBooking(booking) {
            await axios.post('https://vast-hamlet-93518.herokuapp.com/booking', booking).then(res => {
                setMassage(res.data);
            });
        }
        postBooking(booking);
        reset();
    };

    if (!packageName) {
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="info" />
            </div>
        );
    }
    return (
        <Container>
            <div className="packages-section-head">
                <h5 className="my-3">{massage}</h5>
            </div>
            {!massage ?
                <>
                    <div className="packages-section-head mb-0">
                        <h5 className="my-3">Please Give the necessary information..</h5>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row ">
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="packageName">Your Name
                                    {errors.name && <span className="text-danger">  This field is required</span>}
                                </label>
                                <input type="text" className="form-control" id="name" value={name} {...register("name", name, { required: true, disabled: true })} placeholder="Enter your  name.." />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="price">Your email..
                                    {errors.email && <span className="text-danger">  This field is required</span>}
                                </label>
                                <input type="email" className="form-control" id="price" value={email} {...register("email", email, { required: true, disabled: true })} placeholder="Example : " />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="packageName">Package name
                                    {errors.packageName && <span className="text-danger">  This field is required</span>}
                                </label>
                                <input type="text" className="form-control" id="packageName" value={packageName} {...register("packageName", packageName, { disabled: true })} placeholder="Example : " />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="datefrom">Booking from..
                                    {errors.datefrom && <span className="text-danger">  This field is required</span>}
                                </label>
                                <input type="date" className="form-control" id="datefrom" {...register("datefrom", { required: true })} />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="dateto">Booking to ...
                                    {errors.dateto && <span className="text-danger">  This field is required</span>}
                                </label>
                                <input type="date" className="form-control" id="dateto" {...register("dateto", { required: true })} placeholder="Example : 3" />
                            </div>
                            <div className="form-group col-md-6 mx-auto my-3">
                                <label htmlFor="note">Note ...
                                    {errors.note && <span className="text-danger">  This field is required</span>}
                                </label>
                                <textarea type="text" className="form-control" id="note" {...register("note", { required: true })} placeholder="you can write here home note If you want to say some things ..." ></textarea>
                            </div>
                        </div>
                        <div className="d-flex">
                            <button type="submit" className="main-button mx-auto my-3" >Add new Package</button>
                        </div>
                    </form></> :
                <></>}

        </Container>
    );
};

export default Booking;