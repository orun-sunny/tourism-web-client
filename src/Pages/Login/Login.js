import userEvent from '@testing-library/user-event';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useFirebase from './../../Hooks/useFirebase';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const { joinWithGoogle } = useFirebase();
    const history = useHistory();
    const location = useLocation();
    const redirect_URL = location.state?.from || '/'

    const loginWithGoogle = () => {
        joinWithGoogle()
            .then((res) => {
                history.push(redirect_URL);
            })
    }
    return (
        <>
            <div className="d-flex my-5">
                <button className="main-button m-auto" onClick={loginWithGoogle}>Login With Google</button>
            </div>
        </>
    );
};

export default Login;