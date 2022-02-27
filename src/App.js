import React from 'react'
import { Header, Navbar, About, Experience, Services, Works, Testimonials, Contact } from 'components'

const App = () => {
  return (
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
  )
}

export default App