import { useState } from "react";
import { Check } from "lucide-react";
import "./App.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Tarefa 3", completed: true },
    { id: 2, text: "Concluída", completed: true },
    { id: 3, text: "Essa semana o projeto sai?", completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="app">
      <h1>To Do List</h1>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-content">
              <button
                onClick={() => toggleTask(task.id)}
                className={`task-checkbox ${task.completed ? "completed" : "pending"}`}
              >
                {task.completed && <Check size={16} />}
              </button>

              <span
                className={`task-text ${task.completed ? "completed" : "pending"}`}
              >
                {task.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
