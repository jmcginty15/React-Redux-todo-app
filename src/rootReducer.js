const storageTodos = localStorage.getItem('todos');
const initialTodos = storageTodos ? JSON.parse(storageTodos) : [];
const INITIAL_STATE = { todos: initialTodos };

const findIndex = (list, id) => {
    let i = 0;
    for (let todo of list) {
        if (todo.id === id) return i;
        else i += 1;
    }
    return null;
}

const rootReducer = (state = INITIAL_STATE, action) => {
    const newTodos = [...state.todos];
    const index = action.type === 'ADD' ? null : findIndex([...state.todos], action.payload);

    switch (action.type) {
        case 'ADD':
            const addState = { ...state, todos: [...state.todos, action.payload] };
            localStorage.setItem('todos', JSON.stringify(addState.todos));
            return addState;
        case 'REMOVE':
            newTodos.splice(index, 1);
            const removeState = { ...state, todos: newTodos };
            localStorage.setItem('todos', JSON.stringify(removeState.todos));
            return removeState;
        case 'COMPLETE':
            newTodos[index].complete = true;
            const completeState = { ...state, todos: newTodos };
            localStorage.setItem('todos', JSON.stringify(completeState.todos));
            return completeState;
        case 'UNCOMPLETE':
            newTodos[index].complete = false;
            const uncompleteState = { ...state, todos: newTodos };
            localStorage.setItem('todos', JSON.stringify(uncompleteState.todos));
            return uncompleteState;
        case 'EDIT':
            newTodos[index].editing = true;
            const editState = { ...state, todos: newTodos };
            localStorage.setItem('todos', JSON.stringify(editState.todos));
            return editState;
        case 'CANCEL_EDIT':
            newTodos[index].editing = false;
            const cancelEditState = { ...state, todos: newTodos };
            localStorage.setItem('todos', JSON.stringify(cancelEditState.todos));
            return cancelEditState;
        case 'SUBMIT_EDIT':
            newTodos[index].editing = false;
            newTodos[index].text = action.text;
            const submitEditState = { ...state, todos: newTodos };
            localStorage.setItem('todos', JSON.stringify(submitEditState.todos));
            return submitEditState;
        default:
            return { ...state };
    }
}

export default rootReducer;