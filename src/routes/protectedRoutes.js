import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
// import Navbar from "../Sidebar/Navbar";
// import Productlist from '../Protected'

const AuthProtected = ({ Component, title }) => {
    const AuthRoutes = Component;
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    });
    return (
        <>
            <AuthRoutes />
            {/* <h2>{title}</h2> */}
        </>
    );
};

const ProtectedRoutes = (props, title) => {
    const navigate = useNavigate();

    const { Component } = props;
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
    });
    return (
        <>
            <div className="d-flex flex-row">
                <Sidebar />
                <div className="">
                    <Component />
                </div>
            </div>
        </>
    );
};
export { ProtectedRoutes, AuthProtected };

// import React from 'react'

// const protectedRoutes = () => {
//     return (
//         <div>
//             <div className="d-flex flex-row">
//                 {/* <div className=""> */}
//                 <Sidebar />
//                 <div className="">
//                     {/* <Navbar /> */}
//                     <div className="mx-auto"><Component /></div>
//                     {/* <h2>{title}</h2> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default protectedRoutes


// import React from "react";
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import { useAuth } from "../common/AuthContext";
// const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
//     const { state } = useAuth();
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route
//                     {...rest}
//                     render={(props) => {
//                         if (state.user && allowedRoles.includes(state.user.role)) {
//                             return <Component {...props} />;
//                         } else {
//                             return <Link to="/" />; // Redirect to the login page or any other route
//                         }
//                     }}
//                 />
//             </Routes>
//         </BrowserRouter>
//     );
// };
// export default ProtectedRoute;


