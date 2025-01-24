import { useTranslation } from '../context/LanguageContext';

function Hero() {
  const { translate } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>
          <span className="hero-title">{translate('hero.title')}</span>
          <span className="hero-subtitle">{translate('hero.subtitle')}</span>
        </h1>
        <p className="hero-description">
          {translate('hero.description')}
        </p>
        <button className="cta-button">{translate('hero.cta')}</button>
      </div>
    </section>
  );
}

export default Hero; 