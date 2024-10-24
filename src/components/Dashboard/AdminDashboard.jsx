import React from "react";
import EmployHeader from "../others/EmployHeader";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
    return (
        <div className="h-screen w-full p-10">
            <EmployHeader />
            <CreateTask />
            <AllTask />
        </div>
    );
};

export default AdminDashboard;
