import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Expirience from './components/expirience/Expirience'
import Services from './components/services/Services'
import Portifolio from './components/portifolio/Portifolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const  App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expirience />
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  )
}

export default App;