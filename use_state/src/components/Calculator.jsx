import {useState} from 'react'

export const Calculator = () => {
    const [result, setResult] = useState(0)
    const [valueOne, setValueOne] = useState(0)
    const [valueTwo, setValueTwo] = useState(0)
    
    const add = () => {
      const res = valueOne + valueTwo
      setResult(res)
    }
    
    const subtract = () => {
      const res = valueOne - valueTwo
      setResult(res)
    }
    
    const divide = () => {
      const res = valueOne / valueTwo
      setResult(res)
    }
    
    const multiply = () => {
      const res = valueOne * valueTwo
      setResult(res)
    }
    
    console.log(result)
    
    return (
      <> 
        <h3>Result: {result}</h3>
        <input onChange={(event) => setValueOne(parseInt(event.target.value))} value={valueOne} type="number"></input>
        <input onChange={(event) => setValueTwo(parseInt(event.target.value))} value={valueTwo} type="number"></input>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </>
    )
}
