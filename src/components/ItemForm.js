import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const [itemName, setName] = useState("")
  const [itemCategory, setCategory] = useState("Produce")
  console.log(itemName)
  
  function handleNameChange(event){
    setName(event.target.value)
  }
  
  function handleNewCategory(event){
    setCategory(event.target.value)
  }

  function handleNewItemSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleNewItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleNewCategory} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
