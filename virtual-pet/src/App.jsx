import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <nav className="navbar">Virtual Pet</nav>
        <div className="main-content">
          <div className="stats">
            <div className="hunger-stat">Hunger: _/10</div>
            <div className="happiness-stat">Happiness: _/10</div>
            <div className="energy-stat">Energy: _/10</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
