// TaskItem.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskItem = ({ task, onDelete, onToggleComplete, onEdit }) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };

  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  const handleUpdateTask = (updatedTask) => {
    onEdit(updatedTask);
    setEditing(false);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : 'active'}`}>
      {editing ? (
        <TaskForm
          onAddTask={handleUpdateTask}
          initialName={task.name}
          initialDescription={task.description}
        />
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </div>
      )}
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleToggleComplete}>
          {task.completed ? 'Mark Active' : 'Mark Completed'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
