export const initialState = {
    todoArray =[{ id: 0, name: 'Clean the backyard}', completed: false }],
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return { todoArray: [...state.todoArray, action.payload] }
        }
        default: return state;
    }
} 