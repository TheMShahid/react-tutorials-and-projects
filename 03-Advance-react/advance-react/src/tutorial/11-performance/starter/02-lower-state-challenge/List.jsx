const List = ({ users }) => {
  return (
    <div>
      {/* render users below */}
      <h2>users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            {/* <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button> */}
          </div>
        );
      })}
    </div>
  );
};
export default List;
