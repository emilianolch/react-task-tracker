import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import api from "./api";

function App() {
  const [tasks, setTasks] = useState([]);

  const taskActions = {
    delete: async (id) => {
      await api.deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    },
    toggleReminder: async (task) => {
      await api.updateTask(task.id, { reminder: !task.reminder });
      setTasks(
        tasks.map((t) =>
          t.id === task.id ? { ...t, reminder: !t.reminder } : t
        )
      );
    },
  };

  const addTask = async (task) => {
    const newTask = await api.addTask(task);
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    (async () => setTasks(await api.fetchTasks()))();
  });

  return (
    <div className="App mx-auto max-w-screen-sm p-3 space-y-3 sm:mt-3 sm:border sm:border-slate-300 sm:rounded sm:shadow">
      <Header />
      <AddTask submitTask={addTask} />
      <Tasks tasks={tasks} actions={taskActions} />
    </div>
  );
}

export default App;
