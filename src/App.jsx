import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills  from './components/Skills'
import MyWorks from './components/MyWorks'
import Footer from './components/Footer'
function App() {


  return (
    <div className="App">
     <NavBar />
     <Home />
     <AboutMe />
     <Skills />
     <MyWorks />
     <Footer />
    </div>
  )
}

export default App
