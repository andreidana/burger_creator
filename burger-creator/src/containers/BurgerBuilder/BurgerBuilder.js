import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false
  };

  updatePurchaseState = (ingredients) => {
    const ingredientsTotalAmount = Object.keys(ingredients).map(key => ingredients[key]).reduce( (sum, el) => sum + el, 0);
    this.setState({purchasable: ingredientsTotalAmount > 0})
  }

  addIngredienthandler = (type) => {
    const ingredients = this.addIngredientToList(type);
    const totalPrice = this.addIngredientTotal(type);
    this.updateStateDetails(totalPrice, ingredients);
  }

  removeIngredientHandler = (type) => {
    const ingredients = this.removeIngredientFromList(type);
    const totalPrice = this.removeIngredientTotal(type);
    this.updateStateDetails(totalPrice, ingredients);
  }

  updateStateDetails(totalPrice, ingredients) {
    this.setState({ totalPrice: totalPrice, ingredients: ingredients });
    this.updatePurchaseState(ingredients);
  }

  addIngredientTotal(type) {
    return this.state.totalPrice + INGREDIENT_PRICES[type];
  }

  removeIngredientTotal(type) {
    return this.state.totalPrice - INGREDIENT_PRICES[type];
  }

  addIngredientToList(type) {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    return updatedIngredients;
  }

  removeIngredientFromList(type) {
    const updatedCount = this.checkIfAvailableIngredient(type);
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    return updatedIngredients;
  }

  checkIfAvailableIngredient(type) {
    return this.state.ingredients[type] > 0 ? this.state.ingredients[type] - 1 : this.state.ingredients[type];
  }

  render() {
    const disabledObjects = {...this.state.ingredients};
    for (let key in disabledObjects) {
      disabledObjects[key] = disabledObjects[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients = {this.state.ingredients}/>
        <BuildControls
          price = {this.state.totalPrice}
          purchasable = {this.state.purchasable}
          disabledObjects = {disabledObjects}
          ingredientAdded = {this.addIngredienthandler}
          ingredientRemoved = {this.removeIngredientHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;