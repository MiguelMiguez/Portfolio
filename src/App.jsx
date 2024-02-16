import { useState } from 'react'
import { MyContextProvider } from './components/MyContext/MyContext';
import IntroPerfil from './components/IntroPerfl/IntroPerfil';
import AboutMe from './components/AboutMe/AboutMe';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyContextProvider>
          <IntroPerfil/>
          <AboutMe/>
      </MyContextProvider>
    </>
  )
}

export default App
