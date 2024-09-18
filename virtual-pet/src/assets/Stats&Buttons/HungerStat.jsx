export function HungerStat({ hunger }) {
  return (
    <div className="hunger-stat">
      Hunger :
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            style={{
              width: `${hunger}%`,
              backgroundColor:
                hunger > 80
                  ? "#A3EB91"
                  : hunger < 80 && hunger >= 50
                  ? "#E3FB8F"
                  : hunger < 50 && hunger >= 20
                  ? "#FFA500"
                  : hunger < 20
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
