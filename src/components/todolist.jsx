import React, { useState } from 'react';
const TodoList = ({ todos }) => {
    const [remainingTodos, setRemainingTodos] = useState(todos.filter(todo => !todo.completed));
    const [allTodos, setAllTodos] = useState(todos);
    const handleToggleCompleted = (id) => {
      const updatedTodos = todos.map(todo => {
        if (todo.Id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
  
      const remainingTodos = updatedTodos.filter(todo => !todo.completed);
      setRemainingTodos(remainingTodos);
    };
  
    const handleDeleteClick = () => {
      const updatedTodos = allTodos.filter(todo => !todo.completed);
      setAllTodos(updatedTodos);
      setRemainingTodos(updatedTodos.filter(todo => !todo.completed));
    }
  
    return (
      <div>
        <h2>Daftar Todos ({remainingTodos.length} belum selesai</h2>
        
          {todos.map(todo => (
            <ul key={todo.Id}>
                <input type="checkbox" checked={todo.completed} onChange={() => handleToggleCompleted(todo.Id)} />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title} - {todo.description}</span>
            </ul>
          ))}
        
        <button onClick={handleDeleteClick}>Hapus</button>
      </div>
    );
  };

const todolist = [
  {
    Id: 1,
    title: 'Belajar React',
    description: 'Belajar React Hooks, Components, Props, State, Lifecycle',
    completed: false
  },
  {
    Id: 2,
    title: 'Membuat Aplikasi React',
    description: 'Membuat Aplikasi TODO List',
    completed: true
  },
  {
    Id: 3,
    title: 'Membuat Aplikasi Chat',
    description: 'Membuat Aplikasi Chat menggunakan React dan Firebase',
    completed: false
  },
  {
    Id: 4,
    title: 'Belajar Node.js',
    description: 'Belajar membuat server menggunakan Node.js dan Express',
    completed: false
  },
];

function App() {
  return (
    <div className="App">
      <TodoList todos={todolist} />
    </div>
  );
}

export default App;

