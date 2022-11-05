import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
