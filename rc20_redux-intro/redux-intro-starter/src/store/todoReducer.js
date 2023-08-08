export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const clearTodo = () => ({ type: CLEAR_TODO });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
export const toggleTodo = (payload) => ({ type: TOGGLE_TODO, payload });

const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };

    case CLEAR_TODO:
      return initialState;

    case DELETE_TODO:
      return {
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    case TOGGLE_TODO:
      return {
        todoList: state.todoList.map((todo) =>
          todo.id === payload ? { ...todo, copmleted: !todo.completed } : todo
        ),
      };

    default:
      return state;
  }
};
