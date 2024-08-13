import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Elements/Navbar'
import Hero from './components/Fragments/hero'
import Service from './components/Fragments/service'
import Layout from './components/Layouts/Layout'
import About from './components/Fragments/about'
import Contact from './components/Fragments/contact'
function App() {
  

  return (
    <>
    <Layout>
      <Hero />
      <About />
      <Service/>
      <Contact/>
    </Layout>
    </>
  )
}

export default App
