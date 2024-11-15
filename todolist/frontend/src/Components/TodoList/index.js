import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [isEdit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);

  const handleAddOrUpdateItem = async () => {
    if (newItem.trim()) {
      if (isEdit) {
        try {
          const updatedItem = { task: newItem };
          const response = await axios.put(`http://localhost:5000/api/update/${items[editIndex]._id}`, updatedItem);
          const updatedItems = items.map((item, index) =>
            index === editIndex ? response.data.task : item
          );

          setItems(updatedItems);
          setEdit(false);
          setEditIndex(null);
        } catch (error) {
          console.error('Error updating item:', error);
        }
      } else {
        try {
          const newTask = { task: newItem };
          const response = await axios.post('http://localhost:5000/api/create', newTask);
          setItems([...items, response.data.todo]);
        } catch (error) {
          console.error('Error creating new item:', error);
        }
      }
      setNewItem('');
    }
  };

  const handleEdit = (index) => {
    setNewItem(items[index].task);
    setEdit(true);
    setEditIndex(index);
  };

  const handleDelete = async (index) => {
    try {
      const itemId = items[index]._id;
      await axios.delete(`http://localhost:5000/api/delete/${itemId}`);
      const updatedItems = items.filter((_, i) => i !== index);
      setItems(updatedItems);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleToggleComplete = async (index) => {
    try {
      const itemId = items[index]._id;
      const response = await axios.put(`http://localhost:5000/api/toggle/${itemId}`);
      const updatedTodo = response.data.todo;

      const updatedItems = items.map((item, i) =>
        i === index ? updatedTodo : item
      );
      setItems(updatedItems);
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  return (
    <div>
      <h1 className='todo-header'>Todo Application</h1>
      <div className="todo-container">
        <h2 className="todo-title">Add Your List Here ✌️</h2>
        <div className="todo-input-container">
          <input
            className="todo-input"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new item"
          />
          <button className="add-btn" onClick={handleAddOrUpdateItem}>
            <FontAwesomeIcon icon={isEdit ? faEdit : faPlus} />
          </button>
        </div>
        <ul className="todo-list">
          {items.map((item, index) => (
            item && item.task && (
              <div className='checkbox-container' key={item._id || index}>
                <input
                  type='checkbox'
                  className='checkbox-input'
                  checked={item.completed || false}
                  onChange={() => handleToggleComplete(index)}
                />
                <li className={`todo-item ${item.completed ? 'completed' : ''}`}>
                  <span>{item.task}</span>
                  <button className="edit-btn" onClick={() => handleEdit(index)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              </div>
            )
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
