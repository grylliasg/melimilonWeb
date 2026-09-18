/**
 * Root App component. Defines the single-page layout order for the storefront.
 */
import { Fragment } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import KeyConceptsSection from './components/KeyConceptsSection'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Services from './components/Services'
import Tours from './components/Tours'

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <KeyConceptsSection />
      <Reviews />
      <Footer />
    </Fragment>
  )
}

export default App
