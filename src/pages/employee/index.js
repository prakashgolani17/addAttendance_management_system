import React, { useState, useEffect } from 'react'
import { Table } from "reactstrap";
import { format } from 'date-fns';
import { useNavigate, Link } from 'react-router-dom';


const Addattendance = () => {

    const navigate = useNavigate()
    const [form, setform] = useState([{
        type: "",
        inTime: "",
        outTime: "",
        workNote: ""
    }])

    // useEffect(() => {
    //     curDate()
    // }, [])

    const cdate = new Date();
    console.log(cdate);


    // const getAll = async () => {
    //     try {
    //         const result = await axios.post(EMPLOYEE, apiHelper());
    //         console.log(result, "this is a customer result");
    //         // setcustomerData(result.data.customerData);
    //     } catch (error) {
    //         console.log(error, "this is error");
    //     }
    // };


    return (
        <div>
            <div className='manage-leave'>

                {/* <form>
                    <div class="form-group  my-2">
                        <label for="exampleFormControlInput1">working Date</label>
                        <input type="date" class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div> */}
                {/* <div class="form-group my-2">
                        <label for="exampleFormControlSelect1 "> Select Type</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>work</option>
                            <option>break</option>
                            <option>OverTime</option>
                            {/* <option>4</option> */}
                {/* <option>5</option> */}
                {/* </select> */}
                {/* </div>  */}

                {/* <div class="form-group my-2">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form> */}


                <Table className=" container-fluid " striped>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>WORK</th>
                            <th> INTIME</th>
                            <th>OUTTIME</th>
                            <th>WORK NOTE</th>
                            <th>Action</th>
                            <th>

                                {/* <button className="btn btn-success" onClick={() => navigate("/attendance")}>
                                    Add
                                </button> */}

                                <button className="btn btn-success mb-2 float-end">
                                    <Link className="text-white text-decoration-none" to="/employee/attendance">Add</Link>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {form?.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.type}</td>
                                    <td>{item.inTime}</td>
                                    <td>{item.outTime}</td>
                                    <td>{item.workNote}</td>
                                    <td>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Addattendance;