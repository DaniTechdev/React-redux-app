//[]

let lastId = 0;

// function reducer(state = [], action) {
//   //state is like the store state
//   if (action.type == "bugAdded") {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === "bugRemoved") {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   }
//   //now if we dispatch action that is not in our system, then we should return the
//   //current state to avoid destroying our store states

//   return state;
// }

//using switch case

export default function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);

    default:
      return state;
  }
}
