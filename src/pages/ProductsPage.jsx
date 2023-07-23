import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Sliders from "../components/Sliders";
import Story from "../components/Story";

export default function ProductsPage() {
  return (
    <>
      <Navbar></Navbar>
      <Products></Products>
      <div className="py-5 text-center text-3xl uppercase tracking-wider font-semibold">
        <h3>learn more</h3>
      </div>
      <Sliders></Sliders>
      <Story></Story>
      <Footer></Footer>
    </>
  );
}
