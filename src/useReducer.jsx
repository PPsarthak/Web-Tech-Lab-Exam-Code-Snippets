import React, { useReducer, useState } from 'react';

// Reducer function
const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { items: state.items.filter(item => item !== action.payload) };
    default:
      return state;
  }
};

// Component using useReducer
const UseReducerHook = () => {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(itemReducer, { items: [] });

  const addItem = () => {
    if (inputValue.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: inputValue });
      setInputValue('');
    }
  };

  const removeItem = item => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div>
      <ul>
        {state.items.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default UseReducerHook;
