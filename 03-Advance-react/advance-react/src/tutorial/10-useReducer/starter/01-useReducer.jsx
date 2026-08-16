import { data } from "../../../data";
import { useReducer } from "react";
import reducer from "./reducer";
import { CLEAR_LIST, RESET_LIST, REMOVE_PERSON } from "./actions";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [peoples, setPeoples] = useState(data);

  const removePerson = (id) => {
    // const newPeople = peoples.filter((person) => person.id !== id);
    // setPeoples(newPeople);
    dispatch({ type: REMOVE_PERSON, payload: { id } });
  };

  const clearList = () => {
    // setPeoples([]);
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    // setPeoples(data);
    dispatch({ type: RESET_LIST });
  };

  console.log(state);

  return (
    <div>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <button type="button" onClick={() => removePerson(person.id)}>
              remove
            </button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          onClick={resetList}
          style={{ marginTop: "2rem" }}>
          reset
        </button>
      ) : (
        <button
          className="btn"
          onClick={clearList}
          style={{ marginTop: "2rem" }}>
          clear
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
