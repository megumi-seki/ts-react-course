import {  type ReactNode } from "react"
import { useCounter } from "../context/CounterContext"
import { useCounterText } from "../context/CounterContext"

type ChildrenType = {
    children: (num: number) => ReactNode
}

const Counter = ({ children }: ChildrenType) => {
    const { count, increment, decrement } = useCounter()
    const { text, handleTextInput } = useCounterText()
    
    return (
        <>
            <h1>{children(count)}</h1>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
            <label htmlFor="MyInput">MyInput</label>
            <input type="text" onChange={handleTextInput} id="MyInput"/>
            <h2>{text}</h2>
        </>
    )
}

export default Counter