import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-[#801336] mt-6">
        About Us
      </h2>
      <div className="flex justify-center items-center gap-4 bg-[#FFEFEA] rounded-3xl p-4 lg:p-8 mx-auto max-w-7xl mt-5 mb-6 flex-col lg:flex-row">
        <img
          src="/assets/mithai/Sev_Boondi.jpeg"
          alt=""
          className="lg:float-left w-1/2 lg:w-1/4 rounded-2xl"
        />
        <p className="text-[#303030] text-center font-bold ">
          Mithaiji started in August 2019, as our founder Smt. Sapna Bohra kept
          her first foot in the world of entrepreneurship. Our mission is to
          focus on creating high quality and authentic Sweets, which we continue
          to follow. At Mithaiji, we craft authentic Indian sweets and savouries
          with pure ghee, top-quality ingredients, and zero preservatives. From
          Kaju Katli and Badam Bites to Besan Chakki, Motichoor Laddoo, and
          savoury treats like Lal Sev and Boondi Sev — every bite is made with
          love and tradition. Our cloud kitchen specialises in corporate
          gifting, wedding hampers, festive boxes, and customised hampers
          carefully curated to suit your budget and occasion. We believe in
          spreading happiness through sweets, making every celebration a little
          more joyful and memorable{" "}
          <Link className="underline text-[#801336]" to="/about">
            Learn More About Mithaji
          </Link>
        </p>
      </div>
    </>
  );
};

export default About;
