import Navbar from "../component/Navbar";
function Allproduct() {
  return (
    <div>
      <Navbar />
      <nav className="flex justify-end">
        <ul className="flex gap-3 top-0-0 w-auto text-lg pr-8">
          <a href="#" class=" text-white  font-semibold">
            All Product
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Allproduct;
