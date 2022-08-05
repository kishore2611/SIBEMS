
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authentication from './Authentication';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            Authentication.isLogin() ?
                <Component {...props} />
            : <Redirect to="/SignUp" />
        )} />
    );
};

export default PrivateRoute;