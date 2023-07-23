import { useNavigate } from "react-router-dom";

export default function NavbarHero() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex justify-between items-start h-16">
        <a href="#" className="pl-5" onClick={() => navigate("/")}>
          <img src="src/assets/logo2.avif" alt="" height={60} width={110} />
        </a>
        <div className="flex mr-8 gap-16 text-slate-700 ">
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
    </>
  );
}
