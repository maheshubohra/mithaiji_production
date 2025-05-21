import {
  FaInstagram,
  FaWhatsapp,
  FaGoogle,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import Footer from "../comnponents/Footer";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="absolute top-28 left-10">
        <Link to="/">
          <FaArrowAltCircleLeft className="text-4xl text-[#801336] hover:text-red-600 transition duration-300" />
        </Link>
      </div>
      <div className="min-h-screen bg-gradient-to-b from-[#FFF3EB] to-[#FFEAE0] pt-36 pb-16 px-4 lg:px-24 flex flex-col items-center text-[#801336]">
        <h1 className="text-3xl font-extrabold mb-10 text-center tracking-wide drop-shadow-sm lg:text-5xl">
          Get in Touch
        </h1>

        {/* Map Section */}

        {/* Contact Info Container */}
        <div className="w-full max-w-2xl bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl px-8 py-10 space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-[#ffe1d2] p-3 rounded-full shadow-sm">
              <FaMapMarkerAlt className="text-2xl text-[#801336]" />
            </div>
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              24, Mambalam High Rd, Parthasarathi Puram, T. Nagar, Chennai, Tamil Nadu 600017
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#ffe1d2] p-3 rounded-full shadow-sm">
              <FaPhoneAlt className="text-xl text-[#801336]" />
            </div>
            <p className="text-lg md:text-xl font-medium">+91 98403 26318</p>
          </div>

          <div className="pt-2">
            <h2 className="text-2xl font-semibold mb-4">Follow us</h2>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/mithaiji.chennai?igsh=MTVzMXU3ZHV2c3p3OA=="
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <FaInstagram className="text-4xl text-[#E1306C] hover:text-[#C13584]" />
              </a>
              <a
                href="https://wa.me/919840326318?text=Hello%21%20I%20would%20like%20to%20enquire%20about%20your%20offerings."
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <FaWhatsapp className="text-4xl text-[#25D366] hover:text-[#128C7E]" />
              </a>
              <a
                href="https://maps.app.goo.gl/AmJCXa6u7VAqivaY7"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <FaGoogle className="text-4xl text-[#DB4437] hover:text-[#EA4335]" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl rounded-xl overflow-hidden shadow-xl mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7273856463785!2d80.231515!3d13.053016800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526715f3819bff%3A0xa6c08df154548ce2!2smithaiji!5e0!3m2!1sen!2sin!4v1747742049214!5m2!1sen!2sin"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mithaiji Location"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
