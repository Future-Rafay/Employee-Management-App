import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const AuthData = useContext(AuthContext);

  return (
    <div
      id="admin-tasklist"
      className="bg-[#1C1C1C] px-6 py-4 mt-5 rounded-lg overflow-auto h-[40%] "
    >
      <h1 className="bg-red-500 p-3 text-center text-2xl  font-semibold">
        Employees Report
      </h1>
      <div>
        <div className="flex bg-gray-400 p-4 mb-1 ">
          <h2 className="text-xl font-semibold w-1/5 text-center">
            Employee Name
          </h2>
          <h2 className="text-xl font-semibold w-1/5 text-center">New Tasks</h2>
          <h2 className="text-xl font-semibold w-1/5 text-center">
            Active Tasks
          </h2>
          <h2 className="text-xl font-semibold w-1/5 text-center">
            Completed Tasks
          </h2>
          <h2 className="text-xl font-semibold w-1/5 text-center">
            Failed Tasks
          </h2>
        </div>

        {AuthData.employees.map((elem,idx) => {
          return (
            <div key={idx} className="flex justify-evenly items-center bg-emerald-400 mb-1 p-3  ">
              <h2 className="text-lg font-medium w-1/5 text-center underline  ">
                {elem.name}
              </h2>
              <h2 className="text-lg font-medium w-1/5 text-center  ">
                {elem.taskCount.newTask}
              </h2>
              <h2 className="text-lg font-medium w-1/5 text-center  ">
                {elem.taskCount.activeTask}
              </h2>
              <h2 className="text-lg font-medium w-1/5 text-center  ">
                {elem.taskCount.completedTask}
              </h2>
              <h2 className="text-lg font-medium w-1/5 text-center  ">
                {elem.taskCount.failedTask}
              </h2>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default AllTask;
