import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(d => setData(d))
  }, [])

  function onPostPlant(d) {
    setData([...data, d]);
  }
  function onSearch(text) {
    setInputText(text);
  }

  const filtered = data.filter(plant => {
    if (inputText === "") {
      return true;
    } else {
      return plant['name'].toLowerCase().includes(inputText.toLowerCase());
    }

  })

  return (
    <div className="app">
      <Header />
      <PlantPage plantList={filtered} onPostPlant={onPostPlant} onSearch={onSearch} />
    </div>
  );
}

export default App;
