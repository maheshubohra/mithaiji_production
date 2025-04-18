import { useState } from "react";

const Navbar = ({ about, product }) => {
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setOn(!on);
  };
  return (
    <>
      <div className="w-full h-auto lg:w-full bg-gray-800 fixed top-0 left-0 z-[60] text-white py-1 text-sm lg:text-md">
        For Enquiry
      </div>

      <nav className="bg-[#FFF8F5] h-auto fixed top-10 left-1/2 border-b-4 border-[#801336] drop-shadow-[#801336] drop-shadow-sm transform -translate-x-1/2 z-70 w-auto lg:w-auto rounded-lg transition-transform duration-500 ease-in-out  hover:scale-105">
        <div className="flex justify-center items-center gap-5 h-full px-4 py-1">
          <div className="block">
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
              <li className="hover:text-[#FFA987] cursor-pointer">Contact</li>
            </ul>
          )}
          <ul className="space-x-4 text-[#801336] hidden lg:flex">
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
