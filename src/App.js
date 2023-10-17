import React, { Fragment } from "react";

import "./App.css";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { authRoutes, publicRoutes } from "../src/routes";
import { ProtectedRoutes, AuthProtected } from "../src/routes/protectedRoutes";
// import "./assetes/scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={
                  <ProtectedRoutes
                    Component={item.component}
                    title={item.title}
                  />
                }
              ></Route>
            );
          })}
          {authRoutes.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<AuthProtected Component={item.component} />}
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// // App.js

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
// // import PanelWithSidebar from './PanelWithSidebar';

// // function App() {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route exact path="/" render={() => <Redirect to="/panel" />} />
// //         <Route path="/panel" component={PanelWithSidebar} />
// //       </Switch>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./common/AuthContext";
// import ProtectedRoute from "./routes/protectedRoutes";
// import Admin from "./pages/admin";
// import Employee from "./pages/employee";
// import Login from "./pages/authentication/Login";
// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" exact component={Login} />
//           <ProtectedRoute
//             path="/admin"
//             component={Admin}
//             allowedRoles={["admin"]}
//           />
//           <ProtectedRoute
//             path="/employee"
//             component={Employee}
//             allowedRoles={["employee"]}
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }
// export default App;










