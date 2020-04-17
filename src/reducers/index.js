import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import { ADD_TASK } from '../actions/types';


const listTasksReducer = (state = [], action) => {
    if (action.type === ADD_TASK) {
        return [...state, action.payload.task.input]
    }
    return state;
};

export default combineReducers({
    form: formReducer,
    tasks: listTasksReducer,
});