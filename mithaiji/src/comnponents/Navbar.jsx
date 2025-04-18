const Navbar = ({ about, product }) => {
  return (
    <>
      <div className="w-full h-auto lg:w-full bg-gray-800 fixed top-0 left-0 z-[60] text-white py-1 text-sm lg:text-md">
        For Enquiry
      </div>

      <nav className="bg-[#FFF8F5] h-auto fixed top-10 left-1/2 border-b-4 border-[#801336] drop-shadow-[#801336] drop-shadow-sm transform -translate-x-1/2 z-70 w-auto lg:w-auto rounded-lg transition-transform duration-500 ease-in-out  hover:scale-105">
        <div className="flex justify-center items-center gap-5 h-full px-4 py-1">
          <div className="hidden lg:block">
            <a href="/">
              <img
                src="/assets/mithaiji02.png"
                alt="mithaiji"
                width={110}
                className="transform scale-150 drop-shadow-md"
                loading="lazy"
              />
            </a>
          </div>
          <ul className="flex space-x-4 text-[#801336]">
            <li className="lg:hidden cursor-pointer">Home</li>
            <li className="hover:text-[#FFA987] cursor-pointer">
              <a onClick={about}>About</a>
            </li>
            <li className="hover:text-[#FFA987] cursor-pointer">
              <a onClick={product}>Products</a>
            </li>
            <li className="hover:text-[#FFA987] cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
