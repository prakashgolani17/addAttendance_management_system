// import React, { useState } from "react";
// import axios from "axios";

// import {
//     Modal,
//     ModalHeader,
//     ModalBody,
//     ModalFooter,
//     Input,
//     Label,
//     Form,
//     FormGroup,
//     Button,
//     InputGroup
// } from "reactstrap";
// import Flatpickr from "react-flatpickr";


// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useNavigate } from "react-router-dom";
// import { EMPLOYEE } from "../../helpers/url_helper";
// import { apiHelper } from "../../helpers/auth_helper";

// const Requistleave = () => {
//     const navigate = useNavigate();
//     // const [selectedDate, setSelectedDate] = useState(null);

//     // const [attendance, setAttendance] = useState({})
//     const [save, setSave] = useState(false);

//     const [form, setForm] = useState({
//         startDate: "",
//         endDate: "",
//         reason: "",
//     });
//     // const [values, setValues] = useState([
//     //     new DateObject().subtract(4, "days"),
//     //     new DateObject().add(4, "days")
//     // ])

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await axios.post(EMPLOYEE, apiHelper(form));
//             console.log(form);
//             setSave((preSaved) => !preSaved);
//             setForm("");
//             // console.log(result, "results")
//             // setcustomerData(result.data.data)
//         } catch (error) {
//             console.log(error, "error");
//         }

//         console.log(form);
//         // setForm("")
//         navigate("/employee/leave");
//     };



//     // const handleStartButtonClick = () => {
//     //     const currentTime = new Date();
//     //     setForm({
//     //         ...form,
//     //         startDate: currentTime,
//     //     });
//     // };
//     // const handleEndButtonClick = () => {
//     //     const currentTime = new Date();
//     //     setForm({
//     //         ...form,
//     //     });
//     // };

//     // console.log(form)

//     return (
//         <>
//             <div className="page-content w-100">
//                 <h2>Request Leave</h2>
//                 <Form onSubmit={handleSubmit}>
//                     <FormGroup row className="my-4">
//                         <Label for="exampleText">Reason:</Label>
//                         <Input
//                             type="textarea"
//                             id="exampleText"
//                             name="reason"
//                             defaultValue={form.reason}
//                             onChange={handleChange}
//                             placeholder="something Here..."
//                         />
//                     </FormGroup>


//                     <FormGroup className="mb-4">
//                         <Label>Date Range</Label>
//                         <InputGroup>
//                             <Flatpickr
//                                 className="form-control d-block"
//                                 placeholder="dd M,yyyy"
//                                 // defaultValue={form.endDate}

//                                 onChange={handleChange}

//                                 options={{
//                                     mode: "range",
//                                     dateFormat: "Y-m-d"
//                                 }}
//                             />
//                         </InputGroup>
//                     </FormGroup>



//                     <Button type="submit">submit</Button>
//                 </Form>
//             </div>
//         </>
//     );
// };

// export default Requistleave;

import React, { useState } from "react";
import axios from "axios";
import Flatpickr from "react-flatpickr";
// import "react-flatpickr/dist/themes/material_green.css"; // Import the Flatpickr CSS
import { useNavigate } from "react-router-dom";
import { EMPLOYEE } from "../../helpers/url_helper";
import { apiHelper } from "../../helpers/auth_helper";

const Requistleave = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        startDate: "",
        endDate: "",
        reason: "",
    });

    const handleChange = (date, name,) => {
        setForm({ ...form, [name]: date });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(EMPLOYEE, apiHelper(form));
            console.log(form);
            // Reset the form fields
            // setForm({
            //     startDate: null,
            //     endDate: null,
            //     reason: "",
            // });
            navigate("/employee/leave");
        } catch (error) {
            console.log(error, "error");
        }
    };

    return (
        <>
            <div className="page-content w-100">
                <h2>Request Leave</h2>
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
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Requistleave;
