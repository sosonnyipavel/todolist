import { ADD_TASK, DELETE_TASK } from './types';

export const addTask = (formValues) => {
    return {
        type: ADD_TASK,
        payload: {
            task: formValues
        }
    };
};

export const deleteTask = (task) => {
    return {
        type: DELETE_TASK,
        payload: {
            task: task
        }
    };
};