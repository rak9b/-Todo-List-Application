import React from 'react';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          {todo.completed ? (
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TodoItem;
