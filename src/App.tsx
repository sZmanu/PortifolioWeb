import './App.css'
import NavBar from './components/NavBar'
import About from './pages/About'
import Education from './pages/Education'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      
      <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
      <NavBar />
      <main id="main-content" tabIndex={-1}>
      <Home />
      <About />
      <Education />
      <Skills/>
      <Projects />
      <Contact/>
      </main>
    </>
  
  )
}

export default App
