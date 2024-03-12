import React from "react";
import { useState } from "react";
const Counter = () => {
    const [count , setCount] = useState(0);
    const increment = () => {
         setCount(count + 1);
    }
     return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={increment}>Click me</button>
        </div>
     )
}

export default Counter;