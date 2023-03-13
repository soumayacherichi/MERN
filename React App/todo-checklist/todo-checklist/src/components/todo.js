import React, { useState } from 'react';

export default () => {
  const [Val, setVal] = useState('');
  const [list, setList] = useState([]);

  function add(e) {
    e.preventDefault();

    if(Val === '') return;

    setList([...list, {
      text: Val,
      completed: false
    }]);

    setVal('');
  }

  function remove(index) {
    setList(list.filter((_item, i) => i !== index));
  }

  function toggleChecked(index) {
    const obj = {
      ...list[index]
    };

    obj.completed = !obj.completed;

    setList([
      ...list.slice(0, index),
      obj
    ].concat(list.slice(index + 1)));
  }

  return (
    <div>
      {list.map((item, i) => (
        <div key={i}>
          <span style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</span>
          <input
            type="checkbox"
            checked={item.completed}
            onClick={() => toggleChecked(i)}
            readOnly
          />
          <button onClick={() => remove(i)}>Delete</button>
        </div>
      ))}

      <form onSubmit={add}>
        <input
          onChange={e => setVal(e.target.value)}
          value={Val}
        />
        <button>Add</button>
      </form>
    </div>
  )
}