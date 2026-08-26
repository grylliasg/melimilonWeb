/**
 * Root App component. Defines the single-page layout order.
 * AppProvider wraps the tree so EducationalBanner can consume learning-tip state via Context.
 */
import { Fragment } from 'react'
import { AppProvider } from './context/AppContext'
import About from './components/About'
import Footer from './components/Footer'
import KeyConceptsSection from './components/KeyConceptsSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'
import Reviews from './components/Reviews'

function App() {
  return (
    <AppProvider>
      <Fragment>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Tours />
        <KeyConceptsSection />
        <Reviews/>
        <Footer />
      </Fragment>
    </AppProvider>
  )
}

export default App
