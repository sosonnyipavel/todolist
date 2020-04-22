import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import { ADD_TASK, DELETE_TASK } from '../actions/types';


const listTasksReducer = (state = [], action) => {
    if (action.type === ADD_TASK) {
        return [...state, action.payload.task.input]
    } else if (action.type === DELETE_TASK) {
        return state.filter(task => task !== action.payload.task);
    }
    return state;
};


export default combineReducers({
    form: formReducer,
    tasks: listTasksReducer
});