// import React from 'react';
// import { connect, useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom';


// const ProtectedRoute = ({ children, authUsers }) => {
//     if (!authUsers) return <Navigate to='/login' replace="true" />
//     return children
// }
// const mapStateToProps = (state) => {
//     return {
//         authUsers: state.authReducer.loggedInUsers,
//     }
// }
// export default connect(mapStateToProps)(ProtectedRoute);

import React from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, users }) {
	const user = useSelector((state) => {
		return state.authReducer.loggedInUsers;
	});

	if (!user) {
		return <Navigate to="/login" replace="true" />;
	}
	return children;
}

// const mapStateToProps = (state) => {
// 	return {
// 		users: state.authReducer. loggedInUsers,
// 	};
// };
export default ProtectedRoute;