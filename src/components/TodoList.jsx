import React, { useContext } from 'react';
import { TodoContext } from '../App';

function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={todo.isCompleted ? 'completed' : ''}>
          {todo.text}
          <div className="actions">
            <button onClick={() => toggleTodo(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
            <button onClick={() => deleteTodo(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
