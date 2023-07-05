import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0) // hook use*
    return (
        <>
            <h1>{counter}</h1>
            <button
                onClick={() => setCounter(counter + 1)}
            >+</button>
            <button
                onClick={() => setCounter(counter - 1)}

            >-</button>

            <button
                onClick={() => console.log(counter)}
            >console</button>
        </>
    )
}
export default Counter;
