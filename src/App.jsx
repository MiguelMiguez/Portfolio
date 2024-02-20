import { useState } from 'react'
import { MyContextProvider } from './components/MyContext/MyContext';
import IntroPerfil from './components/IntroPerfl/IntroPerfil';
import AboutMe from './components/AboutMe/AboutMe';
import ContainerAll from './components/ContainerAll/ContainerAll';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyContextProvider>
          <ContainerAll/>
      </MyContextProvider>
    </>
  )
}

export default App
