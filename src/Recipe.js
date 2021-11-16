import React from "react";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className="Recipes">
      <h1 className="title">{title}</h1>
      <p className="calories">
        {"Calories " + Number(calories).toFixed(2) + " J"}
      </p>
      <ul className="ingredients">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image}></img>
    </div>
  );
};

export default Recipes;
