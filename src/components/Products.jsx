import productsData from "../data/productsData";
import Cards from "./Cards";

export default function Products() {
  const products = productsData;
  return (
    <>
      <div className="w-full  py-14">
        <div className="mx-auto max-w-7xl">
          <ul className="grid list-none grid-cols-3 gap-4 ">
            {products.map((item) => (
              <Cards itemObj={item} key={item.name}></Cards>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
