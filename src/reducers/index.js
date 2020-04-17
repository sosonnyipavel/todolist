import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

const addTaskReducer = (addTask = {}, action) => {
    if (action.type === 'ADD_TASK') {
        return action.payload;
    }
    return addTask;
};


export default combineReducers({
    form: formReducer,
    addTask: addTaskReducer,
});