
import React, { Children, Component, useState } from 'react'
import Employee from "../pages/employee"
// import { FaBars } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";

// import { AiFillCopy } from "react-icons/ai";
// import { TbChecklist } from "react-icons/tb";
// import { TiClipboard } from "react-icons/ti";
// import {
//     MdSpatialAudioOff,
//     // MdSupervisedUserCircle,
//     // MdOutlineLogout
// } from "react-icons/md";

import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { NavLink, Link, useNavigate } from 'react-router-dom';
// import Productlist from '../pages/Productlist'
// import { colors } from '@mui/material';
// import Navbar from '../Sidebar/Navbar';
// import { USER_ROLES } from '../../operations/constants';

const Sidebar = ({ Children, Component, title }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(true)
    const toggel = () => setOpen(!open)

    const employee_listItem = [

        {
            path: "/",
            name: "Dashboard",
            icon: <DashboardIcon />
        },

        {
            path: "/employee",
            name: "Add Attendance",
            icon: <AppRegistrationIcon />
        },

        {
            path: "/employee/leave",
            name: "Request leave",
            icon: <ExitToAppIcon />

        },
        {
            path: "/admin",
            name: "admin",
            icon: <AdminPanelSettingsIcon />

        },

        {
            path: "/admin/leave",
            name: "ManageRequestLeave",
            icon: <RequestPageIcon />

        },
        {
            path: "/admin/manageLeave",
            name: "ManageLeave",
            icon: <ManageAccountsIcon />

        }

    ]

    // const admin_listitem = [

    // ]



    // const USER_ROLES = ADMIN ? "/admin" ? "employee"
    // const ListMap = {
    //     [USER_ROLES.EMPLOYEE]: employee_listItem,
    //     [USER_ROLES.ADMIN]: admin_listitem,
    // };

    // const ListMap = {
    //     [USER_ROLES.MANAGER]: ManagerList,
    //     [USER_ROLES.POC]: POCList,
    //     [USER_ROLES.ADMIN]: AdminList,
    // };

    return (
        <>
            <div>{title}</div>
            {/* <div className='fixed-top'> */}
            <div style={{ width: open ? "250px" : "70px" }} className='sidebar'>
                <div className='top_section'>
                    {/* <h1 className='logo' style={{ width: open ? "250px" : "0px" }}> */}
                    {/* Logo - */}
                    {/* </h1> */}
                    <div className='bars'>
                        {/* <FaBars onClick={toggel} /> */}
                    </div>
                    <div className='container-fluid my-3 mx-2'>
                        <button className='btn btn-primary ' style={{ width: "80px" }} onClick={() => {
                            localStorage.clear("token")
                            navigate("/login")
                        }}>
                            {/* <MdOutlineLogout size={30} /> */} logout
                        </button>
                    </div>
                    {
                        employee_listItem.map((item, index) => (
                            // <div className='sidebarcomp'>
                            <NavLink to={item.path} key={index} className="link"
                            // activeclassName="active" 
                            >

                                <div className='icon'>{item.icon}</div>
                                <div className='link_text'>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{Children}</main>
            </div >
            {/* <div className='d-flex'>
                <Employee />

            </div> */}
        </>
    )
}

export default Sidebar;



