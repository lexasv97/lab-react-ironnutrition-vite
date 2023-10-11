import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import { useState } from "react";
import AddFoodForm from "./AddFoodForm";
import SearchForm from "./SearchForm";
import { Row, Divider } from "antd";

const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson);

    const [searchTerm, setSearchTerm] = useState('')

    const addFood = (newFood) => {
        const updatedFood = [newFood, ...foods];
        setFoods(updatedFood);
    };

    const deleteFood = (id) => {
        let deleted = foods.filter((food) => food.id !== id);

        console.log(
            "Deleted",
            deleted,
            "\nID",
            id,
            "\nRemainingLength",
            deleted.length,
            "\nTotalFoods",
            foods.length
        );

        setFoods(deleted);
    };

    const setSearch = (str) => {
        setSearchTerm(str)
    }

    let filtered = searchTerm ? foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())) : foods

    return (
        <div className="App">
          <h1>LAB | React IronNutrition</h1>
    
          <AddFoodForm addFood={addFood} />
    
          <SearchForm setSearch={setSearch}/>
    
          <Divider>Food List</Divider>
    
          <Row style={{ width: "100%", justifyContent: "center" }}>
    
            {
              filtered.map((food) => {
                return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />
              })
            }
    
          </Row>
        </div>
      )
};

export default FoodList;