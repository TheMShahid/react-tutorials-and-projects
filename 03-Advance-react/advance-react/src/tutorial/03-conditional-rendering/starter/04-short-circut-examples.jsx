import { useState } from "react";

const ShortCircutExamples = () => {
  // falsy
  const [text, setText] = useState();

  // truthy
  const [name, setName] = useState("shahid");
  const [user, setUser] = useState({ name: "khan" });
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <h1>{text || "default value"}</h1>
      {name && (
        <div>
          <h2>and operator</h2>
          <h2>{user.name}</h2>
        </div>
      )}

      <br />
      <br />
      <br />
      <h1>Not operator</h1>
      {!text && (
        <div>
          <h2>not operator</h2>
          <h2>{user.name}</h2>
        </div>
      )}

      <br />
      <br />
      <br />
      <h5>Some Component:</h5>
      {name && <SomeComponent name={user.name} />}

      <h5 style={{ marginTop: "2rem" }}>ternary operator</h5>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h2>welcome: {user.name}</h2>
        </div>
      ) : (
        <h3>please login</h3>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>some Component</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircutExamples;
