import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsCarousel from './components/NewsCarousel';
import Products from './components/Products';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Catalog from './components/Catalog';
import './App.css';

function MainContent() {
  return (
    <>
      <Hero />
      <NewsCarousel />
      <Products />
      <Partners />
      <ContactForm />
      <footer className="footer">
        <div className="container">
          <div className="contact-info">
            <p>Email: contato@vonic.com.br</p>
            <p>Telefone: +55 (11) 1234-5678</p>
            <p>Endereço: Av. Exemplo, 123 - São Paulo, SP</p>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Vonic. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App; 