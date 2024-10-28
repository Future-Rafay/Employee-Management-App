import React from "react";

import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import ActiveTask from "./ActiveTask";

const TaskList = ({ data }) => {
  
  return (
    <div id="tasklist" className="h-[75%] overflow-auto mt-4 ">
    <div
      id="tasklist"
      className="flex items-center overflow-visible justify-center gap-4 flex-wrap h-[450px] py-10 mt-10 w-full"
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
    </div>
  );
};

export default TaskList;
