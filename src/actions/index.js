import { ADD_TASK, DELETE_TASK, DONE_TASK } from './types';
let nextId = 0;

export const addTask = (formValues) => {
    return {
        type: ADD_TASK,
        payload: {
            text: formValues,
            id: nextId++
        }
    };
};

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: {
            id: id
        }
    };
};

export const doneTask = (id) => {
    return {
        type: DONE_TASK,
        payload: {
            id: id
        }
    }

};
