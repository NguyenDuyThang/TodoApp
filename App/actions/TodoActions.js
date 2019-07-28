export const UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';
export const UPDATE_OFFLINE_LIST = 'UPDATE_OFFLINE_LIST';
export const UPDATE_DELETE_OFFLINE_LIST = 'UPDATE_DELETE_OFFLINE_LIST';
export const UPDATE_TODO_NAME = 'UPDATE_TODO_NAME';
export const UPDATE_TODO_PRIORITY = 'UPDATE_TODO_PRIORITY';
export const UPDATE_TODO_DUE_TIME = 'UPDATE_TODO_DUE_TIME';
export const UPDATE_TODO_HOUR = 'UPDATE_TODO_HOUR';
export const UPDATE_TODO_INDEX = 'UPDATE_TODO_INDEX';
export const UPDATE_NET_INFO = 'UPDATE_NET_INFO';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const RESET_OFFLINE_LIST = 'RESET_OFFLINE_LIST';
export const RESET_TODO_LIST = 'RESET_TODO_LIST';
export const RESET_DELETE_OFFLINE_LIST = 'RESET_DELETE_OFFLINE_LIST';

export const updateTodoList = (input) => ({
    type: UPDATE_TODO_LIST,
    data: input
});

export const updateOfflineList = (input) => ({
    type: UPDATE_OFFLINE_LIST,
    data: input
});

export const updateDeleteOfflineList = ( input ) => ({
    type: UPDATE_DELETE_OFFLINE_LIST,
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

export const updateNetInfo = ( input ) => ({
    type: UPDATE_NET_INFO,
    data: input
});

export const deleteTodoItem = (input) => ({
    type: DELETE_TODO_ITEM,
    data: input
});

export const resetOfflineList = () => ({
    type: RESET_OFFLINE_LIST,
    data: null
});

export const resetTodoList = () => ({
    type: RESET_TODO_LIST,
    data: null
});

export const resetDeleteOfflineList = () => ({
    type: RESET_DELETE_OFFLINE_LIST,
    data: null
});