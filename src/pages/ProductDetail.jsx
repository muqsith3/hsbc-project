import EmailBox from "../components/EmailBox";
import Hero from "../components/Hero";
import Rating from "../components/Rating";
import RelatedProduct from "../components/RelatedProduct";
import Review from "../components/Review";
import StoryVideo from "../components/StoryVideo";
import Story from "../components/Story";
import Footer from "../components/Footer";
import NavbarHero from "../components/NavbarHero";

export default function ProductDetail() {
  return (
    <>
      <div className="px-40 mx-auto bg-[#f7f3f2]">
        <NavbarHero></NavbarHero>
        <Hero></Hero>
        <Review></Review>
        <Rating></Rating>
        <RelatedProduct></RelatedProduct>
        <StoryVideo></StoryVideo>
        <EmailBox></EmailBox>
        <Story></Story>
      </div>
      <Footer></Footer>
    </>
  );
}
