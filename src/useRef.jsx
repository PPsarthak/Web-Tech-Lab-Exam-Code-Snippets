import { useState, useEffect, useRef } from "react";

export default function UseRefHook(){
    const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <h4>Implementation of useRef: It is useState hook that tracks mutable values without rerendering OR In other words, it is used to store persistent values across rerenders</h4>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter some text here"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}