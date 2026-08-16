import { CLEAR_LIST, RESET_LIST, REMOVE_PERSON } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  // console.log(state);
  // console.log(action);
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_PERSON) {
    // const {id} = action.payload
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id,
    );
    return { ...state, people: newPeople };
  }

  // if no action match you can also return a state
  // return state

  throw new Error(`No action matching "${action.type}" - action type`);
};

export default reducer;
