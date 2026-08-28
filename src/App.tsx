import './App.css'
import NavBar from './components/NavBar'
import About from './pages/About'
import Education from './pages/Education'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <>
  
      <NavBar />
      <Home/>
      <About />
      <Education />
      <Projects/>
    </>
  
  )
}

export default App
