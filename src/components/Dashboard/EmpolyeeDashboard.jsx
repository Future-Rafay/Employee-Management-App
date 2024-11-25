import React, { useState, useEffect } from "react";
import Header from "../others/Header";
import TaskNumbers from "../others/TaskNumbers";
import TaskList from "../TaskList/TaskList";

const EmpolyeeDashboard = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const employeeData = JSON.parse(localStorage.getItem("employees"));
    // if(employeeData === null ){
    //   setData(JSON.parse(localStorage.getItem("employees")));
    // }else{
    //   setData(employeeData)
    // }
    setData(employeeData);
  }, []);

  const updateData = (newData) => {
    localStorage.setItem("ChangedEmployeeData", JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskNumbers data={props.data} />
      <TaskList data={props.data} updateData={updateData} />
    </div>
  );
};

export default EmpolyeeDashboard;
