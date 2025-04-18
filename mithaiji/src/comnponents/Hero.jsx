import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);
  const sw = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["With You In Every Ocassion"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 30,
      showCursor: false,
    });

    const swiped = new Typed(sw.current, {
      strings: ["Sweets", "Snacks", "Hampers", "Sweets•Snacks•Hampers"],
      typeSpeed: 100,
      backSpeed: 30,
      showCursor: false,
      loop: false,
    });

    return () => {
      typed.destroy();
      swiped.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const images = [
    "/assets/corousel/01.jpg",
    "/assets/corousel/02.jpeg",
    "/assets/corousel/03.jpg",
    "/assets/corousel/04.jpeg",
  ];

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen pt-32 lg:pt-32 pb-8 lg:pb-16">
      <div className="relative z-20 text-center mb-8 lg:mb-12 rounded-3xl px-4 py-3 shadow-lg bg-[#FFEFEA] flex flex-col items-center justify-center mx-auto max-w-fit">
        <div className="h-[40px] mb-0 lg:mb-4">
          <h1
            ref={el}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-[#303030]"
          >
            &nbsp;
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

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          <img
            src={index === 0 ? images[images.length - 1] : images[index - 1]}
            alt="Previous slide"
            className="hidden lg:block w-1/4 h-auto object-cover blur-sm opacity-50"
          />
          <img
            src={images[index]}
            alt="Current slide"
            className="w-full lg:w-1/2 h-auto object-cover rounded-2xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <img
            src={index === images.length - 1 ? images[0] : images[index + 1]}
            alt="Next slide"
            className="hidden lg:block w-1/4 h-auto object-cover blur-sm opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
