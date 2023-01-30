import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
        // tasks always ask for a unique id
      ))}
    </>
  );
};

export default Tasks;

// import Task from "./Task";

// const Tasks = ({ tasks, onDelete, onToggle }) => {
//   return (
//     <>
//       {tasks.map((task, index) => (
//         <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
//       ))}
//     </>
//   );
// };

// export default Tasks;
