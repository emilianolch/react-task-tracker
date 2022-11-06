import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const taskActions = {
    delete: (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
    },
    toggleReminder: (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: !task.reminder } : task
        )
      );
    },
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Math.random() }]);
    console.log(task);
  };

  return (
    <div className="App mx-auto max-w-screen-sm p-3 space-y-3 sm:mt-3 sm:border sm:border-slate-300 sm:rounded sm:shadow">
      <Header />
      <AddTask submitTask={addTask} />
      <Tasks tasks={tasks} actions={taskActions} />
    </div>
  );
}

export default App;
