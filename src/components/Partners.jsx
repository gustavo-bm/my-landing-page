import { useTranslation } from '../context/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function Partners() {
  const { translate } = useTranslation();

  const partners = [
    {
      id: 1,
      name: 'TechCorp Industries',
      logo: '🏢',
      testimonial: 'testimonials.techcorp',
      author: 'John Smith',
      position: 'CEO'
    },
    {
      id: 2,
      name: 'InnovateMold',
      logo: '⚡',
      testimonial: 'testimonials.innovate',
      author: 'Maria Garcia',
      position: 'Operations Director'
    },
    {
      id: 3,
      name: 'GlobalPlast',
      logo: '🌐',
      testimonial: 'testimonials.globalplast',
      author: 'Robert Chen',
      position: 'Production Manager'
    },
    {
      id: 4,
      name: 'FutureTech Solutions',
      logo: '🚀',
      testimonial: 'testimonials.futuretech',
      author: 'Sarah Johnson',
      position: 'Technical Director'
    },
    {
      id: 5,
      name: 'EcoMold Systems',
      logo: '🌱',
      testimonial: 'testimonials.ecomold',
      author: 'Michael Brown',
      position: 'Innovation Manager'
    }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <h2 className="section-title">{translate('partners.title')}</h2>
        <p className="section-subtitle">{translate('partners.subtitle')}</p>
        
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          className="partners-swiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="testimonial-card">
                <div className="partner-logo">
                  <span className="logo-emoji">{partner.logo}</span>
                  <h3>{partner.name}</h3>
                </div>
                <div className="testimonial-content">
                  <blockquote>
                    {translate(partner.testimonial)}
                  </blockquote>
                  <div className="testimonial-author">
                    <p className="author-name">{partner.author}</p>
                    <p className="author-position">{partner.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partners; 