import { useState } from "react";

export default function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 1;
    const newIndex = isFirstSlide ? slides.length : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length;
    const newIndex = isLastSlide ? 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  return (
    <>
      <div className="relative h-full">
        <div
          className="absolute top-1/2 translate-y-[-50%] left-8 text-slate-800 text-4xl z-30 cursor-pointer "
          onClick={goToPrevious}>
          &#60;
        </div>
        <div
          className={`bg-[url(src/assets/slider-${currentIndex}.webp)] w-full h-full bg-no-repeat bg-cover bg-center rounded-lg`}>
          <div className=" text-white pt-10 bg-gradient-to-r from-[#C1D6D7] to-transparent h-full  pl-[10%]">
            <div className="max-w-[30%] text-slate-700">
              <p className="text-sm font-normal leading-loose pb-7">
                "Port of Mokha is utterly unique...What Mokhtar has done,
                immersing himself in war-torn Yemen, takes real courage; to
                return with treasures is something of a miracle."
              </p>
              <p className="text-base pb-7">Port Of Mokha</p>
              <button className="border-solid text-xs font-normal uppercase px-7 py-4 border-black border-2 tracking-wide rounded-md hover:text-white hover:bg-black">
                See praise
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute top-1/2 translate-y-[-50%] right-8 text-slate-800 text-4xl z-30 cursor-pointer "
          onClick={goToNext}>
          &#62;
        </div>
        <p>{currentIndex}</p>
      </div>
    </>
  );
}
