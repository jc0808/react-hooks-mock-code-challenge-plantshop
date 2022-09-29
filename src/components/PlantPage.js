import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantList, onPostPlant, onSearch }) {
  return (
    <main>
      <NewPlantForm onPostPlant={onPostPlant} />
      <Search onSearch={onSearch} />
      <PlantList plantList={plantList} />
    </main>
  );
}

export default PlantPage;
