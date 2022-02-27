import React from 'react'
import { Header, Navbar, About, Experience, Services } from 'components'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
    </div>
  )
}

export default App