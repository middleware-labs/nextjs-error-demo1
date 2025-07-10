import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ color: 'red' }}>Delete</button>
    </li>
  );
};

export default TodoItem; 