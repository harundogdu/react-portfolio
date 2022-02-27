import React from 'react'
import { Header, Navbar, About, Experience, Services, Works, Testimonials } from 'components'

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
    </div>
  )
}

export default App