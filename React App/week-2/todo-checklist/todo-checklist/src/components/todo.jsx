import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
    { text: 'React', checked: false },
    { text: 'PowerBI', checked: false },
    { text: 'Coin Flipped', checked: false },
  ]);

  const handleTaskChange = (index, checked) => {
    setTasks(tasks.map((task, i) => {
      if (i === index) {
        return { ...task, checked };
      } else {
        return task;
      }
    }));
  };

  const handleTaskRemove = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleTaskAdd = (text) => {
    setTasks([...tasks, { text, checked: false }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input type="checkbox"
                     checkedOk={task.checked}
                     onChange={(event) => handleTaskChange(index, event.target.checkedOk)}
              />
              <span style={{ textDecoration: task.checked ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </label>
            <button onClick={() => handleTaskRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(event) => {
        event.preventDefault();
        const text = event.target.elements.task.value.trim();
        if (text !== '') {
          handleTaskAdd(text);
          event.target.reset();
        }
      }}>
        <input name="task" placeholder="New task" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoList;