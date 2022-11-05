import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className="bg-gray-100 p-1 flex justify-between items-center">
      <div>
        <p className="font-medium">{task.text}</p>
        <p>{task.day}</p>
      </div>
      <FaTimes />
    </div>
  );
};

export default Task;