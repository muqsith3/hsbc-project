import Slider from "./Slider";

export default function Sliders() {
  const slides = [
    { name: "src/assets/slider-1.webp" },
    { name: "src/assets/slider-2.webp" },
    { name: "src/assets/slider-3.webp" },
    { name: "src/assets/slider-4.webp" },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl h-[500px] py-10">
        <Slider slides={slides}></Slider>
      </div>
    </>
  );
}
