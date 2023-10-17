// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import dayjs from 'dayjs';
// import { Table } from "reactstrap";
// import { useNavigate, Link } from 'react-router-dom';
// import { EMPLOYEE } from '../../../helpers/url_helper';
// import { apiHelper } from '../../../helpers/auth_helper';

// const RequestLeave = () => {

//  const [fetchAll, setFetchAll] = useState([]);
//     // const [customerData, setcustomerData] = useState({});
//     // const [requestLeaveData, setrequestLeaveData] = useState({})

//     const getAll = async () => { 
//         try {
//             const result = await axios.get(EMPLOYEE, apiHelper());
//             console.log("result", result.data.leaveData)
//             // console.log(result)
//             setFetchAll(result.data.leaveData)
//         } catch (error) {
//             console.log(error, "this is error");
//         }
//     };
//     useEffect(() => {
//         getAll();
//     }, []);
//     return (
//         <>
//             <div className='page-content w-100'>
//                 <button className="btn btn-success mb-2 float-end" >
//                     <Link className="text-white text-decoration-none" to="/employee/leave/requestleave">Add</Link>
//                 </button>
//                 <Table className=" container-fluid " striped>
//                     <thead>
//                         <tr>
//                             <th>id</th>
//                             <th>StartDate</th>
//                             <th>EndDate</th>
//                             <th>Reason</th>
//                             {/* <th>
//                                 <button className="btn btn-success" onClick={handleAdd}>
//                                     Add
//                                 </button>{" "}
//                             </th> */}
//                         </tr>
//                     </thead>
//                     <tbody>    
//                         {
//                             fetchAll?.map((item, i) => {
//                                 return (
//                                     <tr key={i}>
//                                         <td>{item?._id}</td>
//                                         <td>{dayjs(item?.startDate).format('DD/MM/YYYY')}</td>
//                                         <td>{dayjs(item?.endDate).format('DD/MM/YYYY')}</td>
//                                         <td>{item?.reason}</td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </Table>
//             </div>
//         </>
//     )
// }

// export default RequestLeave;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
} from "reactstrap";
import { Table, Button } from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import { apiHelper } from '../../../helpers/auth_helper';
import Flatpickr from "react-flatpickr";
import DeleteModal from "../../../components/DeleteModal";

import { ADMIN, ADMINLEAVE, EMPLOYEE } from '../../../helpers/url_helper';

const RequestLeave = () => {

    const [fetchAll, setFetchAll] = useState([]);
    const [form, setForm] = useState({
        startDate: "",
        endDate: "",
        reason: "",
    });
    const [save, setSave] = useState(false);

    const [adminModal, setAdminModal] = useState(false);

    const [deleteModal, setDeleteModal] = useState(false);
    const [leaveId, setLeaveId] = useState(0);
    const [isEdit, setisEdit] = useState(false);

    const navigate = useNavigate();

    const getAll = async () => {
        try {
            const result = await axios.get(ADMIN, apiHelper());
            // console.log('manageLeave', result);
            setFetchAll(result.data.leaveData);
        } catch (error) {
            console.log(error, 'this is an error')
        }
    }
    // console.log("fetch", fetchAll)

    const handleAdd = async () => {
        try {
            setAdminModal(true);
            setisEdit(false);
            setForm("")
        } catch (error) {
            console.log(error, "error");
        }
    };

    const handleAddLeave = async () => {
        try {
            await axios.post(ADMINLEAVE, apiHelper(form), apiHelper());
            setSave((preSaved) => !preSaved);
            toggle();
            setForm("");
            console.log(form)
            // setcustomerData(result.data.data)
        } catch (error) {
            console.log(error, "error");
        }
    };


    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };


    const handleChange = (date, name,) => {
        setForm({ ...form, [name]: date });
    };

    const toggle = () => {
        if (adminModal) {
            setAdminModal(false);
        } else {
            setAdminModal(true);
        }
    };

    const handleEditLeave = async (_id) => {
        try {
            const response = await axios.put(`${ADMINLEAVE}/${_id}`, apiHelper(form), apiHelper());
            console.log(response, "response is here");
            console.log(_id, "id is here");
            toggle();
            setForm("");
            setSave((preSaved) => !preSaved);
            console.log(form)
        } catch (error) {
            console.log();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            handleEditLeave(form._id);
            // console.log("formId", form._id)
        } else {
            handleAddLeave();
        }
    }

    const onClickDelete = (_id) => {
        console.log(_id)
        setLeaveId(_id);
        setDeleteModal(true);
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(
                `${ADMINLEAVE}/${leaveId}`,
                apiHelper()
            );
            setSave((preSaved) => !preSaved);
            console.log(response, "response");
            setDeleteModal(false);
            // toggle();
        } catch (error) {
        }
    }

    useEffect(() => {
        getAll();
    }, [save]);
    return (
        <>
            <div className="manage-leave">
                <button className='btn btn-success mb-2 float-end'
                    onClick={handleAdd}
                >Add</button>
                <Table className="container-fluid" striped>
                    <thead>
                        <tr>
                            <th>srNo.</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Reason</th>
                            <th>Approval Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fetchAll?.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item?.userId?.srNo}</td>
                                    <td>{dayjs(item?.startDate).format('DD/MM/YYYY')}</td>
                                    <td>{dayjs(item?.endDate).format('DD/MM/YYYY')}</td>
                                    <td>{item?.reason}</td>
                                    <td>{item?.approvalStatus}</td>
                                    <td>
                                        <button className='btn btn-primary mx-3'
                                            onClick={() => {
                                                setForm(item);
                                                setAdminModal(true);
                                                setisEdit(true);
                                            }}
                                        >Edit</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => onClickDelete(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>
            <DeleteModal
                show={deleteModal}
                onDeleteclick={handleDelete}
                onCloseClick={() => setDeleteModal(false)}
            />
            <Modal
                isOpen={adminModal}
                toggle={toggle}
            >
                <ModalHeader
                    toggle={toggle}
                >Modal title</ModalHeader>
                <ModalBody>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group my-4">
                            <label htmlFor="reason">Reason:</label>
                            <textarea
                                className="form-control"
                                id="reason"
                                name="reason"
                                value={form.reason}
                                onChange={(e) => handleChange(e.target.value, "reason")}
                                placeholder="Enter reason..."
                            />
                        </div>
                        <div className="form-group my-4">
                            <label>Date Range:</label>
                            <Flatpickr
                                className="form-control"
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
                            />
                        </div>
                        <div>
                            {
                                <Button type="submit" color="success">
                                    {isEdit ? "Edit" : "Add"}{" "}
                                </Button>
                            }
                            <Button
                                className=' mx-2'
                                color="secondary"
                                onClick={() => {
                                    toggle();
                                }}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>

                    {/* <Form
                        onSubmit={handleSubmit}
                    >
                        <FormGroup>
                            <Input
                                placeholder="customername"
                                type="text"
                                defaultValue={form.startDate}
                                name="name"
                                onChange={handleChange}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                defaultValue={form.endDate}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="email"
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                // defaultValue={form.address}
                                type="text"
                                name="address"
                                // onChange={handleChange}
                                placeholder="address"
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="number"
                                // defaultValue={form.mobile}
                                name="mobile"
                                // onChange={handleChange}
                                placeholder="mobile"
                            ></Input>
                        </FormGroup>
                        <ModalFooter>
                            <div>
                                {
                                    <Button type="submit" color="success">
                                        {isEdit ? "Edit" : "Add"}{" "}
                                    </Button>
                                }
                            </div>

                            <Button
                                color="secondary"
                                onClick={() => {
                                    toggle();
                                }}
                            >
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Form> */}
                </ModalBody>
            </Modal>
        </>
    )
}
export default RequestLeave;



