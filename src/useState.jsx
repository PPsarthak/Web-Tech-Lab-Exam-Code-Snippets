import React, { useState } from 'react';
import "./hooks.css"
const UseStateHook = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>Implementation of useState: Gives state to variables so that they get rerendered when state changes</h4>
            <p>Count: {count}</p>
            <button className="styledButton" onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button className="styledButton" onClick={() => setCount(count - 1)}>
                Decrement
            </button>
        </div>
    );
};

export default UseStateHook;
