import { useEffect } from "react"
import { useState } from "react"

const Calculator = () => {
    const [input, setInput] = useState({ ed1: 0, ed2: 0 })

    const handleOperatorClick = (operator) => {
        switch (operator) {
            case '+':
                console.log(input.ed1 + input.ed2)
                break;
            case '-':
                console.log(input.ed1 - input.ed2)
                break;
            case '/':
                console.log(input.ed1 / input.ed2)
                break;
            case '*':
                console.log(input.ed1 * input.ed2)
                break;
        }
        setInput({ ed1: 0, ed2: 0 })
    }

    return (
        <>
            <input
                value={input.ed1}
                type="text"
                onChange={(e) => {
                    setInput({ ...input, ed1: +e.target.value })
                }}
            />
            <input
                value={input.ed2}
                type="text"
                onChange={(e) => {
                    setInput({ ...input, ed2: +e.target.value })
                }}
            />
            <button onClick={() => handleOperatorClick('+')}>+</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
        </>
    )
}
export default Calculator

