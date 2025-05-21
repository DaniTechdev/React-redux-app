import "./App.css";
import store from "./store.js";

function App() {
  //Redux Architecture

  // console.log("store ", store);

  const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
  });

  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "Bug5",
    },
  });

  unsubscribe();

  store.dispatch({
    type: "bugRemoved",
    payload: {
      id: 1,
    },
  });

  // unsubscribe();

  console.log("getState", store.getState());

  return <div className="App">hello </div>;
}

export default App;
