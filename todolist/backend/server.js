const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());  // Parse JSON bodies

// MongoDB connection string
const MONGOURI = "mongodb+srv://joseph:Joseph%40123@cluster0.cqxab0q.mongodb.net/Pizza?retryWrites=true&w=majority";  // Replace with your DB URI

// Connect to MongoDB
mongoose.connect(MONGOURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error.message));

// Define a Todo schema and model
const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: { type: Boolean, default: false } 
});

const Todo = mongoose.model('Todo', todoSchema);

// Create a new ToDo item (POST request)
app.post('/api/create', async (req, res) => {
  const { task } = req.body;

  try {
    const newTodo = new Todo({
      task,
    });

    await newTodo.save();
    res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
  } catch (error) {
    console.error('Error creating ToDo:', error);
    res.status(500).json({ message: 'Failed to create ToDo' });
  }
});

// Retrieve all ToDo items (GET request)
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error fetching ToDos:', error);
    res.status(500).json({ message: 'Failed to retrieve ToDos' });
  }
});

// Update an existing ToDo item (PUT request)
app.put('/api/update/:id', async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { task }, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: 'ToDo not found' });
    }
    res.status(200).json({ message: 'ToDo updated successfully', task: updatedTodo });
  } catch (error) {
    console.error('Error updating ToDo:', error);
    res.status(500).json({ message: 'Failed to update ToDo' });
  }
});

// Toggle completed status (PUT request)
app.put('/api/toggle/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Find the todo item by ID and toggle its completed status
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo.completed = !todo.completed; // Toggle the completed status
    await todo.save(); // Save the updated todo
    res.json({ message: 'Todo updated successfully', todo });
  } catch (error) {
    console.error('Error toggling todo:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a ToDo item (DELETE request)
app.delete('/api/delete/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'ToDo not found' });
    }
    res.status(200).json({ message: 'ToDo deleted successfully', todo: deletedTodo });
  } catch (error) {
    console.error('Error deleting ToDo:', error);
    res.status(500).json({ message: 'Failed to delete ToDo' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
