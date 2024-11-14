import React, { useContext } from 'react';
import { TodoContext } from '../App';

function TodoList() {
  const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);

  // Total and completed tasks
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.isCompleted).length;

  // Separate incomplete and completed todos
  const incompleteTodos = todos
    .map((todo, index) => ({ ...todo, originalIndex: index }))
    .filter(todo => !todo.isCompleted);
  const completedTodos = todos
    .map((todo, index) => ({ ...todo, originalIndex: index }))
    .filter(todo => todo.isCompleted);

  return (
    <div>
      <div className='total-tasks'>
        <p>Total Tasks</p>
        <p>Completed <span>{completedTasks}</span> of <span>{totalTasks}</span></p>
      </div>

      {todos.length === 0 ? (
        // Show this message if there are no todos at all
        <div className='no-tasks'>No Tasks Available</div>
      ) : (
        <ul>
          {/* Incomplete Todos */}
          {incompleteTodos.length > 0 ? (
            incompleteTodos.map((todo) => (
              <li key={todo.originalIndex} className={todo.isCompleted ? 'completed' : ''}>
                {todo.text}
                <div className="actions">
                  <button onClick={() => toggleTodo(todo.originalIndex)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#ff8d67" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </button>
                  <button onClick={() => deleteTodo(todo.originalIndex)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className='no-tasks'>All tasks are completed!</div>
          )}

          {/* Completed Todos with Heading */}
          {completedTodos.length > 0 && <div className='total-tasks'><p>Completed</p></div>}
          {completedTodos.length > 0 ? (
            completedTodos.map((todo) => (
              <li key={todo.originalIndex} className='completed'>
                {todo.text}
                <div className="actions">
                  <button onClick={() => toggleTodo(todo.originalIndex)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#ff8d67" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M18 6l-12 12" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </button>
                  <button onClick={() => deleteTodo(todo.originalIndex)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 7l16 0" />
                      <path d="M10 11l0 6" />
                      <path d="M14 11l0 6" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className='no-tasks'>No tasks completed yet.</div>
          )}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
