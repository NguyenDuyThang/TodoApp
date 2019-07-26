export const UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';
export const UPDATE_TODO_NAME = 'UPDATE_TODO_NAME';
export const UPDATE_TODO_PRIORITY = 'UPDATE_TODO_PRIORITY';
export const UPDATE_TODO_DUE_TIME = 'UPDATE_TODO_DUE_TIME';
export const UPDATE_TODO_HOUR = 'UPDATE_TODO_HOUR';
export const UPDATE_TODO_INDEX = 'UPDATE_TODO_INDEX';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';

export const updateTodoList = (input) => ({
    type: UPDATE_TODO_LIST,
    data: input
});

export const updateTodoIndex = ( input ) => ({
    type: UPDATE_TODO_INDEX,
    data: input
});

export const updateTodoName = ( input ) => ({
    type: UPDATE_TODO_NAME,
    data: input
});

export const updateTodoPriority = ( input ) => ({
    type: UPDATE_TODO_PRIORITY,
    data: input
});

export const updateTodoDueTime = ( input ) => ({
    type: UPDATE_TODO_DUE_TIME,
    data: input
});

export const updateTodoHour = ( input ) => ({
    type: UPDATE_TODO_HOUR,
    data: input
});

export const deleteTodoItem = (input) => ({
    type: DELETE_TODO_ITEM,
    data: input
});