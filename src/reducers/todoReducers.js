import uuid from 'uuid/v4';
export const todoReducers = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                    todo: action.book.todo,
                    user: action.book.user,
                    id: uuid()
            }]
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'UPDATE_TODO':
            return alert('HEllo mr dj');
        default:
            return state
    }
}