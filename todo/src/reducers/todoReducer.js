export const initialState = {
    todoArray: [{ id: 0, name: 'Clean the backyard', completed: false }],
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return { todoArray: [...state.todoArray, action.payload] }
        }
        case 'TOGGLE_COMPLETE': {
            return {
                todoArray: state.todoArray.map(item => {
                    if (item.id === action.payload.itemID) {
                        return { ...item, completed: !item.completed };
                    }
                    else {
                        return item;
                    }
                })
            }
        }
        default: return state;
    }
} 