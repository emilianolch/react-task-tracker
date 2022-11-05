import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <div className="bg-gray-100 p-1 flex justify-between items-center">
      <div>
        <p className="font-medium">{task.text}</p>
        <p>{task.day}</p>
      </div>
      <FaTimes className="cursor-pointer" onClick={() => onDelete(task.id)} />
    </div>
  );
};

export default Task;
