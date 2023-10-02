import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Demo'

function App() {
  const [count, setCount] = useState(0)
  const a = 5
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <h1>this is a count squared</h1>
      <p>this is a squared: {a*a}</p>
      <button onClick={() => setCount(count + 1)}>click me for squaring</button>
      <p>this is count squared: {count}</p>
      <Demo message={count} />
      <div>
        {arr.map((item) => {
          return (
            <div key={item}>
              <p>This is number: {item}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
