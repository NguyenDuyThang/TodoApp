import * as actions from '../actions/TodoActions';

const initialState = {
    todoList: [
        {
            name: 'Do something',
            priority: 'Medium',
            dueTime: new Date("2019-07-26").toLocaleDateString()
        },
        {
            name: 'Do the household',
            priority: 'Low',
            dueTime: new Date("2019-07-06").toLocaleDateString()
        },
        {
            name: 'Do the homework',
            priority: 'High',
            dueTime: new Date("2019-06-07").toLocaleDateString()
        },
        {
            name: 'Play soccer',
            priority: 'Medium',
            dueTime: new Date("2019-07-27").toLocaleDateString()
        },
        {
            name: 'Play tennis',
            priority: 'Low',
            dueTime: new Date("2019-07-17").toLocaleDateString()
        },
        {
            name: 'Go to the market',
            priority: 'High',
            dueTime: new Date("2019-07-01").toLocaleDateString()
        }
    ]
};

const TodoReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.UPDATE_TODO_LIST: {
            return {
                ...state,
                todoList: action.data
            };
        }
        default: {
            return state;
        }
    }
};

const tempData = [
    {
        priority: 'Medium',
        dueTime: new Date("2019-07-26")
    },
    {
        priority: 'Low',
        dueTime: new Date("2019-07-06")
    },
    {
        priority: 'High',
        dueTime: new Date("2019-07-7")
    },
    {
        priority: 'Medium',
        dueTime: new Date("2019-07-27")
    },
    {
        priority: 'Low',
        dueTime: new Date("2019-07-17")
    },
    {
        priority: 'High',
        dueTime: new Date("2019-07-01")
    }
];

export default TodoReducer;