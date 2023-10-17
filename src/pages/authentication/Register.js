// import React from 'react'
// import { Link } from "react-router-dom";
// import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";
// import logoImg from "../../assetes/images/logo.svg";
// import profileImg from "../../assets/images/profile-img.png";




// const Register = () => {
//     return (
//         <>
//             <React.Fragment>
//                 <div className="home-btn d-none d-sm-block">
//                     <Link to="/" className="text-dark">
//                         <i className="fas fa-home h2" />
//                     </Link>
//                 </div>
//                 <div className="account-pages my-5 pt-sm-5">
//                     <Container>
//                         <Row className="justify-content-center">
//                             <Col md={8} lg={6} xl={5}>
//                                 <Card className="overflow-hidden">
//                                     <div className="bg-primary bg-soft">
//                                         <Row>
//                                             <Col className="col-7">
//                                                 <div className="text-primary p-4">
//                                                     <h5 className="text-primary">Free Register</h5>
//                                                     <p>Get your free Skote account now.</p>
//                                                 </div>
//                                             </Col>
//                                             <Col className="col-5 align-self-end">
//                                                 <img src={profileImg} alt="" className="img-fluid" />
//                                             </Col>
//                                         </Row>
//                                     </div>
//                                     <CardBody className="pt-0">
//                                         <div>
//                                             <Link to="/">
//                                                 <div className="avatar-md profile-user-wid mb-4">
//                                                     <span className="avatar-title rounded-circle bg-light">
//                                                         <img
//                                                             src={logoImg}
//                                                             alt=""
//                                                             className="rounded-circle"
//                                                             height="34"
//                                                         />
//                                                     </span>
//                                                 </div>
//                                             </Link>
//                                         </div>
//                                         <div className="p-2">
//                                             <Form
//                                                 className="form-horizontal"
//                                                 onSubmit={(e) => {
//                                                     e.preventDefault();
//                                                     // validation.handleSubmit();
//                                                     return false;
//                                                 }}
//                                             >
//                                                 {/* {user && user ? ( */}
//                                                 <Alert color="success">
//                                                     Register User Successfully
//                                                 </Alert>
//                                                 {/* ) : null} */}

//                                                 {/* {registrationError && registrationError ? ( */}
//                                                 <Alert color="danger">
//                                                     {/* {registrationError} */}
//                                                 </Alert>
//                                                 {/* ) : null} */}

//                                                 <div className="mb-3">
//                                                     <Label className="form-label">Email</Label>
//                                                     <Input
//                                                         id="email"
//                                                         name="email"
//                                                         className="form-control"
//                                                         placeholder="Enter email"
//                                                         type="email"
//                                                     // onChange={validation.handleChange}
//                                                     // onBlur={validation.handleBlur}
//                                                     // value={validation.values.email || ""}
//                                                     // invalid={
//                                                     // validation.touched.email && validation.errors.email ? true : false
//                                                     // }
//                                                     />
//                                                     {/* {validation.touched.email && validation.errors.email ? (
//                                                         <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
//                                                     ) : null} */}
//                                                 </div>

//                                                 <div className="mb-3">
//                                                     <Label className="form-label">Username</Label>
//                                                     <Input
//                                                         name="username"
//                                                         type="text"
//                                                         placeholder="Enter username"
//                                                     // onChange={validation.handleChange}
//                                                     // onBlur={validation.handleBlur}
//                                                     // value={validation.values.username || ""}
//                                                     // invalid={
//                                                     //     validation.touched.username && validation.errors.username ? true : false
//                                                     // }
//                                                     />
//                                                     {/* {validation.touched.username && validation.errors.username ? ( */}
//                                                     {/* <FormFeedback type="invalid">{validation.errors.username}</FormFeedback> */}
//                                                     {/* ) : null} */}
//                                                 </div>
//                                                 <div className="mb-3">
//                                                     <Label className="form-label">Password</Label>
//                                                     <Input
//                                                         name="password"
//                                                         type="password"
//                                                         placeholder="Enter Password"
//                                                     // onChange={validation.handleChange}
//                                                     // onBlur={validation.handleBlur}
//                                                     // value={validation.values.password || ""}
//                                                     // invalid={
//                                                     //     validation.touched.password && validation.errors.password ? true : false
//                                                     // }
//                                                     />
//                                                     {/* {validation.touched.password && validation.errors.password ? ( */}
//                                                     {/* <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
//                                                     ) : null} */}
//                                                 </div>

//                                                 <div className="mt-4">
//                                                     <button
//                                                         className="btn btn-primary btn-block "
//                                                         type="submit"
//                                                     >
//                                                         Register
//                                                     </button>
//                                                 </div>

//                                                 <div className="mt-4 text-center">
//                                                     <p className="mb-0">
//                                                         By registering you agree to the Skote{" "}
//                                                         <Link to="#" className="text-primary">
//                                                             Terms of Use
//                                                         </Link>
//                                                     </p>
//                                                 </div>
//                                             </Form>
//                                         </div>
//                                     </CardBody>
//                                 </Card>
//                                 <div className="mt-5 text-center">
//                                     <p>
//                                         Already have an account ?{" "}
//                                         <Link to="/login" className="font-weight-medium text-primary">
//                                             {" "}
//                                             Login
//                                         </Link>{" "}
//                                     </p>
//                                     <p>
//                                         © {new Date().getFullYear()} Skote. Crafted with{" "}
//                                         <i className="mdi mdi-heart text-danger" /> by Themesbrand
//                                     </p>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             </React.Fragment>
//         </>
//     )
// }

// export default Register