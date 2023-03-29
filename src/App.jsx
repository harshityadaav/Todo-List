import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id; 
      })
    })
}

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent} 
            required
          />
          <button onClick={listOfItems}> + </button>

          {Items.map((itemval, index) => {
            return <ToDoLists 
            key={index} 
            id={index} 
            text={itemval} 
            onSelect = {deleteItems}
            />;
          })}

        </div>
      </div>
    </>
  );
};

export default App;
