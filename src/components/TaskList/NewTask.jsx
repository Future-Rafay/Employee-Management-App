import React from "react";

const NewTask = ({ data }) => {
    return (
        <div className="h-full p-4 bg-blue-400 w-[350px] rounded-xl relative ">
            <div id="task-Details" className="flex flex-col overflow-auto h-[93%] ">
                <div className="flex justify-between items-center ">
                    <h3 className="bg-blue-700 px-3 text-sm font-medium py-1 rounded">
                        {data.category}
                    </h3>
                    <h4 className="font-semibold text-sm">{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                <p className="text-sm mt-2 ">{data.description}</p>
                <div className="absolute right-5 bottom-2">
                    <button
                        className="bg-green-500 px-3 text-sm font-medium py-1 rounded ml-2 hover:bg-green-700">
                        Accept
                    </button>
                    <button
                        className="bg-red-500 px-3 text-sm font-medium py-1 rounded ml-1 hover:bg-red-700">
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewTask;


