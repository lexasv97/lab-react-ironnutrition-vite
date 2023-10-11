// Your code here// Your code here
import { Divider, Input, Button } from "antd";

import { useState } from "react";

const AddFoodForm = ({ addFood }) => {
  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(newFood);
    setNewFood({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  const handleTextInput = (e) => {
    setNewFood((prev) => ({...prev, [e.target.name]: e.target.value}))
  };

  const handleNumberInput = (e) => {
    setNewFood((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
  };

  return (
    <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        
      <label htmlFor="name">Name:</label>
      <Input type="text" value={newFood.name} name="name" onChange={handleTextInput} />

      <label htmlFor="image">Image:</label>
      <Input type="text" value={newFood.image} name="image" onChange={handleTextInput} />

      <label htmlFor="calories">Calories:</label>
      <Input type="number" value={newFood.calories} name="calories" onChange={handleNumberInput} />

      <label htmlFor="servings">Servings:</label>
      <Input type="number" value={newFood.servings} name="servings" onChange={handleNumberInput} />
      <Button type="submit">Create</Button>

    </form>
  );
};

export default AddFoodForm;