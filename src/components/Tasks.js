import Task from "./Task";

const Tasks = ({ tasks, actions }) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} actions={actions} />
      ))}
    </div>
  );
};

export default Tasks;
