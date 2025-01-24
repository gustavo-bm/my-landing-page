import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'
import Partners from './components/Partners'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <Products />
        <Partners />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App 