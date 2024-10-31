import React from "react";

const FailedTask = ({data}) => {
    return (
        <div className="flex-shrink-0 h-full p-4 bg-red-700 w-[350px] rounded-xl relative ">
            <div id="task-Details" className="flex flex-col overflow-x-auto h-[93%]">
                <div className="flex justify-between items-center">
                    <h3 className="bg-red-500 px-3 text-sm font-medium py-1 rounded">
                        {data.category}
                    </h3>
                    <h4 className="font-semibold text-sm">{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                <p className="text-sm mt-2 ">{data.description}</p>
                <div className="absolute right-2.5 bottom-2">
                    <button className="bg-red-500 w-28 text-sm font-medium py-1 rounded  hover:bg-red-800">
                        Failed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FailedTask;


