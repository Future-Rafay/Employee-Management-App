import React from "react";

import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import ActiveTask from "./ActiveTask";

const TaskList = ({ data }) => {
  // console.log(data);
  // console.log(data.taskCount);

  return (
    <div
      id="tasklist"
      className="flex items-center overflow-x-auto justify-start gap-4 flex-nowrap h-[55%] py-10 mt-10 w-full"
    >
      {data.tasks.map((elem,idx) => {
        if (elem.newTask) {
          return <NewTask  key={idx} data={elem} />;
        }
        if (elem.activeTask) {
          return <ActiveTask key={idx} data={elem} />;
        }
        if (elem.completedTask) {
          return <CompletedTask key={idx} data={elem} />;
        }
        if (elem.failedTask) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
