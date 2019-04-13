export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";

const initialState = {
  todos: [
    { value: "Walk the dog", completed: false },
    { value: "Do the dishes", completed: false }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    //case TOGGLE:
    //case DELETE:
    default:
      return state;
  }
};
