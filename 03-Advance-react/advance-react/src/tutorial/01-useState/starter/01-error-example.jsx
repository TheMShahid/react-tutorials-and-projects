const useStateErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h2>count {count}</h2>
      <button onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default useStateErrorExample;
