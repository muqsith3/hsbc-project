import { useNavigate, useAsyncValue } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-[url(src/assets/hero-manual.webp)] bg-no-repeat bg-cover bg-center relative">
        <nav className="flex justify-between items-start h-96 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-transparent pt-7">
          <a href="#" className="pl-5" onClick={() => navigate("/")}>
            <img src="src/assets/logo2.avif" alt="" height={60} width={110} />
          </a>
          <div className="flex mr-8 gap-16 text-white ">
            <a href="" className="hover:text-slate-300">
              Coffee
            </a>
            <a href="#" className="hover:text-slate-300">
              Brew Guides
            </a>
            <a
              href="/products"
              className="hover:text-slate-300"
              onClick={() => navigate("/products")}>
              All Product
            </a>
          </div>
        </nav>
        <p className="text-center absolute top-1/2 left-1/2 text-white text-3xl font-mono tracking-wider font-bold translate-x-[-50%] translate-y-[-50%]">
          Shop Coffe
        </p>
      </header>
      {/* <div className="">
        <img
          src="src/assets/hero-manual.webp"
          alt=""
          className="w-full bg-gradient-to-b from-black to-white"
        />
      </div> */}
    </>
  );
}
