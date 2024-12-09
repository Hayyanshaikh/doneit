import React, { createContext, useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodos = text
      .split('\n')
      .filter((t) => t.trim() !== '')
      .map((line) => ({
        text: line,
        isCompleted: false,
      }));
    setTodos([...todos, ...newTodos]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      <div className="App">
        <h1>Advanced Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
