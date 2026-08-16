import useFetch from "./useFetch";

const url = "https://api.github.com/users/themshahid";

const MultipleReturnsFetchData = () => {
  const { isLoading, isError, data: user } = useFetch(url);

  if (isLoading) {
    return <h2>loading...</h2>;
  }

  if (isError) {
    return <h2>there was an error...</h2>;
  }
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>Works at: {user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};

export default MultipleReturnsFetchData;
