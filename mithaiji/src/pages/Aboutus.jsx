// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Footer from "../comnponents/Footer";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutUs = () => {
  return (
    <>
      <div className="absolute top-28 left-10">
        <Link to="/">
          <FaArrowAltCircleLeft className="text-4xl text-[#801336] hover:text-red-600 transition duration-300" />
        </Link>
      </div>
      <section className="pt-32 pb-20 px-4 lg:px-20 bg-[#FFF8F5] min-h-screen flex flex-col justify-center">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-5xl font-extrabold text-[#801336] mb-8 tracking-wide">
            About Us
          </h1>
          <p className="text-xl text-[#303030] mb-16 leading-relaxed">
            Welcome to <span className="font-semibold">Mithaiji</span>, your
            ultimate destination for authentic Indian sweets and savouries,
            crafted with <span className="italic">love, tradition</span>, and
            the finest ingredients. Every bite is a little celebration of
            India’s rich culinary heritage — sweet, bold, and unforgettable.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#801336] tracking-tight">
            Our Story
          </h2>
          <p className="text-lg text-[#303030] mb-6 leading-relaxed">
            Mithaiji’s journey began in August 2019, when our passionate founder{" "}
            <span className="font-semibold">Smt. Sapna Bohra</span> turned her
            sweet dreams into reality. Inspired by age-old family recipes and a
            desire to share the magic of Indian sweets, we’ve made it our
            mission to craft treats that bring smiles and nostalgia to every
            occasion.
          </p>
          <p className="text-lg text-[#303030] mb-6 leading-relaxed">
            Using only{" "}
            <span className="underline decoration-[#801336]/40">pure ghee</span>{" "}
            and zero preservatives, we stay true to traditions while delighting
            modern palates. Our sweets are handcrafted with care, ensuring each
            piece is a perfect balance of texture, flavor, and love.
          </p>
          <p className="text-lg text-[#303030] leading-relaxed">
            Whether it’s festivals, weddings, or everyday moments, Mithaiji adds
            that special touch of sweetness to your life — because every moment
            deserves a celebration.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto text-center mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-8 text-[#801336] tracking-tight">
            Our Mission
          </h2>
          <p className="text-lg text-[#303030] leading-relaxed max-w-3xl mx-auto">
            At Mithaiji, happiness is our secret ingredient. We’re committed to
            spreading joy through our handcrafted sweets and bespoke gifting
            experiences. From corporate gifts to wedding hampers and festive
            boxes, we curate each package with care and creativity — blending
            quality, authenticity, and heartfelt tradition to create memories
            that last a lifetime.
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
