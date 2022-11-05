import { FaTimes } from "react-icons/fa";
import Toggle from "./toggle";

const Task = ({ task, actions }) => {
  return (
    <div
      className={`${
        task.reminder ? "bg-blue-100" : "bg-gray-100"
      } p-1 flex justify-between items-center`}
    >
      <div>
        <p className="font-medium">{task.text}</p>
        <p className="mb-3">{task.day}</p>
        <Toggle
          checked={task.reminder}
          onToggle={() => actions.toggleReminder(task.id)}
        />
      </div>
      <FaTimes
        className="cursor-pointer"
        onClick={() => actions.delete(task.id)}
      />
    </div>
  );
};

export default Task;
