import { ADD_TASK } from './types';

export const addTask = (formValues) => {
    return {
        type: ADD_TASK,
        payload: {
            task: formValues
        }
    };
};