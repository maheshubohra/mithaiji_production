import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaGoogle } from "react-icons/fa";

const Footer = ({ about, products }) => {
  return (
    <>
      <footer className="bg-[#FFEFEA] text-[#801336] py-10 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-6">
            <p className="text-lg md:text-xl font-semibold">
              &copy; {new Date().getFullYear()} Mithaiji. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Developed with <span className="text-red-600">❤️</span> by{" "}
              <a
                href="https://www.linkedin.com/in/rudresh-h-vyas/"
                className="font-bold text-[#801336] hover:text-red-600 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                RUDRESH H VYAS
              </a>
            </p>
          </div>

          <div className="mb-6 space-x-6">
            <a
              href="/"
              className="text-sm hover:text-red-600 transition duration-300 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={about}
              className="text-sm hover:text-red-600 transition duration-300 cursor-pointer"
            >
              About
            </a>
            <a
              onClick={products}
              className="text-sm hover:text-red-600 transition duration-300 cursor-pointer"
            >
              Products
            </a>
            <a
              href="/contact"
              className="text-sm hover:text-red-600 transition duration-300 cursor-pointer"
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center space-x-6">
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
      </footer>
    </>
  );
};

export default Footer;
