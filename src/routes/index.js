import Login from "../pages/authentication/Login";
import Employee from "../pages/employee"
import Admin from "../pages/admin"
import Attendance from "../pages/employee/Attendance";
import Request from "../pages/Request";
import Requestleave from "../pages/Request/Requistleave";
import ManageRequestLeave from "../pages/admin/ManageRequestLeave";
import ManageLeave from "../pages/admin/manageLeave";
import AddManageLeave from "../pages/admin/manageLeave/AddManageLeave";
import Dashbord from "../pages/Dashbord"
import { ROLES } from '../operations/constants';

const publicRoutes = [

    // employee
    {
        // role: "employee",
        path: "/employee",
        component: Employee

    },
    {
        // role: ROLES.EMPLOYEE,
        path: "/employee/attendance",
        component: Attendance
    },
    {
        // role: "employee",
        path: "/employee/leave",
        component: Request
    },
    {
        // role: ROLES.EMPLOYEE,
        path: "/employee/leave/requestleave",
        component: Requestleave
    },
    {
        // role: ROLES.EMPLOYEE,
        path: "/",
        component: Dashbord
    },

    // admin
    {
        // role: "admin",
        path: "/admin",
        component: Admin
    },
    {
        // role: "admin",
        path: "/admin/leave",
        component: ManageRequestLeave
    },
    {
        // role: "admin",
        path: "/admin/manageLeave",
        component: ManageLeave
    },
    {
        // role: "admin",
        path: "/admin/manageLeave/addManageLeave",
        component: AddManageLeave
    }

];


const HomePaths = {
    // EMPLOYEE: Paths.employeeHome,
    "employee": "/employee",
    "admin": "/admin",
};

const authRoutes = [


    { path: "/login", component: Login },
    // { path: "/signup", component: SignUp },
];
export { authRoutes, publicRoutes };
