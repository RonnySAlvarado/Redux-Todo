export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";

const initialState = {
  todos: [
    { value: "Learn Redux", completed: false },
    { value: "Learn more Redux", completed: false }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case TOGGLE:
      const newTodoArray = state.todos.map((todo, index) => {
        if (index === action.payload) {
          return { value: todo.value, completed: !todo.completed };
        } else return todo;
      });
      return {
        ...state,
        todos: newTodoArray
      };
    case DELETE:
      const filteredArray = state.todos.filter(todo => {
        return !todo.completed ? todo : null;
      });
      return {
        ...state,
        todos: filteredArray
      };
    default:
      return state;
  }
};
