import React, { useState, useEffect } from 'react';

const UseEffectHook = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Generate a random number when the component mounts
        const newRandomNumber = Math.floor(Math.random() * 100);
        setRandomNumber(newRandomNumber);
    }, []);

    return (
        <div>
            <h4>Implementation 1 of useEffect: A random number is generated when the component rerenders/mounts again </h4>
            <p>Random Number: {randomNumber}</p>

            <h4>Implementation 2 of useEffect: It is also used for DOM Manipulation to give side effects on the useState Hook</h4>
            <p>Total Cost of 1 item: Rs. 1397 + 8%GST</p>
            <button className="styledButton" onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button className="styledButton" onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <p>Total Count of items: {count}</p>
            <p>Total Bill of your items : {count*1397*1.08}</p>
        </div>
    );
};

export default UseEffectHook;
