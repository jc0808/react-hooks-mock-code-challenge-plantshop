import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {

  const displayList = plantList.map(plant => {
    return (<PlantCard key={plant.id} name={plant.name} image={plant.image}
      price={plant.price} />)
  })
  return (
    <ul className="cards">{displayList}</ul>
  );
}

export default PlantList;
