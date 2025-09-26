import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero_new'
import About from './components/About_large'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <section id="skills">
          <Skills />
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
