import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import { ADD_TASK, DELETE_TASK, DONE_TASK } from '../actions/types';


const listTasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload.task.input]
        case DELETE_TASK:
            return state.filter(task => task !== action.payload.task);
        case DONE_TASK:
            return [...state, {checked: !action.payload.checked}]
        default:
            return state;
    }
};


export default combineReducers({
    form: formReducer,
    tasks: listTasksReducer
});