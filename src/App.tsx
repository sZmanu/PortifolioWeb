import './App.css'
import { useLayoutEffect } from 'react'
import NavBar from './components/NavBar'
import About from './pages/About'
import Education from './pages/Education'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-scroll-reveal]')

    document.documentElement.classList.add('scroll-reveal-ready')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      
      <NavBar />
      <Home />
      <About />
      <Education />
      <Skills/>
      <Projects />
      <Contact/>
    </>
  
  )
}

export default App
