import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyCard from './Components/MyCard'
import { ChakraBaseProvider } from '@chakra-ui/react'
import Dashboard from './Components/MyCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <ChakraBaseProvider >
      
    <Dashboard classname="mycard"/>
    </ChakraBaseProvider>
  );
}

export default App;
