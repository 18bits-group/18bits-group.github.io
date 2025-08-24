import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


import ToDoList from './components/ToDoList';
import type { Task } from './types';

function App() {

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Estudar React', completed: false },
    { id: 2, title: 'Fazer o projeto To Do List', completed: true },
    { id: 3, title: 'Comprar pão', completed: false },
  ]);


  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };


  const addTask = (title: string) => {};


  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev"
          target="_blank">
          <img src={viteLogo} className="logo"
            alt="Vite logo" />
        </a>
        <a href="https://react.dev"
          target="_blank">
          <img src={reactLogo} className="logo react"
            alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code>
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


      <hr style={{ margin: '40px 0' }} />
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8 rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-4">Teste de Lista de Tarefas (Etapas 2 & 4)</h2>
        <ToDoList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
      </div>
  
    </>
  );
}

export default App;
