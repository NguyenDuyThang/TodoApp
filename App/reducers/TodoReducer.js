import * as actions from '../actions/TodoActions';

const initialState = {
    netInfo: true,
    offlineList: [], //For syncing new todo items with firebase when reconnect
    deleteOfflineList: [], //For syncing deleted todo items with firebase when reconnect
    todoList: [],
    todoIndex: -1,
    todoName: null, //for creating, updating
    todoPriority: 'HIGH', //for creating, updating
    todoDueTime: null, //for creating, updating,
    todoDueHour: null //for creating, updating,
};

const TodoReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.UPDATE_TODO_LIST: {
            let newList = [...state.todoList];

            if(state.todoIndex != -1){
                newList.splice(state.todoIndex, 1, action.data);
            }
            else{
                newList = newList.concat(action.data);  
            }

            newList.sort(sortTodoList);

            return {
                ...state,
                todoList: newList
            };
        }
        case actions.UPDATE_OFFLINE_LIST: {
            //remove existed item to add new item because offline list has both updated and created items  
            const newItem = action.data;
            let newOfflineList = state.offlineList.filter((value) => {
                return value.id != newItem.id;
            });

            newOfflineList = newOfflineList.concat(newItem);

            return {
                ...state,
                offlineList: newOfflineList
            };
        }
        case actions.UPDATE_DELETE_OFFLINE_LIST: {
            return {
                ...state,
                deleteOfflineList: state.deleteOfflineList.concat(action.data)
            };
        }
        case actions.UPDATE_TODO_INDEX: {
            return {
                ...state,
                todoIndex: action.data
            };
        }
        case actions.UPDATE_TODO_NAME: {
            return {
                ...state,
                todoName: action.data
            };
        }
        case actions.UPDATE_TODO_PRIORITY: {
            return {
                ...state,
                todoPriority: action.data
            };
        }
        case actions.UPDATE_TODO_DUE_TIME: {
            return {
                ...state,
                todoDueTime: action.data
            };
        }
        case actions.UPDATE_TODO_HOUR: {
            return {
                ...state,
                todoDueHour: action.data
            };
        }
        case actions.UPDATE_NET_INFO: {
            return {
                ...state,
                netInfo: action.data
            };
        }
        case actions.DELETE_TODO_ITEM: {
            const index = action.data;
            let newList = [...state.todoList];

            newList.splice(index, 1);

            return {
                ...state,
                todoList: newList
            };
        }
        case actions.RESET_OFFLINE_LIST: {
            return {
                ...state,
                offlineList: []
            };
        }
        case actions.RESET_TODO_LIST: {
            return {
                ...state,
                todoList: []
            };
        }
        case actions.RESET_DELETE_OFFLINE_LIST: {
            return {
                ...state,
                deleteOfflineList: []
            };
        }
        default: {
            return state;
        }
    }
};

const sortTodoList = (a, b) => {
    if(a.priority == b.priority){
        return 0;
    }
    if(a.priority == 'HIGH' && b.priority == 'MEDIUM'){
        return -1;
    }
    if(a.priority == 'HIGH' && b.priority == 'LOW'){
        return -1;
    }
    if(a.priority == 'MEDIUM' && b.priority == 'LOW'){
        return -1;
    }
    return 1;
};

// [
//     {
//         name: 'Do somethinggggggggggggggggggggggggggggggggggggggggggg',
//         priority: 'MEDIUM',
//         dueTime: new Date("2019-07-26")
//     },
//     {
//         name: 'Do the household',
//         priority: 'LOW',
//         dueTime: new Date("2019-07-06")
//     },
//     {
//         name: 'Do the homework',
//         priority: 'HIGH',
//         dueTime: new Date("2019-06-07")
//     },
//     {
//         name: 'Play soccer',
//         priority: 'MEDIUM',
//         dueTime: new Date("2019-07-27")
//     },
//     {
//         name: 'Play tennis',
//         priority: 'LOW',
//         dueTime: new Date("2019-08-17")
//     },
//     {
//         name: 'Go to the market',
//         priority: 'HIGH',
//         dueTime: new Date("2019-07-01")
//     }
// ]

export default TodoReducer;