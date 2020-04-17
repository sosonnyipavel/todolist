export const addTask = (formValues) => {
    return {
        type: 'ADD_TASK',
        payload: formValues
    };
};