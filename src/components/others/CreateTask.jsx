import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [createdNewTask, setcreatedNewTask] = useState({});

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignTo, setAssignTo] = useState("");
    const [category, setCategory] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            taskDate,
            category,
            newTask: true,
            activeTask: false,
            completedTask: false,
            failedTask: false,
        };

        setcreatedNewTask(newTask);

        const updatedUserData = userData.map((elem) => {
            if (assignTo === elem.name) {
                elem.tasks.unshift(newTask);
                elem.taskCount.newTask += 1;
                elem.taskCount.totalTasks += 1;
            }
            return elem;
        });

        setUserData(updatedUserData);

        localStorage.setItem("employees", JSON.stringify(updatedUserData));

        setTitle("");
        setDescription("");
        setTaskDate("");
        setCategory("");
        setAssignTo("");
    };
    return (
        <div>
            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }}
                className="flex flex-wrap w-full items-start justify-between bg-[#1C1C1C] py-8 mt-7 rounded-lg"
            >
                <div className="px-5 py-0 w-1/2 bg--400">
                    <fieldset className="mt-4 px-2 ">
                        <legend className="text-white mb-0.5 text-lg">Task Title</legend>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            className="text-base bg-transparent px-2 py-1 rounded w-[60%] border-[1px]  border-gray-400 outline-none  "
                            type="text"
                            placeholder="Make a UI design"
                        />
                    </fieldset>
                    <fieldset className="mt-4 px-2 ">
                        <legend className="text-white mb-0.5 text-lg">Date</legend>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value);
                            }}
                            className="text-base bg-transparent px-2 py-1 rounded w-[60%] border-[1px] border-gray-400 outline-none placeholder: text-gray-400"
                            type="date"
                            placeholder="dd/mm/yyyy"
                        />
                    </fieldset>
                    <fieldset className="mt-4 px-2 ">
                        <legend className="text-white mb-0.5 text-lg">Assign To</legend>
                        <select
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="text-base bg-transparent px-2 py-1 rounded w-[60%] border-[1px] border-gray-400 outline-none"
                        >
                            <option className="text-white bg-[#1c1c1c]" value="" disabled>
                                Select Employee
                            </option>
                            <option className="text-white bg-[#1c1c1c]" value="Ali Khan">
                                Ali Khan
                            </option>
                            <option className="text-white bg-[#1c1c1c]" value="Fatima Riaz">
                                Fatima Riaz
                            </option>
                            <option className="text-white bg-[#1c1c1c]" value="Ayesha Ahmed">
                                Ayesha Ahmed
                            </option>
                            <option className="text-white bg-[#1c1c1c]" value="Bilal Hussain">
                                Bilal Hussain
                            </option>
                            <option className="text-white bg-[#1c1c1c]" value="Hamza Sheikh">
                                Hamza Sheikh
                            </option>
                        </select>
                    </fieldset>
                    <fieldset className="mt-4 px-2 ">
                        <legend className="text-white mb-0.5 text-lg">Category</legend>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                            className="text-base bg-transparent px-2 py-1 rounded w-[60%] border-[1px] border-gray-400 outline-none "
                            type="text"
                            placeholder="Design ,Development ,etc..."
                        />
                    </fieldset>
                </div>
                <div className="w-1/2 flex flex-col items-start justify-center px-5 py-0">
                    <fieldset className=" px-2 w-[80%]">
                        <legend className="text-white mb-0.5 text-lg">Description</legend>
                        <textarea
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            className="w-full bg-transparent px-2 py-2 rounded border-[1px] border-gray-400 outline-none "
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Detailed description of Task (Max 500 words)"
                        ></textarea>
                    </fieldset>
                    <button className="w-[79%] text-lg rounded-md bg-emerald-500 hover:bg-emerald-600 py-3 mt-3 ml-2">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
