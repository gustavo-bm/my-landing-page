import { useTranslation } from '../context/LanguageContext';
import ProductModel from './ProductModel';

function Products() {
  const { translate } = useTranslation();

  const products = [
    {
      id: 1,
      name: 'Smart Control X1',
      modelType: 'box',
      description: 'Advanced control system with intelligent monitoring and real-time data analysis.',
      category: 'Control Systems'
    },
    {
      id: 2,
      name: 'ProSensor 2000',
      modelType: 'sphere',
      description: 'High-precision industrial sensor for temperature and pressure monitoring.',
      category: 'Sensors'
    },
    {
      id: 3,
      name: 'AutoFlow Valve',
      modelType: 'cylinder',
      description: 'Automated valve system with precise flow control and remote operation capabilities.',
      category: 'Valves'
    },
    {
      id: 4,
      name: 'DataLogger Pro',
      modelType: 'box',
      description: 'Industrial data logging system with cloud connectivity and advanced analytics.',
      category: 'Monitoring'
    },
    {
      id: 5,
      name: 'SafeGuard Module',
      modelType: 'sphere',
      description: 'Safety monitoring system with emergency shutdown and alert features.',
      category: 'Safety'
    },
    {
      id: 6,
      name: 'EcoFlow System',
      modelType: 'cylinder',
      description: 'Energy-efficient flow control system with optimization algorithms.',
      category: 'Efficiency'
    }
  ];

  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">{translate('products.title')}</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-model-container">
                <ProductModel modelType={product.modelType} />
              </div>
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
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
  );
}

export default Products; 