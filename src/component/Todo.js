import axios from "axios";
import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskImage, setTaskImage] = useState("");

  const handleAddTask =  async () => {
    if (!taskTitle || !taskDescription) {
      alert("Please fill in both the title and description.");
      return;
    }
    const response = await axios.get('http://localhost:5000/api/todos', {
      headers : {
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmI4NWE0OTM3M2U5MzBiMDZkYzlmNSIsImlhdCI6MTczNTQ1NDMzMSwiZXhwIjoxNzM1NDU3OTMxfQ.PJxNipi25TAkvdUHQya9HBxYOireG5Glw9D2iW6AqZs'
      }
    });
    console.log(response);
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      image: taskImage || null,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setTaskDescription("");
    setTaskImage("");
    setTasks(response.data)
  };

  const handleCompleteTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do App</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={taskImage}
          onChange={(e) => setTaskImage(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={handleAddTask} style={{ padding: "5px 10px" }}>
          Add Task
        </button>
      </div>

      {tasks.map(task => (
        <div
          key={task.id}
          style={{
            border: "1px solid #ccc",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: task.completed ? "#d4edda" : "#fff",
          }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {task.image && <img src={task.image} alt="Task" style={{ width: "100px", height: "100px" }} />}
          <div style={{ marginTop: "10px" }}>
            <button onClick={() => handleCompleteTask(task.id)}>
              {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
            <button onClick={() => handleDeleteTask(task.id)} style={{ marginLeft: "10px" }}>
              Delete Task
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
