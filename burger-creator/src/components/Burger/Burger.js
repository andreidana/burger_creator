import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css';

const burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map(ingredient => [...Array(props.ingredients[ingredient])].map((item, index) => <BurgerIngredient key={ingredient + index} type={ingredient}/>))
    .reduce((arr, el) => arr.concat(el), []);

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients</p>
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"/>
      {ingredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
}

export default burger;