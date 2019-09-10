import moment from 'moment';

export const initialState = {
    todoArray: [{
        id: 0, name: 'Clean the backyard',
        completed: false, timeCreated: moment().format(' h:mm:ss a, MMMM Do YYYY'),
        timeCompleted: null
    }],
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
                        return {
                            ...item, completed: !item.completed,
                            timeCompleted: !item.completed ? moment().format(' h:mm:ss a, MMMM Do YYYY') : null
                        };
                    }
                    else {
                        return item;
                    }
                })
            }
        }
        case 'CLEAR_COMPLETED': {
            return { todoArray: state.todoArray.filter(item => item.completed === false) }
        }
        default: return state;
    }
} 