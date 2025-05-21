import * as actions from "./actionTypes.js";

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: "Bug1",
//     },
//   };
// }

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const resolvedBug = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});

export const removeBug = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
