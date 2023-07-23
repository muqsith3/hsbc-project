export default function Story() {
  return (
    <>
      <div className="max-w-7xl mx-auto pb-10">
        <div className="relative">
          <div className="grid grid-cols-4">
            <div className="col-span-4 relative">
              <img
                className="object-cover object-left-top h-[500px] w-full"
                src="https://portofmokha.com/cdn/shop/files/mokhtar-mountain_2048x.jpg?v=1613734298"
                alt="Gambar"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-[#cbded2] flex flex-col justify-center">
                <div className="text-start grid grid-cols-4 p-20">
                  <div className="col-span-2">
                    <h1 className="text-black text-2xl py-2 font-bold tracking-wider mr-20">
                      COFFEE WORTH RISKING YOUR LIFE FOR
                    </h1>
                    <p className="text-black py-2">
                      Experience the story of how Mokhtar escaped Yemen by boat
                      to introduce his coffee to the world.
                    </p>
                    <button className="bg-transparent text-black border border-black py-3 px-6 text-start my-5 hover:bg-black hover:text-white">
                      The Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
