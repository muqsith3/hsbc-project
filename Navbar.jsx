function Navbar() {
  return (
    <div>
      <div className="bg-center  bg-cover bg-[url('https://images.pexels.com/photos/34085/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <div className="flex flex-wrap justify-between items-center bg-local p-3">
          <img className="w-28" src="https://portofmokha.com/cdn/shop/files/type-white_f6376a9a-39f4-4396-827e-25364d56abf1_100x.png?v=1613734073" alt="" />
          <nav className="flex justify-end">
            <ul className="flex gap-3 w-auto text-lg pr-8">
              <a href="#" class=" text-white  font-semibold">
                Coffee
              </a>
              <a href="#" class=" text-white  font-semibold">
                Brew Guide
              </a>
              <a href="#" class=" text-white font-semibold">
                All Product
              </a>
            </ul>
            <div>
              <button className="bg-transparent hover:bg-amber-900 text-white font-semibold hover:text-white  border border-white hover:border-transparent rounded  transition-all duration-700">
                <img className=" pr-[6px] h-10 pb-1" src="https://www.svgrepo.com/show/505592/cart-2.svg" alt="" />
              </button>
            </div>
          </nav>
        </div>
        <div class="pt-40">
          <p class="justify-center flex text-4xl text-white font-Cinzel">TAKE A JOURNEY TO THE ANOTHER LEVEL OF YOUR COFFEE</p>
        </div>
        <div class="flex justify-center pt-7 ">
          <button className="bg-transparent hover:bg-amber-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mx-3 transition-all duration-700">Shop Coffee</button>
          <button className="bg-transparent hover:bg-amber-900 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded font-mono mx-3 transition-all duration-700">Our Story</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
