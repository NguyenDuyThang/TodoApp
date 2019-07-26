export const UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';

export const updateTodoList = (input) => ({
    type: UPDATE_TODO_LIST,
    data: input
});