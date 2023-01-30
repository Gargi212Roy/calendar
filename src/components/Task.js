import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      // if the task.reminder is true reminder class is also added to teak class
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;

// import { FaTimes } from "react-icons/fa";

// const Task = ({ task, onDelete, onToggle }) => {
//   return (
//     <div
//       className={`task ${task.reminder && "reminder"}`}
//       onDoubleClick={() => onToggle(task.id)}
//     >
//       <h3>
//         {task.text}{" "}
//         <FaTimes
//           style={{ color: "red", cursor: "pointer" }}
//           onClick={() => onDelete(task.id)}
//         />
//       </h3>
//       <p>{task.day}</p>
//     </div>
//   );
// };

// export default Task;

// // {
// //   "tasks": [
// //     {
// //       "id": 1,
// //       "text": "Date Night",
// //       "day": "Feb 14th at 2:30 p.m.",
// //       "reminder": true
// //     },
// //     {
// //       "id": 1,
// //       "text": "Date Night",
// //       "day": "Feb 14th at 2:30 p.m.",
// //       "reminder": true
// //     },
// //     {
// //       "id": 1,
// //       "text": "Date Night",
// //       "day": "Feb 14th at 2:30 p.m.",
// //       "reminder": true
// //     }
// //   ],
// //   "comments": [
// //     {
// //       "id": 1,
// //       "body": "some comment",
// //       "postId": 1
// //     }
// //   ]
// // }
