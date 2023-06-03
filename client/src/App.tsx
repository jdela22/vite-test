import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar, Footer } from './components'
import { Portfolio } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
