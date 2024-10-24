import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <form className="flex flex-wrap w-full items-start justify-between bg-[#1C1C1C] py-8 mt-7 rounded-lg">
                <div className="px-5 py-0 w-1/2 bg--400">
                    <fieldset className="mt-4 px-2 ">
                        <legend className="text-white mb-0.5 text-lg">
                            Task Title
                        </legend>
                        <input
                            className="text-base bg-transparent px-2 py-1 rounded w-[60%] border-[1px]  border-gray-400 outline-none  "
                            type="text"
                            placeholder="Make a UI design"
                        />
                    </fieldset>
                    <fieldset className="mt-4 px-2 ">
                        <legend className="text-white mb-0.5 text-lg">Date</legend>
                        <input
                            className="text-base bg-transparent px-2 py-1 rounded w-[60%] border-[1px] border-gray-400 outline-none placeholder: text-gray-400"
                            type="date"
                            placeholder="dd/mm/yyyy"
                        />
                    </fieldset>
                    <fieldset className="mt-4 px-2 ">
                        <legend className="text-white mb-0.5 text-lg">
                            Asign To
                        </legend>
                        <input
                            className="text-base bg-transparent px-2 py-1 rounded w-[60%] border-[1px] border-gray-400 outline-none "
                            type="text"
                            placeholder="Employe username"
                        />
                    </fieldset>
                    <fieldset className="mt-4 px-2 ">
                        <legend className="text-white mb-0.5 text-lg">
                            Category
                        </legend>
                        <input
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
                            className="w-full bg-transparent px-2 py-2 rounded border-[1px] border-gray-400 outline-none "
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Detailed description of Task (Max 500 words)"
                        ></textarea>
                    </fieldset>
                    <button className="w-[79%] text-lg rounded-md bg-emerald-500 hover:bg-emerald-600 py-3 mt-3 ml-2">Create Task</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask