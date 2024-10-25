import React from 'react'

const TaskNumbers = ({data}) => {
    return (
        <div className=" mt-10 flex justify-between gap-5 screen">
            <div className="py-6 px-9 w-[45%] bg-blue-400 rounded-xl ">
                <h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
                <h3 className="text-xl font-medium">New Task</h3>
            </div>
            <div className="py-6 px-9 w-[45%] bg-green-400 rounded-xl ">
                <h2 className="text-3xl font-semibold">{data.taskCount.completedTask}</h2>
                <h3 className="text-xl font-medium">Completed Task</h3>
            </div>
            <div className="py-6 px-9 w-[45%] bg-yellow-400 rounded-xl ">
                <h2 className="text-3xl font-semibold">{data.taskCount.activeTask}</h2>
                <h3 className="text-xl font-medium">Active Task</h3>
            </div>
            <div className="py-6 px-9 w-[45%] bg-red-400 rounded-xl ">
                <h2 className="text-3xl font-semibold">{data.taskCount.failedTask}</h2>
                <h3 className="text-xl font-medium">Failed Task</h3>
            </div>
            
        </div>
    )
}

export default TaskNumbers;