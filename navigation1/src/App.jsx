import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './navbar/Navbar'

function App() {
  let [mode, setmode] = useState('light');

  return (
    <>
       <Navbar mode={mode} setmode={setmode}  />
    </>
  )
}

export default App
