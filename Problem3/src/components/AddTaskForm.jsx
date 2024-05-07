import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTaskForm = ({ addTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = e => {
    setNewTaskText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (newTaskText.trim() !== '') {
      addTask({ id: Date.now(), text: newTaskText, completed: false });
      setNewTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTaskText}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

AddTaskForm.propTypes = {
  addTask: PropTypes.func,
};

export default AddTaskForm;
