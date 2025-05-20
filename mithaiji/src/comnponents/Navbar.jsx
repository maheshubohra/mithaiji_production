import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaArrowUp,
  FaWhatsapp,
  FaMap,
  FaGoogle,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, Links } from "react-router-dom";

const Navbar = ({ about, product }) => {
  const [fly, setFly] = useState(false);
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setOn(!on);
  };
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="w-full h-auto lg:w-full bg-[#FFEFEA] fixed top-0 left-0 z-[60] text-white py-2 text-xs lg:text-md flex justify-evenly items-center flex-col lg:flex-row">
        <div className="text-[#303030] font-bold">
          For Enquiry -&gt; Call Us On -{" "}
          <span className="font-extrabold">9840326318</span>
        </div>
        <div className="flex justify-center space-x-2 items-center">
          <span className="text-[#303030] font-bold">Follow Us On - </span>
          <a
            href="https://www.instagram.com/mithaiji.chennai?igsh=MTVzMXU3ZHV2c3p3OA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-[#801336] hover:text-red-600 transition duration-300" />
          </a>
          <a
            href="https://wa.me/919840326318?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20your%20offerings."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl text-[#801336] hover:text-red-600 transition duration-300" />
          </a>
          <a
            href="https://maps.app.goo.gl/AmJCXa6u7VAqivaY7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle className="text-2xl text-[#801336] hover:text-red-600 transition duration-300" />
          </a>
        </div>
      </div>

      <nav className="bg-[#FFF8F5] h-auto fixed top-15 lg:top-11 left-1/2 border-b-4 border-[#801336] drop-shadow-[#801336] drop-shadow-sm transform -translate-x-1/2 z-70 w-auto lg:w-auto rounded-lg transition-transform duration-500 ease-in-out  hover:scale-105">
        <div className="flex justify-center items-center gap-5 h-full px-4 py-1">
          <div className="block">
            <img
              src="/assets/mithaiji02.png"
              alt="mithaiji"
              width={110}
              className="transform scale-150 drop-shadow-md"
              loading="lazy"
            />
          </div>
          <button
            onClick={handleClick}
            className="text-[#801336] font-extrabold text-2xl lg:hidden"
          >
            {on ? "✖" : "☰"}
          </button>
          {on && (
            <ul className="fixed top-17 w-full flex flex-col gap-4 px-5 py-2 bg-[#FFF8F5] rounded-lg shadow-2xl text-[#801336] lg:hidden">
              <li className="hover:text-[#FFA987] cursor-pointer">
                <a onClick={about}>About</a>
              </li>
              <li className="hover:text-[#FFA987] cursor-pointer">
                <a onClick={product}>Products</a>
              </li>
              <li className="hover:text-[#FFA987] cursor-pointer">
                <Link href="/contactus">Contact</Link>
              </li>
            </ul>
          )}
          <ul className="space-x-4 text-[#801336] hidden lg:flex">
            <li className="hover:text-[#FFA987] cursor-pointer">
              <a onClick={about}>About</a>
            </li>
            <li className="hover:text-[#FFA987] cursor-pointer">
              <a onClick={product}>Products</a>
            </li>
            <li className="hover:text-[#FFA987] cursor-pointer">
              <Link to="/contactus">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <AnimatePresence>
        {showScrollBtn && (
          <motion.div
            key="scroll-to-top"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 right-4 z-[100]"
          >
            <motion.button
              onClick={() => {
                setFly(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              initial={{ scale: 1, rotate: 0 }}
              animate={
                fly ? { y: -300, rotate: -15, scale: 1.5, opacity: 0 } : {}
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-[#801336] w-[50px] h-[50px] flex items-center justify-center rounded-full shadow-xl"
              onAnimationComplete={() => setFly(false)}
            >
              <FaArrowUp className="text-2xl text-[#FFF8F5] cursor-pointer" />
            </motion.button>
            {fly && (
              <motion.div
                initial={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20px] h-[20px] bg-[#801336] rounded-full blur-sm"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
