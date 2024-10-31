import React from "react";

import NewTask from "./NewTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import ActiveTask from "./ActiveTask";

const TaskList = ({ data }) => {
  
  return (
    
    <div
      id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'
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
    // <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
    //         {data.tasks.map((elem, idx) => {
    //             if (elem.active) {
    //                 return <AcceptTask key={idx} data={elem} />
    //             }
    //             if (elem.newTask) {
    //                 return <NewTask key={idx} data={elem} />
    //             }
    //             if (elem.completed) {
    //                 return <CompletedTask key={idx} data={elem} />
    //             }
    //             if (elem.FailedTask) {
    //                 return <FailedTask key={idx} data={elem} />
    //             }

    //         })}
    //     </div>
   
  );
};

export default TaskList;

// import React, { useState } from "react";
// import NewTask from "./NewTask";
// import ActiveTask from "./ActiveTask";
// import CompletedTask from "./CompletedTask";
// import FailedTask from "./FailedTask";

// const TaskList = ({ data }) => {
//     const [tasks, setTasks] = useState(data.tasks);

//     const handleAcceptTask = (taskId) => {
//         setTasks((prevTasks) =>
//             prevTasks.map((task) =>
//                 task.id === taskId
//                     ? { ...task, newTask: false, activeTask: true }
//                     : task
//             )
//         );
//     };

//     const handleMarkAsCompleted = (taskId) => {
//         setTasks((prevTasks) =>
//             prevTasks.map((task) =>
//                 task.id === taskId
//                     ? { ...task, activeTask: false, completedTask: true }
//                     : task
//             )
//         );
//     };

//     const handleMarkAsFailed = (taskId) => {
//         setTasks((prevTasks) =>
//             prevTasks.map((task) =>
//                 task.id === taskId
//                     ? { ...task, activeTask: false, failedTask: true }
//                     : task
//             )
//         );
//     };

//     const handleDeleteTask = (taskId) => {
//         setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
//     };

//     return (
//         <div id="tasklist" className="h-[75%] overflow-auto mt-4">
//             <div
//                 id="tasklist"
//                 className="flex items-center overflow-visible justify-center gap-4 flex-wrap h-[450px] py-10 mt-10 w-full"
//             >
//                 {tasks.map((task) => {
//                     if (task.newTask) {
//                         return (
//                             <NewTask
//                                 key={task.id}
//                                 data={task}
//                                 onAccept={() => handleAcceptTask(task.id)}
//                                 onDelete={() => handleDeleteTask(task.id)}
//                             />
//                         );
//                     }
//                     if (task.activeTask) {
//                         return (
//                             <ActiveTask
//                                 key={task.id}
//                                 data={task}
//                                 onMarkAsCompleted={() => handleMarkAsCompleted(task.id)}
//                                 onMarkAsFailed={() => handleMarkAsFailed(task.id)}
//                             />
//                         );
//                     }
//                     if (task.completedTask) {
//                         return (
//                             <CompletedTask
//                                 key={task.id}
//                                 data={task}
//                                 onDelete={() => handleDeleteTask(task.id)}
//                             />
//                         );
//                     }
//                     if (task.failedTask) {
//                         return (
//                             <FailedTask
//                                 key={task.id}
//                                 data={task}
//                                 onDelete={() => handleDeleteTask(task.id)}
//                             />
//                         );
//                     }
//                 })}
//             </div>
//         </div>
//     );
// };

// export default TaskList;

