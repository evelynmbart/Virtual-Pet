export function HappinessStat({ happiness }) {
  return (
    <div className="happiness-stat">
      Happiness :
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            style={{
              width: `${happiness}%`,
              backgroundColor:
                happiness > 80
                  ? "#A3EB91"
                  : happiness < 80 && happiness >= 50
                  ? "#E3FB8F"
                  : happiness < 50 && happiness >= 20
                  ? "#FFA500"
                  : happiness < 20
                  ? "#ff4500"
                  : "#A3EB91",
              height: "100%",
              borderRadius: "20px",
              transition: "width 0.1s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
