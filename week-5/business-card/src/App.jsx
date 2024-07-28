import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './components/BusinessCard'

function App() {
  const [count, setCount] = useState(0)
const interest = ["Ionic", "open source", "App Dev"];
const name = "Lokeshwar";
const description = "A TA in the 100xDevs cohort 2.0";
const [social1,social2] = ["www.linkedin.com","www.twitter.com"];
const people = [{

}]

  return (
    <>
      <div>
        <BusinessCard props = {{name, description, interest, social1,social2}}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
