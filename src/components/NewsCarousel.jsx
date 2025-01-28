import { memo, lazy, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import mastipImage from '../assets/medicao.jpg';
import image1 from '../assets/products.jpg';
import image2 from '../assets/sistema2.jpg';

// Lazy load das imagens
const LazyImage = lazy(() => import('./LazyImage'));

function NewsCarouselComponent() {
  const news = [
    {
      id: 1,
      title: 'Parceria Estratégica com Mastip',
      description: 'A Vonic tem o prazer de anunciar sua parceria estratégica com a Mastip, líder global em sistemas de câmara quente. Esta colaboração fortalece nossa posição no mercado e amplia nossa capacidade de oferecer soluções inovadoras.',
      image: mastipImage,
      date: '2024'
    },
    {
      id: 2,
      title: 'Expansão de Operações',
      description: 'Inauguramos nossa nova unidade em São Paulo, ampliando nossa capacidade de atendimento e suporte técnico.',
      image: image1,
      date: '2024'
    },
    {
      id: 3,
      title: 'Inovação em Sistemas de Controle',
      description: 'Lançamento da nova linha de controladores inteligentes com tecnologia IoT integrada.',
      image: image2,
      date: '2024'
    }
  ];

  return (
    <section className="news-section" id="news">
      <div className="container">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="news-swiper"
          lazy={true}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="news-slide">
                <Suspense fallback={<div className="loading-placeholder" />}>
                  <LazyImage src={item.image} alt={item.title} />
                </Suspense>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button className="cta-button">Saiba mais</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default memo(NewsCarouselComponent); 