import { useState } from "react";

const MultipleInputs = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h4>multiple inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            className="form-input"
            id="name"
            onChange={handleChange}
            value={users.name}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            name="email"
            className="form-input"
            id="email"
            onChange={handleChange}
            value={users.email}
          />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="text"
            name="password"
            className="form-input"
            id="password"
            onChange={handleChange}
            value={users.password}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default MultipleInputs;
