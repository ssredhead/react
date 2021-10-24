import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

//JS arrays are the best data model to manage rendering JSX lists. 

//When updating an array in state, you don't append new data to the previous array, you replace it with a new array. Copy the previous array to the new array with spread syntax: ...prev and JS array methods like includes(), filter(), and map().

export default function GroceryCart() {
  // declare and initialize state 
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    //spread syntax to add item
    setCart((prev) => {
      return [item, ...prev];
    });
   };

  const removeItem = (targetIndex) => {
    //array.filter function to remove item by id.
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
