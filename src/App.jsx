import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
function App() {
  const [screenwidth,setScreenWidth] = useState(window.innerWidth);
  useEffect(()=>{
    setScreenWidth(window.innerWidth)
  },[screenwidth])

  return (
    <div className="App">
      {console.log(screenwidth)}
      <Header />
      <Hero />
    </div>
  )
}

export default App
