import { useTranslation } from '../context/LanguageContext';
import { useState } from 'react';
import logoVonic from '../assets/logovonic.png';

function Navbar() {
  const { translate, changeLanguage, currentLanguage } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const BrazilFlag = () => (
    <svg className="flag-icon" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#229e45" d="M0 0h640v480H0z"/>
        <path fill="#f8e509" d="M321.4 436l301.5-195.7L319.6 44 17.1 240.7 321.4 436z"/>
        <circle fill="#2b49a3" cx="319.6" cy="240" r="124.2"/>
        <path fill="#ffffef" d="M329.7 227.5c68.3 0 124 53.5 124 119.4-1.4-65.9-56.9-119.4-125.2-119.4s-123.8 53.5-123.8 119.4c0-65.9 56.8-119.4 125-119.4z"/>
      </g>
    </svg>
  );

  const USAFlag = () => (
    <svg className="flag-icon" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="480" fill="#fff"/>
      <g fill="#bd3d44">
        <rect width="640" height="36.9" y="0"/>
        <rect width="640" height="36.9" y="73.8"/>
        <rect width="640" height="36.9" y="147.6"/>
        <rect width="640" height="36.9" y="221.4"/>
        <rect width="640" height="36.9" y="295.2"/>
        <rect width="640" height="36.9" y="369"/>
        <rect width="640" height="36.9" y="443.1"/>
      </g>
      <rect width="275.7" height="258.5" fill="#192f5d"/>
      <g fill="#fff">
        <g transform="translate(8.6,3.8) scale(0.0616)">
          <polygon points="0,-40 17.8,35 -28.9,-12.9 28.9,-12.9 -17.8,35"/>
        </g>
        <g transform="translate(25.9,3.8) scale(0.0616)">
          <polygon points="0,-40 17.8,35 -28.9,-12.9 28.9,-12.9 -17.8,35"/>
        </g>
        <g transform="translate(43.2,3.8) scale(0.0616)">
          <polygon points="0,-40 17.8,35 -28.9,-12.9 28.9,-12.9 -17.8,35"/>
        </g>
        <g transform="translate(60.5,3.8) scale(0.0616)">
          <polygon points="0,-40 17.8,35 -28.9,-12.9 28.9,-12.9 -17.8,35"/>
        </g>
        <g transform="translate(77.8,3.8) scale(0.0616)">
          <polygon points="0,-40 17.8,35 -28.9,-12.9 28.9,-12.9 -17.8,35"/>
        </g>
      </g>
    </svg>
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#" onClick={scrollToTop}>
          <img src={logoVonic} alt="Vonic" className="logo-img" />
        </a>
      </div>
      
      <button className="mobile-menu-button" onClick={toggleMenu}>
        <svg 
          className="mobile-menu-icon" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, 'hero')}
          >
            {translate('nav.about')}
          </a>
        </li>
        <li>
          <a 
            href="#products" 
            onClick={(e) => handleScroll(e, 'products')}
          >
            {translate('nav.products')}
          </a>
        </li>
        <li>
          <a 
            href="#partners" 
            onClick={(e) => handleScroll(e, 'partners')}
          >
            {translate('nav.partners')}
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
          >
            {translate('nav.contact')}
          </a>
        </li>
      </ul>

      <div className="language-selector">
        <a 
          href="#" 
          className="lang-link"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage(currentLanguage === 'en' ? 'pt' : 'en');
          }}
        >
          {currentLanguage === 'en' ? <USAFlag /> : <BrazilFlag />}
          <span>{currentLanguage === 'en' ? 'ENGLISH' : 'PORTUGUÊS'}</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar; 