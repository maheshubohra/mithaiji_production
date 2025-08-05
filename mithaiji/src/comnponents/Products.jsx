import Slider from "react-slick";

const Products = () => {
  const product = [
    {
      _id: "1",
      name: "Traditional Mithai",
      imageuri: [
        "/assets/mithai/Anjeer_Roll.jpeg",
        "/assets/mithai/Assorted_Sweets.jpg",
        "/assets/mithai/Sev_Boondi.jpeg",
        "/assets/mithai/Besan_Chakki.jpeg",
      ],
    },
    {
      _id: "2",
      name: "Snacks",
      imageuri: [
        "/assets/namkeen/Butter_Bhakarwadi.jpg",
        "/assets/namkeen/Coin_Mathri.jpg",
        "/assets/namkeen/Lasan_Sev.jpg",
        "/assets/namkeen/Mini_Kachori.jpg",
      ],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="mt-5">
      <h2 className="text-3xl font-bold text-center text-[#801336] mb-6">
        Products
      </h2>
      <div className="flex justify-center mb-6 flex-wrap bg-[#FFEFEA] rounded-3xl">
        {product.map((product) => (
          <div
            className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            key={product._id}
          >
            <div className="mx-3 mt-3 rounded-xl">
              <Slider {...sliderSettings}>
                {product.imageuri.map((image, index) => (
                  <div key={index}>
                    <img
                      className="h-60 w-full object-cover rounded-xl"
                      src={image}
                      alt={`product image ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="mt-4 px-5 pb-5">
              <h5 className="text-xl tracking-tight text-slate-900 my-2 font-bold">
                {product.name}
              </h5>
              <a
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                href="https://wa.me/9445698920?text=Hello%21%20I%20would%20like%20to%20order%20from%20you."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
