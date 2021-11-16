import React, { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./Recipe";

const App = () => {
  const APP_ID = "90dfbfd0";
  const APP_KEY = "51a563854aa56c5cca0bce46e6475c99";

  const [recipes, setRecipes] = useState([]);
  const [temp, setTemp] = useState("Waffles");
  const [input, setInput] = useState("Waffles");

  useEffect(() => {
    getData();
  }, [input]);

  const getData = async () => {
    const request = await fetch(
      `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await request.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const takeInput = (e) => {
    setTemp(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
    setInput(temp);
    setTemp("");
  };

  return (
    <div className="App">
      <form onSubmit={search} className="form">
        <input
          type="text"
          id="search-input"
          onChange={takeInput}
          value={temp}
        ></input>
        <button type="submit" id="search-btn">
          Search
        </button>
      </form>
      <div className="recipe-box">
        {recipes.map((i) => (
          <Recipes
            title={i.recipe.label}
            calories={i.recipe.calories}
            image={i.recipe.image}
            ingredients={i.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
