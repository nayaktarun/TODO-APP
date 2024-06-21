import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTask = () => {
    setTasks([...tasks, list]);
    setList("");
  };

  const handleRemove = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const handleComplete = (task) => {
    setCompletedTasks([...completedTasks, task]);
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div className="App">
      <h1>TO-DO-APP</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={list}
        onChange={(e) => setList(e.target.value)}
      />
      <button onClick={handleTask}>Add</button>
      <div className="item">
        <ul>
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <div className="button-contain">
                <button id="remove" onClick={() => handleRemove(task)}>
                  Remove
                </button>
                <button id="complete" onClick={() => handleComplete(task)}>
                  Complete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {completedTasks.length > 0 && (
        <div className="completed-item">
          <h2>Complete Tasks</h2>
          <ul>
            {completedTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
