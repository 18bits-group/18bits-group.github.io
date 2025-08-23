import React from 'react';
import { Task }   from '../types';

interface ToDoItemProps {
  task: Task;
  toggleComplete: (id: number) => void;
  removeTask: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task, toggleComplete, removeTask }) => {
  const textClass = task.completed ? 'text-gray-400 line-through' : 'text-gray-800';
  const statusText = task.completed ? 'Concluída' : 'Pendente';
  const statusColor = task.completed ? 'text-green-500' : 'text-yellow-500';

  return (
    <li className="flex items-center bg-gray-50 p-4 rounded-md shadow-sm">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
      />
      <span className={`flex-1 ml-4 ${textClass} text-lg`}>
        {task.title}
      </span>
      <span className={`text-sm font-semibold ml-4 ${statusColor}`}>
        {statusText}
      </span>
      <button
        onClick={() => removeTask(task.id)}
        className="ml-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  );
};

export default ToDoItem;