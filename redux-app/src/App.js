import "./App.css";
import store from "./store.js";
import * as actionCreator from "./actionsCreator.js";

function App() {
  //Redux Architecture

  // console.log("store ", store);

  const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
  });

  store.dispatch(actionCreator.bugAdded("Bug 1"));
  store.dispatch(actionCreator.resolvedBug(1));

  unsubscribe();

  store.dispatch(actionCreator.removeBug(1));

  // unsubscribe();

  console.log("getState", store.getState());

  return <div className="App">hello </div>;
}

export default App;
