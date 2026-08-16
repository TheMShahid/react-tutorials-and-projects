import { useState } from "react";
import { useCreateTask } from "./reactQueryCustomHooks";

const Form = () => {
  const [newName, setNewName] = useState("");
  // console.log(result);
  const { createTask, isLoading } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newName, {
      onSuccess: () => {
        setNewName("");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>bud task</h4>
      <div className="form-control">
        <input
          type="text"
          name="task"
          className="form-input"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
        />
        <button className="btn" disabled={isLoading}>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
