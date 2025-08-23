import React from 'react';
import ToDoItem from './ToDoItem';
import { Task } from '../types';

interface ToDoListProps {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks, toggleComplete, removeTask }) => {
  // Mostra mensagem amigável se a lista estiver vazia
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">Nenhuma tarefa encontrada. Adicione uma nova!</p>
    );
  }

  // Renderiza o array de tarefas
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
