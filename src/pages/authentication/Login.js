
import React, { useState } from "react";
import {
    Row,
    Col,
    CardBody,
    Card,
    Container,
    Form,
    Input,
    Label,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assetes/images/profile-img.png";
import logo from "../../assetes/images/logo.svg";
import axios from "axios";
import { LOGIN } from "../../helpers/url_helper";
import { apiHelper } from "../../helpers/auth_helper";
import jwt_decode from "jwt-decode"

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    // const [save, setSave] = useState(false);
    // manage Handle change data
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = async () => {
        try {
            const responce = await axios.post(LOGIN, apiHelper(form)).catch((err) => {
                console.log(err);
            });
            if (responce?.data?.accessToken) {
                const decoded = jwt_decode(responce.data.accessToken);
                console.log(decoded);
                localStorage.setItem("token", responce.data.accessToken)
                // navigate("/")
                if (decoded.role === "admin") {
                    navigate(`/admin`);
                } else if (decoded.role === "employee") {
                    navigate(`/employee`);
                }
            } else {
                navigate("/login")
            }
        } catch (error) {
            console.log("Login Error", error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd();
        // navigate("/employee")
    };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   addData(); 
    // };

    return (
        <>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="overflow-hidden">
                                <div className="bg-primary bg-soft">
                                    <Row>
                                        <Col xs={7}>
                                            <div className="text-white p-4">
                                                <h5>Welcome Back !</h5>
                                                <p>Sign in to continue to Skote.</p>
                                            </div>
                                        </Col>
                                        <Col className="col-5 align-self-end">
                                            <img src={profile} alt="" className="img-fluid" />
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                    <div>
                                        <Link to="/" className="auth-logo-light">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img
                                                        src={logo}
                                                        alt=""
                                                        className="rounded-circle"
                                                        height="34"
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="p-2">
                                        <Form className="form-horizontal" onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <Label className="form-label">Email</Label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    className="form-control"
                                                    placeholder="Enter email"
                                                    // autoComplete="off"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <Label className="form-label">Password</Label>
                                                <Input
                                                    name="password"
                                                    type="password"
                                                    value={form.password}
                                                    className="form-control"
                                                    placeholder="Enter password"
                                                    // autoComplete="off"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="customControlInline"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="customControlInline"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                            <div className="mt-3 d-grid">
                                                <button
                                                    className="btn btn-primary btn-block"
                                                    type="submit"
                                                >
                                                    Log In
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>
                                    Don&#39;t have an account
                                    <Link to="/register" className="fw-medium text-primary">
                                        Signup now
                                    </Link>
                                </p>
                                <p>
                                    © {new Date().getFullYear()} Skote. Crafted with
                                    <i className="mdi mdi-heart text-danger" /> by Themesbrand
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default Login;


// import React from "react";
// import { useAuth } from "../../common/AuthContext";
// const Login = () => {
//     const { dispatch } = useAuth();
//     const handleAdminLogin = () => {
//         dispatch({ type: "LOGIN", payload: { role: "admin" } });
//     };
//     const handleEmployeeLogin = () => {
//         dispatch({ type: "LOGIN", payload: { role: "employee" } });
//     };
//     return (
//         <div>
//             <h1>Login Page</h1>
//             <button onClick={handleAdminLogin}>Login as Admin</button>
//             <button onClick={handleEmployeeLogin}>Login as Employee</button>
//         </div>
//     );
// };
// export default Login;







