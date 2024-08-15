import Hero from './components/Fragments/hero'
import Service from './components/Fragments/service'
import Layout from './components/Layouts/Layout'
import About from './components/Fragments/about'
import Product from './components/Fragments/product'
import Contact from './components/Fragments/contact'
import Client from './components/Fragments/client'
function App() {
  

  return (
    <>
    <Layout>
      <Hero />
      <About />
      <Service/>
      <Product/>
      <Contact/>
    </Layout>
    </>
  )
}

export default App
