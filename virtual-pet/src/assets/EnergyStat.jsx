export function EnergyStat({ energy }) {
  return (
    <div className="energy-stat">
      Energy :
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            style={{
              width: `${energy}%`,
              backgroundColor:
                energy > 80
                  ? "#A3EB91"
                  : energy < 80 && energy >= 50
                  ? "#E3FB8F"
                  : energy < 50 && energy >= 20
                  ? "#FFA500"
                  : energy < 20
                  ? "#ff4500"
                  : "#A3EB91",
              height: "100%",
              borderRadius: "20px",
              transition: "width 0.3s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
