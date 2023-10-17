
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import profileImg from '../../assetes/images/profile-img.png';
import Attendance from '../../assetes/images/manage.png';
import { DASHBOARD } from '../../helpers/url_helper';
import { apiHelper } from '../../helpers/auth_helper';
import Flatpickr from "react-flatpickr";

const Dashboard = () => {

    const [fetchAll, setFetchAll] = useState({});
    const [form, setForm] = useState({
        startDate: "",
        endDate: "",
        // reason: "",
    });

    // const handleChange = (date, name,) => {
    //     setForm({ ...form, [name]: date });
    // };

    const getAll = async () => {
        try {
            const response = await axios.post(DASHBOARD, apiHelper());
            console.log("response", response);
            setFetchAll(response.data)
        } catch (error) {
            console.log(error, "this is error");
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const result = await axios.get(DASHBOARD, apiHelper());
    //         console.log(result);

    //         // Reset the form fields
    //         // setForm({
    //         //     startDate: null,
    //         //     endDate: null,
    //         //     reason: "",
    //         // });
    //         // navigate("/employee/leave");
    //     } catch (error) {
    //         console.log(error, "error");
    //     }
    // };
    console.log(form, "formdata")
    useEffect(() => {
        getAll();
    }, []);

    return (
        <React.Fragment>
            <div className="manage-leave ">
                <Container fluid>
                    <Row>
                        <Col>
                            <Card className="overflow-hidden">
                                <div className="bg-success bg-soft">
                                    <Row>
                                        <Col xs="2">
                                            <div className="text-white p-3">
                                                <h5 className="text-white">Welcome Back!</h5>
                                                <p>Attendance Management System</p>
                                            </div>
                                        </Col>
                                        <Col xs="5" className="align-self-end">
                                            <img src={profileImg} alt="" className="img-fluid" />
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                    <Row>
                                        <Col sm="4">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <img
                                                    src={Attendance}
                                                    alt=""
                                                    className="img-thumbnail rounded-circle w-75"
                                                />
                                            </div>
                                            <h5 className="font-size-15 text-truncate">{fetchAll?.employeeData?.userId?.name}</h5>
                                            <p className="text-muted mb-0 text-truncate">{fetchAll?.employeeData?.userId?.address}</p>
                                        </Col>
                                        <Col sm="4">
                                            <div className="pt-4">
                                                <Row>
                                                    <Col xs="10">
                                                        <h5 className="font-size-15">Working Hours</h5>
                                                        <p className="text-muted mb-0">
                                                            <div className="form-group my-4 w-100 ">
                                                                <label className='font-italic'><b>Date Range:</b></label>
                                                                {/* <Flatpickr
                                                                    // style={{ width: "500px" }}
                                                                    className="form-control  border border-dark"
                                                                    placeholder="Select date range"
                                                                    options={{
                                                                        mode: "range",
                                                                        dateFormat: "Y-m-d",
                                                                    }}
                                                                    value={
                                                                        form.startDate && form.endDate
                                                                            ? [form.startDate, form.endDate]
                                                                            : []
                                                                    }
                                                                    onChange={(selectedDates) => {
                                                                        if (Array.isArray(selectedDates) && selectedDates.length === 2) {
                                                                            const [startDate, endDate] = selectedDates;
                                                                            setForm({
                                                                                ...form,
                                                                                startDate: startDate,
                                                                                endDate: endDate,
                                                                            });
                                                                        }
                                                                    }}
                                                                /> */}
                                                            </div>
                                                            {/* <button onClick={handleSubmit} className="btn btn-primary">
                                                                Submit
                                                            </button> */}
                                                        </p>
                                                    </Col>
                                                    {/* <Col xs="6">
                                                        <h5 className="font-size-15">$1245</h5>
                                                        <p className="text-muted mb-0">Revenue</p>
                                                    </Col> */}
                                                </Row>
                                                {/* <div className="mt-4">
                                                    <Link to="" className="btn btn-primary btn-sm">
                                                        View Profile <i className="mdi mdi-arrow-right ms-1"></i>
                                                    </Link>
                                                </div> */}
                                                <div className='my-3'>
                                                    <p className="text-muted mb-0 text-truncate"><b className='mx-2'>work:</b>{fetchAll.totalWorkHour}</p>
                                                    <p className="text-muted mb-0 text-truncate"><b className='mx-2'>break:</b>{fetchAll.totalBreakHour}</p>
                                                    <p className="text-muted mb-0 text-truncate"><b className='mx-2'>OverTime:</b>{fetchAll.totalOverHour}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
