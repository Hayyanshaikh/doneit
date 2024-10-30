import React, { useState, useContext } from 'react';
import { TodoContext } from '../App';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Add tasks, separate by new lines..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="3"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
