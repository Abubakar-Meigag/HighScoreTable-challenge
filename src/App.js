import React, { useState } from "react";
import AllScores from "./allScores";
import "./App.css";
import TopButton from "./TopButton";
import allCountryScores from "./scores";

function App() {
  const [data, setData] = useState(allCountryScores);
  const [sortToggler, setSortToggler] = useState(false);

  const sortTable = () => {
    setSortToggler(!sortToggler);
    setData((data) => {
      const newData = data;
      newData.forEach((ele) => {
        return ele.scores.sort((a, b) => {
          if (sortToggler) {
            return a.s - b.s;
          } else {
            return b.s - a.s;
          }
        });
      });
      return newData;
    });
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
