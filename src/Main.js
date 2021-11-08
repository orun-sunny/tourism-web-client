import React from 'react';
import TopBarArea from './Pages/Home/TopBarArea/TopBarArea';
import NavSection from './Pages/Home/NavSection/NavSection';
import Banner from './Pages/Home/Banner/Banner';
import Footer from './Pages/Home/Footer/Footer';
import Packages from './Pages/Home/Packages/Packages';
import WhyUs from './Pages/Home/WhyUs/WhyUs';
import Bloges from './Pages/Home/Bloges/Bloges';

import {
    Switch,
    Route,
} from "react-router-dom";

import PackageAddedForm from './Pages/Admin/PackageAddedForm/PackageAddedForm';
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import Login from './Pages/Login/Login';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import useAuth from './Hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import MyBookings from './Pages/MyBookings/MyBookings';
import AdminDashboard from './Pages/Admin/AdminDashboard/AdminDashboard';
import AllBookings from './Pages/Admin/AllBookings/Allbookings';
import AboutUs from './Pages/AboutUs/AboutUs';
import NotFound from './Pages/NotFound/NotFound';

const Main = () => {
    const { isloading, user } = useAuth();
    if (isloading) {
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="info" />
            </div>
        );
    }
    return (
        <>
            <TopBarArea></TopBarArea>
            <NavSection></NavSection>
            <Switch>
                <Route exact path='/admin'>
                    <AdminDashboard></AdminDashboard>
                </Route>
                <Route exact path='/'>
                    <Banner></Banner>
                    <Packages></Packages>
                    <WhyUs></WhyUs>
                    <Bloges></Bloges>
                </Route>
                <Route exact path='/home'>
                    <Banner></Banner>
                    <Packages></Packages>
                    <WhyUs></WhyUs>
                    <Bloges></Bloges>
                </Route>
                <Route exact path='/packages'>
                    <Packages></Packages>
                </Route>
                <Route exact path='/about-us'>
                    <AboutUs></AboutUs>
                </Route>
                <Route path='/package-add'>
                    <PackageAddedForm></PackageAddedForm>
                </Route>
                <PrivateRoute path='/package-details/:id'>
                    <PackageDetails></PackageDetails>
                </PrivateRoute>
                <PrivateRoute path='/my-bookings'>
                    <MyBookings></MyBookings>
                </PrivateRoute>
                <Route path='/all-bookings'>
                    <AllBookings></AllBookings>
                </Route>

                {!user.email ?
                    <Route exact path='/login'>
                        <Login></Login>
                    </Route> : ''
                }
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
            <Footer></Footer>
        </>
    );
};

export default Main;