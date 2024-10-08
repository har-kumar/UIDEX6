import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold form data
  const [item, setItem] = useState({
    name: '',
    description: '',
    quantity: 1,
  });

  // State to hold the list of items
  const [itemList, setItemList] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setItemList([...itemList, item]); // Add the new item to the list
    setItem({ name: '', description: '', quantity: 1 }); // Reset the form
  };

  return (
    <div className="container">
      <h1>Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={item.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <button type="submit" className="submit-button">Add Item</button>
      </form>

      <div className="item-list">
        <h2>Item List</h2>
        <ul>
          {itemList.map((i, index) => (
            <li key={index}>
              <strong>{i.name}</strong> - {i.description} (Quantity: {i.quantity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
