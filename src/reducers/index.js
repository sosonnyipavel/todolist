import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import { ADD_TASK, DELETE_TASK, DONE_TASK } from '../actions/types';


const listTasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, 
                {
                    id: action.payload.id,
                    text: action.payload.text.input,
                    checked: false
                }
            ];
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        case DONE_TASK:
            return state.map((task) => 
                task.id === action.payload.id ? {...task, checked: !task.checked}  : task
            );
        default:
            return state;
    }
};


export default combineReducers({
    form: formReducer,
    tasks: listTasksReducer
});