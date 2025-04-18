const Features = () => {
  const feature = [
    {
      id: 1,
      title: "100% Pure,Authentic & Natural",
      image: "/assets/features/no-preservative-sweetz.png",
    },
    {
      id: 2,
      title: "Fresh",
      image: "/assets/features/fresh-sweet.png",
    },
    {
      id: 3,
      title: "Clean And Hygenic",
      image: "assets/features/water-purifire.png",
    },
    {
      id: 4,
      title: "Traditional Preparation & Taste",
      image: "/assets/features/traditional-sweet.png",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 text-center mx-2">
        {feature.map((feature) => (
          <div className="flex flex-col items-center justify-center flex-wrap" key={feature.id}>
            <img
              src={feature.image}
              alt="Feature"
              className="filter invert contrast-200 brightness-150 w-[85px] h-[85px]"
            />
            <p className="text-sm text-[#303030] font-extrabold mt-3 lg:text-md">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
