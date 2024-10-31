import React from "react";

import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import ActiveTask from "./ActiveTask";

const TaskList = ({ data, updateData }) => {
  const handleStatusChange = (taskId, status) => {
    const updatedTasks = data.tasks.map((task) => {
      if (task.taskNumber === taskId) {
        if (task.newTask) data.taskCount.newTask -= 1;
        if (task.activeTask) data.taskCount.activeTask -= 1;
        if (task.completedTask) data.taskCount.completedTask -= 1;
        if (task.failedTask) data.taskCount.failedTask -= 1;

        const updatedTask = {
          ...task,
          newTask: status === false,
          activeTask: status === "active",
          completedTask: status === "completed",
          failedTask: status === "failed",
        };

        if (status === "active") data.taskCount.activeTask += 1;
        if (status === "completed") data.taskCount.completedTask += 1;
        if (status === "failed") data.taskCount.failedTask += 1;

        return updatedTask;
      }
      return task;
    });

    const updatedData = {
      ...data,
      tasks: updatedTasks,
    };

    updateData(updatedData);
  };

  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      {data.tasks.map((task) => {
        if (task.newTask) {
          return (
            <NewTask
              key={task.taskNumber}
              data={task}
              onAccept={() => handleStatusChange(task.taskNumber, "active")}
            />
          );
        }
        if (task.activeTask) {
          return (
            <ActiveTask
              key={task.taskNumber}
              data={task}
              onComplete={() =>
                handleStatusChange(task.taskNumber, "completed")
              }
              onFail={() => handleStatusChange(task.taskNumber, "failed")}
            />
          );
        }
        if (task.completedTask) {
          return <CompletedTask key={task.taskNumber} data={task} />;
        }
        if (task.failedTask) {
          return <FailedTask key={task.taskNumber} data={task} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
