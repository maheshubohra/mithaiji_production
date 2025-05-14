// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <section className="py-20 px-4 lg:px-20 bg-[#FFF8F5]">
      <motion.div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#801336] mb-6">
          About Us
        </h1>
        <p className="text-lg text-[#303030] mb-12">
          Welcome to Mithaiji, your destination for authentic Indian sweets and
          savouries, crafted with tradition, love, and the finest ingredients.
          Every bite carries the rich flavours of India.
        </p>
      </motion.div>

      <motion.div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#801336]">Our Story</h2>
        <p className="text-lg text-[#303030] mb-6">
          Mithaiji started in August 2019, when our founder Smt. Sapna Bohra
          took her first step into the world of entrepreneurship. With a focus
          on creating high-quality, authentic sweets, our mission is simple: to
          make traditional Indian sweets accessible and unforgettable.
        </p>
        <p className="text-lg text-[#303030] mb-6">
          We pride ourselves on preparing our sweets in pure ghee, without
          preservatives, staying true to the age-old recipes passed down through
          generations.
        </p>
        <p className="text-lg text-[#303030]">
          Our sweets are perfect for festivals, weddings, and special occasions,
          and we promise to add sweetness and joy to your most cherished
          moments.
        </p>
      </motion.div>

      <motion.div className="max-w-5xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-8 text-[#801336]">Our Mission</h2>
        <p className="text-lg text-[#303030]">
          At Mithaiji, we’re dedicated to spreading happiness through our
          delicious treats. Whether it’s a corporate gift, wedding hamper, or
          festive box, we create thoughtful and customized gifting solutions
          that reflect our values of quality, authenticity, and love for
          tradition.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
