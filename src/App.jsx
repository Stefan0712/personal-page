import './App.css';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Navigation from './components/Navigation';
import Updates from './pages/Updates/Updates';
import Footer from './components/Footer/Footer';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';

function App() {

  return (
    <div className='App'>
      <AnimatedBackground />
      <Navigation />
      <div className='main-page'>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
