import { ADD_COUNT, SUB_COUNT, RESET_COUNT, ADD_TODO } from "./actions";
const initState = { count: 0, todos: [] };
export const reducer = (store = initState, { type, payload }) => {
    // console.log("store", store);
    switch (type) {
        case ADD_COUNT:
            return { ...store, count: store.count + payload };
        case SUB_COUNT:
            return { ...store, count: store.count - payload };
        case RESET_COUNT:
            return { ...store, count: payload !== undefined ? payload : 0 };
        case ADD_TODO:
            return { ...store, todos: [...payload] };
        default:
            return store;
    }
}