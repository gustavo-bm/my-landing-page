import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    title: "Parceria Estratégica com Mastip",
    description: "Estamos orgulhosos em anunciar nossa parceria com a Mastip, líder em soluções industriais.",
    image: "/images/mastip-partnership.jpg" // Você precisará adicionar esta imagem
  },
  {
    id: 2,
    title: "Inovação Constante",
    description: "Desenvolvendo novas tecnologias para impulsionar seu negócio.",
    image: "/images/innovation.jpg"
  },
  {
    id: 3,
    title: "Compromisso com Qualidade",
    description: "Excelência em cada projeto que entregamos.",
    image: "/images/quality.jpg"
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative h-[500px] overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-white text-center max-w-2xl px-4">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel 