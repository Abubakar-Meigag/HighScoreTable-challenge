import React, { useState } from "react";
import AllScores from "./allScores";
import "./App.css";
import TopButton from "./TopButton";
import allCountryScores from "./scores";

function App() {
  const [data, setData] = useState(allCountryScores);
  
  const sortTable = () => {
    setData(
      data.map((ele) => ele.scores.sort((a, b) => b.s - a.s))
    )
  };
  return (
    <div className="App">
      <h1>High Scores pre Country</h1>
      <TopButton handleClick={sortTable} />
      <AllScores />
    </div>
  );
}

export default App;
