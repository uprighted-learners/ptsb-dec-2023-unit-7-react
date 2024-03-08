/* 
 ? Using State in React

  useState(param) returns an array with two entries:
  * 0 - the param
  * 1 - a function object
  
  const state = useState("hello")
  console.log(state)
  ["hello", BoundFunctionObject]

  ? Here's what useState() looks like
  function useState(startingData) {
    function updateData(newData) {
      startingData = newData
    }
    return [startingData, updateData]
  }

*/

import { useState } from "react"
import "./counter.css"

function Counter() {
  // array destructuring is just like object destructuring
  // except that the variable names don't have to match any keys
  // instead, the values are in order, by index

  let [count, setCount] = useState(0)

  const increment = () => {
    // setCount(count + 1)

    // call setCount with either the new value
    // or with a callback that references the previous value of count
    // which allows you to make multiple changes to the same
    // state variable within the same iteration of the lifecycle
    // for example, within different conditionals
    if (count < 5) {
      setCount(c => c + 1)
    }
    if (count % 2) {
      setCount(c => c + 2)
    }
  }

  const decrement = () => setCount(count - 1)

  return (
    <div className="counter-component">
      <button onClick={increment}>+</button>
      {/* count will only automatically update if it's a state variable */}
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
