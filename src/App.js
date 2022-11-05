import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import mockTasks from "./mockTasks";

function App() {
  const [tasks, setTasks] = useState(mockTasks);

  return (
    <div className="App mx-auto max-w-screen-sm p-3 space-y-3 sm:mt-3 sm:border sm:border-slate-300 sm:rounded sm:shadow">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
