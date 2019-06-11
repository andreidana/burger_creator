import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl.js';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className="BuildControls">
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(control => (
      <BuildControl
        key = {control.label}
        label = {control.label}
        disabled = {props.disabledObjects[control.type]}
        removed = {() => props.ingredientRemoved(control.type)}
        added = {() => props.ingredientAdded(control.type)}/>
    ))}
    <button className="OrderButton" disabled = {!props.purchasable}>ORDER</button>
  </div>
);

export default buildControls