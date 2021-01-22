import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import './TodoForm.css';

const TodoForm = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const newTodo = evt.target.value;
        setTodo(newTodo);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = { id: uuid(), text: todo, complete: false, editing: false };
        setTodo('');
        dispatch({ type: 'ADD', payload: newTodo });
    }

    return (
        <div className="TodoForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New todo item:</label>
                <span className="TodoForm-input">
                    <input type="text" placeholder="todo" value={todo} onChange={handleChange} />
                    <button className="TodoForm-button" type="submit">Add</button>
                </span>
            </form>
        </div>
    )
}

export default TodoForm;