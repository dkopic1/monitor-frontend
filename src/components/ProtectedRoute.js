import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ Component, ...rest }) => (
	<Route {...rest} render = {
		props => {
			const token = window.localStorage.getItem('token');

			if (!token) {
				return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			}

			return <Component {...props} />
		}
	} />
)

export default ProtectedRoute;