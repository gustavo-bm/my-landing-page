import { useTranslation } from '../context/LanguageContext';
import ProductModel from './ProductModel';
import medicaoImage from '../assets/medicao.jpg';
import sistema2Image from '../assets/sistema2.jpg';

function Catalog() {
  const { translate } = useTranslation();

  const products = [
    {
      id: 1,
      title: 'Sistema de Câmara Quente',
      category: 'Sistemas',
      description: 'Sistema de câmara quente de alta performance para injeção de plásticos.',
      image: sistema2Image,
      modelType: 'cylinder'
    },
    {
      id: 2,
      title: 'Sistema de Medição',
      category: 'Medição',
      description: 'Sistema de medição de precisão para controle de qualidade.',
      image: medicaoImage,
      modelType: 'box'
    },
    {
      id: 3,
      title: 'Controlador de Temperatura',
      category: 'Controle',
      description: 'Controlador de temperatura inteligente com interface digital.',
      modelType: 'sphere'
    },
    {
      id: 4,
      title: 'Sistema de Monitoramento',
      category: 'Monitoramento',
      description: 'Sistema de monitoramento em tempo real para processos industriais.',
      modelType: 'box'
    },
    {
      id: 5,
      title: 'Válvula de Injeção',
      category: 'Componentes',
      description: 'Válvula de injeção de alta precisão para sistemas de câmara quente.',
      modelType: 'cylinder'
    },
    {
      id: 6,
      title: 'Sistema de Refrigeração',
      category: 'Refrigeração',
      description: 'Sistema de refrigeração eficiente para moldes de injeção.',
      modelType: 'sphere'
    }
  ];

  return (
    <div className="catalog-page">
      <div className="catalog-hero">
        <div className="container">
          <h1>Catálogo Completo</h1>
          <p>Conheça nossa linha completa de produtos e soluções</p>
        </div>
      </div>
      
      <section className="catalog-section">
        <div className="container">
          <div className="catalog-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.image ? (
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                ) : (
                  <div className="product-model-container">
                    <ProductModel modelType={product.modelType} />
                  </div>
                )}
                <div className="product-content">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <button className="product-button">
                    {translate('products.learnMore')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Catalog; 