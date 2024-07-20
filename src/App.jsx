
import './App.css'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Portfolio } from './components/Portfolio'
// import { Aboutme } from './components/Aboutme'


function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      {/* <Aboutme/> */}
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
