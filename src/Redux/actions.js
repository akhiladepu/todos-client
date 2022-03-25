//Action Types:
export const ADD_COUNT = "ADD_COUNT";
export const SUB_COUNT = "SUB_COUNT";
export const RESET_COUNT = "RESET_COUNT";

export const ADD_TODO = "ADD_TODO";

//Action creators:
export const addCount = (payload) => ({ type: ADD_COUNT, payload });
export const subCount = (payload) => ({ type: SUB_COUNT, payload });
export const resetCount = (payload) => ({ type: RESET_COUNT, payload });

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });