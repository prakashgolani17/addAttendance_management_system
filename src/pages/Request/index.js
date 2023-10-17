// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import dayjs from 'dayjs';


// import { Table } from "reactstrap";
// import { useNavigate, Link } from 'react-router-dom';
// import { EMPLOYEE } from '../../helpers/url_helper';
// import { apiHelper } from '../../helpers/auth_helper';

// const RequestLeave = () => {

//     const [fetchAll, setFetchAll] = useState([]);
//     // const [customerData, setcustomerData] = useState({});
//     // const [requestLeaveData, setrequestLeaveData] = useState({})

//     const getAll = async () => {
//         try {
//             const result = await axios.get(EMPLOYEE, apiHelper());
//             console.log("result", result.data.leaveData);
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
import { Table, Button } from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import { EMPLOYEE } from '../../helpers/url_helper';
import { apiHelper } from '../../helpers/auth_helper';

const RequestLeave = () => {
    const [fetchAll, setFetchAll] = useState([]);

    const getAll = async () => {
        try {
            const result = await axios.get(EMPLOYEE, apiHelper());
            console.log('requestleave', result);
            setFetchAll(result.data.leaveData);
        } catch (error) {
            console.log(error, 'this is an error');
        }
    }

    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
            <div className="manage-leave">
                <Button color="success" className="mb-2 float-end">
                    <Link className="text-white text-decoration-none" to="/employee/leave/requestleave">
                        Add
                    </Link>
                </Button>
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
                        {fetchAll?.map((item, i) => (
                            <tr key={i}>
                                <td>{item?.userId?.srNo}</td>
                                <td>{dayjs(item?.startDate).format('DD/MM/YYYY')}</td>
                                <td>{dayjs(item?.endDate).format('DD/MM/YYYY')}</td>
                                <td>{item?.reason}</td>
                                <td>{item?.approvalStatus}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default RequestLeave;
