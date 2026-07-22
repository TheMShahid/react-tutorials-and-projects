import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  // normally connect to DB
  const login = () => {
    setUser({ name: "shahid" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h1>user challenge</h1>
      {user ? (
        <div>
          <h2>wellcome: {user.name}</h2>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h2>please to login</h2>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
