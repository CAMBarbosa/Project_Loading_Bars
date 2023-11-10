import { useState } from "react";

const SimpleProgressBar = (): JSX.Element => {
  const [speedUp, setSpeedUp] = useState(0);
  let currentTimerTick = 0;

  let timeIntervalId: string | number | NodeJS.Timer | undefined;

  const handleButtonSpeed = () => {
    if (speedUp < 100) {
      increaseSpeedUp(10);
    }
  };

  const handleButtonTime = () => {
    timeIntervalId = setInterval(incrementProgressBarWithTimer, 600);

    setTimeout(() => {
      clearInterval(timeIntervalId);
    }, 60000);
  };

  const incrementProgressBarWithTimer = () => {
    currentTimerTick += 1;
    console.log(currentTimerTick);
    setSpeedUp(currentTimerTick);
  };

  const handleButtonReset = () => {
    setSpeedUp(0);
  };

  const increaseSpeedUp = (n: number) => {
    setSpeedUp(speedUp + n);
  };

  const changeColour = () => {
    if (speedUp < 30) {
      return "#ff0000";
    }
    if (speedUp < 50) {
      return "#ffc400";
    }
    if (speedUp < 70) {
      return "#eeff00";
    }
    if (speedUp < 85) {
      return "#aeef5a";
    }

    if (speedUp < 100) {
      return "#00ff15";
    }

    if (speedUp === 100) {
      return "#1a9a25";
    }
  };

  return (
    <div className="container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${speedUp}%`, backgroundColor: changeColour() }}
        ></div>
      </div>
      <div className="progress-bar-label">{speedUp}%</div>
      <button className="progress-bar-button" onClick={handleButtonSpeed}>
        Speed Up
      </button>
      <button className="progress-bar-button" onClick={handleButtonTime}>
        Let time Fly
      </button>
      <button className="progress-bar-button" onClick={handleButtonReset}>
        Reset
      </button>
    </div>
  );
};

export default SimpleProgressBar;
