import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <Container>

            <table id="customers">
                <tbody>
                    <tr>
                        <th className="text-center">All activities of admin ..</th>
                        <th className="text-center">Action</th>
                    </tr>
                    <tr>
                        <td className="text-center" >You can add new packages from here ...</td>
                        <td className="d-flex justify-content-center"><Link className="main-button text-center" to='/package-add'>Add New Pack</Link></td>
                    </tr>
                    <tr>
                        <td className="text-center" >You can see alll bookings from here ...</td>
                        <td className="d-flex justify-content-center"><Link className="main-button text-center" to='/all-bookings'>See now All</Link></td>
                    </tr>


                </tbody>
            </table>
        </Container>
    );
};

export default AdminDashboard;