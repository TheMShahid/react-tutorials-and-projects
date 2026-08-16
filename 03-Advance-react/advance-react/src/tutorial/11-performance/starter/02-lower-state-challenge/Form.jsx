import { useState } from "react";

const Form = ({ addUser }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please provide name value");
      return;
    }
    addUser(name);
    setName("");
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h3>Performance</h3>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
