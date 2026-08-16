import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Form from "./Form";

const UserChallenge = () => {
  const [users, setUsers] = useState(data);

  const addUser = (name) => {
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    // console.log("form submitted");
  };

  // const removeUser = (id) => {
  //   const updatedUsers = users.filter((person) => person.id !== id);
  //   setUsers(updatedUsers);
  // };

  return (
    <div>
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
};

export default UserChallenge;
