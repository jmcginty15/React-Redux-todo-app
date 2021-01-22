import { useSelector } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  const todos = useSelector(state => state.todos);

  return (
    <div className="App">
      <TodoList todos={todos} />
      <TodoForm />
    </div>
  );
}

export default App;
