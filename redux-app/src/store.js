const { createStore } = require("redux");

//since we used default export, we will not wrap the reducer we will import
//default export means thats the only item we are exporting
const reducer = require("./reducer");

const store = createStore(reducer);

export default store;
