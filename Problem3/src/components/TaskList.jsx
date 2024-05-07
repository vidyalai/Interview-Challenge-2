import PropTypes from 'prop-types';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div
              style={{
                display: 'flex',
                gap: 8,
                padding: 8,
                alignItems: 'center',
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  deleteTask: PropTypes.func,
  toggleTaskCompletion: PropTypes.func,
};

export default TaskList;
