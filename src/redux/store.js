import { createStore } from "redux";
import todos from "./reducers.js";

const store = createStore(todos);

export default store;

//store.subscribe(() => console.log('store.subscribe', store.getState()))