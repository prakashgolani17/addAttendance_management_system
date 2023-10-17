// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dayjs from "dayjs";
// import { Table } from "reactstrap";
// import { EMPLOYEE } from "../../../helpers/url_helper";
// import { apiHelper } from "../../../helpers/auth_helper";

// const EditableTable = () => {
//     const [employeeData, setEmployeeData] = useState([]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(EMPLOYEE, apiHelper());
//             setEmployeeData(response.data.leaveData);
//         } catch (error) {
//             // Handle error here
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleStatusChange = async (employeeId, newStatus) => {
//         const updatedEmployeeData = employeeData.map((employee) => {
//             if (employee._id === employeeId) {
//                 return {
//                     ...employee,
//                     approvalStatus: newStatus,
//                 };
//             }
//             return employee;
//         });
//         try {
//             const url = EMPLOYEE + `/${employeeId}`;
//             const response = await axios.put(url, { approvalStatus: newStatus }, apiHelper());
//             console.log(response, "response is here");
//             setEmployeeData(updatedEmployeeData);
//         } catch (error) {
//             console.log("Error updating status:", error);
//         }
//     };
//     console.log("empData", employeeData);

//     return (
//         <div className="page-content w-100">
//             <h2>Request Leave</h2>
//             <Table className="container-fluid" striped>
//                 <thead>
//                     <tr>
//                         <th>srNo.</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {employeeData?.map((item, i) => {
//                         return (
//                             <tr key={i}>
//                                 <td>{item.userId.srNo}</td>
//                                 <td>{item.userId.name}</td>
//                                 <td>{item.userId.email}</td>
//                                 <td>{dayjs(item.startDate).format("DD/MM/YYYY")}</td>
//                                 <td>{dayjs(item.endDate).format("DD/MM/YYYY")}</td>
//                                 <td>
//                                     <select
//                                         className="p-2 rounded"
//                                         value={item.approvalStatus}
//                                         onChange={(e) =>
//                                             handleStatusChange(item._id, e.target.value)
//                                         }
//                                     >
//                                         {/* <option className="p-4 m-3" value="select">Select</option> */}
//                                         <option className="p-2" value="approved">Approved</option>
//                                         <option className="p-2" value="pending">Pending</option>
//                                         <option className="p-2" value="rejected">Rejected</option>
//                                     </select>
//                                 </td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default EditableTable;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import dayjs from "dayjs";
// import { Table } from "reactstrap";
// import { EMPLOYEE } from "../../../helpers/url_helper";
// import { apiHelper } from "../../../helpers/auth_helper";

// const EditableTable = () => {
//     const [employeeData, setEmployeeData] = useState([]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(EMPLOYEE, apiHelper());

//             setEmployeeData(response.data.leaveData);
//         } catch (error) {
//             // Handle error here
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const handleStatusChange = async (employeeId, newStatus) => {
//         const updatedEmployeeData = employeeData.map((employee) => {
//             if (employee._id === employeeId) {
//                 return {
//                     ...employee,
//                     approvalStatus: newStatus,
//                 };
//             }
//             return employee;
//         });
//         try {
//             const url = EMPLOYEE + `/${employeeId}`;
//             const response = await axios.put(url, { approvalStatus: newStatus }, apiHelper());
//             console.log(response, "response is here");
//             setEmployeeData(updatedEmployeeData);
//         } catch (error) {
//             console.log("Error updating status:", error);
//         }
//     };

//     return (
//         <div className="page-content w-100">
//             <h2 style={{ textAlign: "center", margin: "20px" }}>Request Leave</h2>
//             <Table className="container-fluid" striped>
//                 <thead>
//                     <tr>
//                         <th>srNo.</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Start Date</th>
//                         <th>End Date</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {employeeData?.map((item, i) => (
//                         <tr key={i}>
//                             <td>{item?.userId?.srNo}</td>
//                             <td>{item?.userId?.name}</td>
//                             <td>{item?.userId?.email}</td>
//                             <td>{dayjs(item?.startDate).format("DD/MM/YYYY")}</td>
//                             <td>{dayjs(item?.endDate).format("DD/MM/YYYY")}</td>
//                             <td>
//                                 <select
//                                     className="p-2 rounded"
//                                     value={item.approvalStatus}
//                                     onChange={(e) =>
//                                         handleStatusChange(item._id, e.target.value)
//                                     }
//                                 >
//                                     <option className="p-2" value="approved">Approved</option>
//                                     <option className="p-2" value="pending">Pending</option>
//                                     <option className="p-2" value="rejected">Rejected</option>
//                                 </select>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default EditableTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Table, Container, Row, Col } from "reactstrap"; // Import Container, Row, and Col from Reactstrap
import { EMPLOYEE } from "../../../helpers/url_helper";
import { apiHelper } from "../../../helpers/auth_helper";

const EditableTable = () => {
    const [employeeData, setEmployeeData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(EMPLOYEE, apiHelper());
            setEmployeeData(response.data.leaveData);
        } catch (error) {
            // Handle error here
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleStatusChange = async (employeeId, newStatus) => {
        const updatedEmployeeData = employeeData.map((employee) => {
            if (employee._id === employeeId) {
                return {
                    ...employee,
                    approvalStatus: newStatus,
                };
            }
            return employee;
        });
        try {
            const url = EMPLOYEE + `/${employeeId}`;
            const response = await axios.put(url, { approvalStatus: newStatus }, apiHelper());
            console.log(response, "response is here");
            setEmployeeData(updatedEmployeeData);
        } catch (error) {
            console.log("Error updating status:", error);
        }
    };

    return (
        <div className="manage-leave">
            <h2 style={{ textAlign: "center", margin: "20px" }}>Request Leave</h2>
            <Container fluid> {/* Use the fluid property to make it full-width */}
                <Row>
                    <Col>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>srNo.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeeData?.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item?.userId?.srNo}</td>
                                        <td>{item?.userId?.name}</td>
                                        <td>{item?.userId?.email}</td>
                                        <td>{dayjs(item?.startDate).format("DD/MM/YYYY")}</td>
                                        <td>{dayjs(item?.endDate).format("DD/MM/YYYY")}</td>
                                        <td>
                                            <select
                                                className="p-2 rounded"
                                                value={item.approvalStatus}
                                                onChange={(e) =>
                                                    handleStatusChange(item._id, e.target.value)
                                                }
                                            >
                                                <option className="p-2" value="approved">Approved</option>
                                                <option className="p-2" value="pending">Pending</option>
                                                <option className="p-2" value="rejected">Rejected</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EditableTable;

