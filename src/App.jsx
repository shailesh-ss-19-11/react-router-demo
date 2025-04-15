// App.tsx or App.jsx
import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { BASEURL } from '../AppConstants';
import Child1 from './children/Child1';

const NameContext = createContext("");
const surnameContext = createContext("");
function App() {
  const name = "shailesh";
  const surname = "xyz"
  return (
    <>
      {/* <button onClick={() => setFirstName("hello")}>click to change state</button> */}
      {/* <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <h1>{firstName}</h1> */}

      <NameContext.Provider value={name}>
        <surnameContext.Provider value={surname}>
          <Child1 />
        </surnameContext.Provider>
      </NameContext.Provider>
    </>
  )
}

export default App;
export { NameContext,surnameContext };
