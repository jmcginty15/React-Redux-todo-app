import Edit from './Edit';
import { useDispatch } from 'react-redux';
import './Todo.css';

const Todo = ({ todo }) => {
    const dispatch = useDispatch();

    const toggleComplete = () => {
        const type = todo.complete ? 'UNCOMPLETE' : 'COMPLETE';
        dispatch({ type: type, payload: todo.id });
    }

    const removeTodo = () => {
        dispatch({ type: 'REMOVE', payload: todo.id });
    }

    const editTodo = () => {
        dispatch({ type: 'EDIT', payload: todo.id });
    }

    return (
        <li className="Todo">
            {todo.editing ? <Edit todo={todo} /> : (
                <span>
                    <span className={todo.complete ? 'Todo-complete' : null}>{todo.text}</span>
                    <button className="Todo-button" onClick={removeTodo}>Remove</button>
                    <button className="Todo-button" onClick={editTodo}>Edit</button>
                    <button className="Todo-button" onClick={toggleComplete}>Mark {todo.complete ? 'in' : null}complete</button>
                </span>
            )}
        </li>
    )
}

export default Todo;