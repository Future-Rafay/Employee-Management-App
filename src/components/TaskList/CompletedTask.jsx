import React from "react";

const CompletedTask = ({data}) => {
    return (
        <div className="flex-shrink-0 h-full p-4 bg-green-700 w-[350px] rounded-xl relative ">
            <div id="task-Details" className="flex flex-col overflow-x-auto h-[93%]">
                <div className="flex justify-between items-center">
                    <h3 className="bg-green-500 px-3 text-sm font-medium py-1 rounded">
                        {data.category}
                    </h3>
                    <h4 className="font-semibold text-sm">{data.taskDate}</h4>
                </div>
                <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
                <p className="text-sm mt-2 ">{data.description}</p>
                <div className="absolute right-2 bottom-2">
                    <button className="bg-green-500  w-28  text-sm font-medium py-1 rounded  hover:bg-green-800">
                        Completed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CompletedTask;




