import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import TodoReducer from './TodoReducer';

const reducers = {
    TodoReducer: TodoReducer
};

export default combineReducers({
    TodoReducer
});
