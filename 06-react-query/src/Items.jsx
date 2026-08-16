import { useFetchTasks } from "./reactQueryCustomHooks";
import SingleItem from "./SingleItem";

const Items = () => {
  const { isLoading, data, error } = useFetchTasks();
  // console.log(result);
  // console.log(data);

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>loading...</p>;
  }

  // if (isError) {
  //   return <p style={{ marginTop: "1rem" }}>there wan an error...</p>;
  // }

  if (error) {
    return <p style={{ marginTop: "1rem" }}>{error.response.data}</p>;
  }

  return (
    <div className="items">
      {data.taskList.map((task) => {
        return <SingleItem key={task.id} item={task} />;
      })}
    </div>
  );
};
export default Items;
