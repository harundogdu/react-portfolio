import React from 'react'
import { Header, Navbar, About, Experience, Services, Works, Testimonials, Contact, Footer } from 'components'

const App = () => {
  return (
    <>
      <div className='app'>
        <Header />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Works />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App