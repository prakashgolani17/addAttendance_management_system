import React, { useState, useParams, useEffect } from "react";
import axios from "axios";
import Flatpickr from "react-flatpickr";
// import "react-flatpickr/dist/themes/material_green.css"; // Import the Flatpickr CSS
import { useNavigate } from "react-router-dom";
import { ADMINLEAVE, EMPLOYEE } from "../../../helpers/url_helper";
import { apiHelper } from "../../../helpers/auth_helper";


const Requistleave = () => {

    // const { id } = useParams();


    const navigate = useNavigate();
    const [form, setForm] = useState({
        startDate: "",
        endDate: "",
        reason: "",
    });
    const [isEdit, setisEdit] = useState(false);


    const handleChange = (date, name,) => {
        setForm({ ...form, [name]: date });
    };


    const getAll = async () => {
        try {
            const result = await axios.get(ADMINLEAVE, apiHelper());
            console.log("Addleave", result);
        } catch (error) {
            console.log(error, "this is error");
        }
    };
    useEffect(() => {
        getAll();
    }, []);


    const handleAddLeave = async (e) => {
        // e.preventDefault();
        try {
            await axios.post(ADMINLEAVE, apiHelper(form));
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


    const handleEditLeave = async (id) => {
        try {
            // const response = await axios.put(`${ADMINLEAVE}/${_id}`, apiHelper(form), apiHelper());
            // console.log(response, "response is here");
            // console.log(id, "id is here");
            // setSave((preSaved) => !preSaved);
            // toggle();
            // setForm("");
        } catch (error) {
            console.log();
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            // handleEditLeave(id);
            // console.log(id, "id is here");
        } else {
            handleAddLeave();
        }
    }

    console.log("form", form)

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

                    <div>
                        {
                            <button className="btn btn-success" type="submit" color="success">
                                {isEdit ? "Edit" : "Add"}{" "}
                            </button>
                        }
                    </div>
                </form>
            </div>
        </>
    );
};

export default Requistleave;
