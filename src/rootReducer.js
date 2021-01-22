const INITIAL_STATE = { todos: [] };

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
            return { ...state, todos: [...state.todos, action.payload] };
        case 'REMOVE':
            newTodos.splice(index, 1);
            return { ...state, todos: newTodos };
        case 'COMPLETE':
            newTodos[index].complete = true;
            return { ...state, todos: newTodos };
        case 'UNCOMPLETE':
            newTodos[index].complete = false;
            return { ...state, todos: newTodos };
        default:
            return { ...state };
    }
}

export default rootReducer;