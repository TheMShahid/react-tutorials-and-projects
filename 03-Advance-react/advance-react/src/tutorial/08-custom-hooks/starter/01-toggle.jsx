import useToggle from "./useToggle";

const ToggleExample = () => {
  const { show, toggle } = useToggle(false);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" type="button" onClick={toggle}>
        toggle
      </button>
      {show && <h3>some staff</h3>}
    </div>
  );
};

export default ToggleExample;
