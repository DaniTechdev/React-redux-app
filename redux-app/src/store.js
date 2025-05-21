//since we used default export, we will not wrap the reducer we will import
//default export means thats the only item we are exporting
import reducer from "./reducer.js";
import { createStore } from "redux";

const store = createStore(reducer);

console.log("store", store);

export default store;
