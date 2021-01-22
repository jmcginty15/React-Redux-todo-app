import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todos }) => {
    return (
        <div className="TodoList">
            <h2 className="TodoList-header">Todo:</h2>
            <ul>
                {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoList;