import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

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
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl text-[#801336] hover:text-red-600 transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-[#801336] hover:text-red-600 transition duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl text-[#801336] hover:text-red-600 transition duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-[#801336] hover:text-red-600 transition duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
