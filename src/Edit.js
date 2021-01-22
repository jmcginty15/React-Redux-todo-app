import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Edit.css';

const Edit = ({ todo }) => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState(todo.text);

    const handleChange = (evt) => {
        const newText = evt.target.value;
        setTodoText(newText);
    }

    const cancelEdit = () => {
        dispatch({ type: 'CANCEL_EDIT', payload: todo.id });
    }

    const submitEdit = () => {
        dispatch({ type: 'SUBMIT_EDIT', payload: todo.id, text: todoText });
    }

    return (
        <span>
            <input type="text" value={todoText} placeholder="todo" onChange={handleChange} />
            <button className="Edit-button" type="button" onClick={cancelEdit}>Cancel</button>
            <button className="Edit-button" type="button" onClick={submitEdit}>Submit</button>
        </span>
    )
}

export default Edit;