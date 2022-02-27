import React from 'react'
import { Header, Navbar, About, Experience, Services, Works } from 'components'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Works />
    </div>
  )
}

export default App