import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Cards({ itemObj }) {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="w-full h-[100px] bg-slate-600 py-6">
        <div className="">
          <ul className=""> */}
      <li className="bg-[#F8F3F2] flex flex-col justify-center items-center rounded-md text-slate-800">
        <a href="" onClick={() => navigate("/productDetail")}>
          <img
            src={itemObj.photoName}
            alt={itemObj.name}
            className="py-8 w-full"
          />
          <div className="p-5 text-center">
            <p>
              {itemObj.name} - {itemObj.much}
            </p>
            <div className="flex justify-center mt-5">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="pb-8 pt-3">price: ${itemObj.price}.00</p>
          </div>
        </a>
      </li>
      {/* </ul>
        </div>
      </div> */}
    </>
  );
}
