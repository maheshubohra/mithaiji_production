import { useEffect, useRef } from "react";
import Slider from "react-slick";
import Typed from "typed.js";
import "../../styles/hero.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const sw = useRef(null);

  useEffect(() => {
    const swiped = new Typed(sw.current, {
      strings: ["Sweets", "Snacks", "Hampers", "Sweets • Savouries • Hampers"],
      typeSpeed: 100,
      backSpeed: 30,
      showCursor: false,
      loop: false,
    });

    return () => {
      swiped.destroy();
    };
  }, []);

  const images = [
    "/assets/corousel/01.jpg",
    "/assets/corousel/02.jpeg",
    "/assets/corousel/03.jpg",
    "/assets/corousel/04.jpeg",
  ];

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen pt-32 pb-16">
      <div className="relative z-20 text-center mb-12 rounded-3xl px-4 py-3 shadow-lg bg-[#FFEFEA] flex flex-col items-center justify-center mx-auto max-w-fit">
        <div className="h-[40px] mb-0 lg:mb-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#303030] font-serif">
            - with you In every ocassion -
          </h1>
        </div>
        <div className="h-[32px]">
          <p
            ref={sw}
            className="text-md md:text-lg lg:text-xl font-bold text-[#303030]"
          >
            &nbsp;
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 hero-slider">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="px-2">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
