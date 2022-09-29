import React, { useState } from "react";

function NewPlantForm({ onPostPlant }) {

  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(null);

  function handleAddItem(e) {
    e.preventDefault();
    const newPlant = {
      "id": 0,
      "name": name,
      "image": image,
      "price": price
    };

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(d => onPostPlant(d))
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

  function handlePrice(e) {
    setPrice(parseFloat(e.target.value));
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form >
        <input type="text" name="name" placeholder="Plant name" onChange={handleName} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleImage} />
        <input type="number" name="price" step="0.01" onChange={handlePrice} placeholder="Price" />
        <button type="submit" onClick={handleAddItem}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
