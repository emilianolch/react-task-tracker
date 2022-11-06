const API = process.env.REACT_APP_API;

const api = {
  fetchTasks: async () => {
    const res = await fetch(`${API}/tasks`);
    return res.json();
  },

  addTask: async (task) => {
    const res = await fetch(`${API}/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return res.json();
  },

  deleteTask: async (id) => {
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" });
  },

  updateTask: async (id, attributes) => {
    const res = await fetch(`${API}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(attributes),
    });
    return res.json();
  },
};

export default api;
