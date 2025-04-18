import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import About from "../comnponents/About";
import Features from "../comnponents/Features";
import Hero from "../comnponents/Hero";
import Navbar from "../comnponents/Navbar";
import Products from "../comnponents/Products";

const Home = () => {
  const aboutRef = useRef(null);
  const productRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const productInView = useInView(productRef, { once: true, margin: "-80px" });

  const scrollToAbout = () => {
    if (aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToProduct = () => {
    if (productRef.current) {
      window.scrollTo({
        top: productRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen pt-[10px] lg:pt-[45px]">
      <Navbar about={scrollToAbout} product={scrollToProduct} />
      <main className="container mx-auto">
        <Hero />
        <section className="lg:py-16 mb-7">
          <Features />
        </section>

        <div className="block h-1 bg-[#DFF5FF] w-[90%] lg:w-full mx-auto rounded-2xl"></div>

        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 40 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <About />
        </motion.section>

        <div className="block h-1 bg-[#DFF5FF] w-[90%] lg:w-full mx-auto rounded-2xl"></div>

        <motion.section
          ref={productRef}
          initial={{ opacity: 0, y: 40 }}
          animate={productInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <Products />
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
