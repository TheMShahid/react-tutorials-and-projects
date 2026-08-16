import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const name = formData.get("name");
    // console.log(name);
    // console.log([...formData.entries()]);
    // console.log(formData);
    // console.log(e.currentTarget);

    const newUser = Object.fromEntries(formData); // creating new object
    // console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <h4>form data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" name="name" className="form-input" id="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" name="email" className="form-input" id="email" />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledInputs;
