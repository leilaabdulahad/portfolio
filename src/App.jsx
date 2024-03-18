import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components//Hero/Hero'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import About from './components/About/About'

function App() {
  return ( <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
