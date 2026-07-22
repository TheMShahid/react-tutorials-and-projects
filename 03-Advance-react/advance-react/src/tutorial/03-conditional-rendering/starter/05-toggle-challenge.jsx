import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  const toggle = () => {
    if (showAlert) {
      setShowAlert(false);
      return;
    }
    setShowAlert(true);
  };

  return (
    <div>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      <div>
        <button className="btn" onClick={() => setShowAlert(!showAlert)}>
          toggle 2
        </button>
      </div>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello there</div>;
};

export default ToggleChallenge;
