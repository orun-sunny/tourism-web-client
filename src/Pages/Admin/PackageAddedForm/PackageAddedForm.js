import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Flip from 'react-reveal/Flip';


const PackageAddedForm = () => {

    const [massage, setMassage] = useState('');
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        async function postPackageData(data) {
            await axios.post('https://vast-hamlet-93518.herokuapp.com/package', data).then(res => {
                setMassage(res.data);
            });
        }
        postPackageData(data);
        reset();
    };
    return (
        <div>

            <Container>
                <Flip top>
                    <div className="packages-section-head">
                        <h5 className="my-3">{massage}</h5>
                    </div>
                    {!massage ?

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row ">
                                <div className="form-group col-md-6 mx-auto my-3">
                                    <label htmlFor="packageName">Package Name   {errors.packageName && <span className="text-danger">  This field is required</span>}</label>
                                    <input type="text" className="form-control" id="packageName" {...register("packageName", { required: true })} placeholder="Enter your package name.." />
                                </div>
                                <div className="form-group col-md-6 mx-auto my-3">
                                    <label htmlFor="placeName">Location/Place   {errors.placeName && <span className="text-danger">  This field is required</span>}</label>
                                    <input type="text" className="form-control" id="placeName" {...register("placeName", { required: true })} placeholder="Your prefered location/place..." />
                                </div>
                                <div className="form-group col-md-6 mx-auto my-3">
                                    <label htmlFor="price">Price per person {errors.price && <span className="text-danger">  This field is required</span>}</label>
                                    <input type="number" className="form-control" id="price" {...register("price", { required: true })} placeholder="Example : 180" />
                                </div>
                                <div className="form-group col-md-6 mx-auto my-3">
                                    <label htmlFor="day">How many days {errors.day && <span className="text-danger">  This field is required</span>} </label>
                                    <input type="number" className="form-control" id="day" {...register("day", { required: true })} placeholder="Example : 4" />
                                </div>
                                <div className="form-group col-md-6 mx-auto my-3">
                                    <label htmlFor="night">How many nights {errors.night && <span className="text-danger">  This field is required</span>} </label>
                                    <input type="number" className="form-control" id="night" {...register("night", { required: true })} placeholder="Example : 3" />
                                </div>
                                <div className="form-group col-md-6 mx-auto my-3">
                                    <label htmlFor="image">Image url {errors.image && <span className="text-danger">  This field is required</span>} </label>
                                    <input type="text" className="form-control" id="image" {...register("image", { required: true })} placeholder="Example : link" />
                                </div>
                                <div className="form-group col-md-6 mx-auto my-3">
                                    <label htmlFor="packageDiscription">Package Discription {errors.discription && <span className="text-danger">  This field is required</span>} </label>
                                    <textarea type="text" className="form-control" id="packageDiscription" {...register("discription", { required: true })} placeholder="Write your package .." ></textarea>
                                </div>
                            </div>
                            <div className="d-flex">
                                <button type="submit" className="main-button mx-auto my-5" >Add new Package</button>
                            </div>
                        </form> :
                        <></>
                    }
                </Flip>
            </Container>

        </div>
    );
};

export default PackageAddedForm;