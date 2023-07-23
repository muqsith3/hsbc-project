import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Qoutes from "../components/Qoutes";
import Reviews from "../components/Reviews";
import Sliders from "../components/Sliders";
import Story from "../components/Story";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <Qoutes></Qoutes>
        <Story></Story>
        <Sliders></Sliders>
        <Reviews></Reviews>
      </main>
      <Footer></Footer>
    </>
  );
}
