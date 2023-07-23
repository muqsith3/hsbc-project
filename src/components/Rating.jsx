import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Rating() {
  const imageUrl =
    "https://i.pinimg.com/564x/71/94/82/7194820f5cb9198b1d4380a804caf179.jpg";
  return (
    <>
      <article className="grid">
        <div className="py-4">
          <div className="flex items-center mb-1 space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={imageUrl || "url_gambar_default.png"}
              alt=""
            />
            <div>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <time datetime="2022-01-20 19:00" className="mx-2">
                  01/05/2023
                </time>
              </div>
              <div className="font-medium flex">
                <p className="bg-slate-500 px-3 text-xs py-1 text-white mr-2">
                  Verified
                </p>
                <p>Jese Leos</p>
              </div>
            </div>
          </div>
          <div>
            <h5>This is excellent</h5>
            <p>
              Excellent as always but I am asking you to bring back your relief
              blend for those of us that like to drink your coffee daily
            </p>
          </div>
        </div>
        <div className="py-4">
          <div className="flex items-center mb-1 space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={imageUrl || "url_gambar_default.png"}
              alt=""
            />
            <div>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <time datetime="2022-01-20 19:00" className="mx-2">
                  01/05/2023
                </time>
              </div>
              <div className="font-medium flex">
                <p className="bg-slate-500 px-3 text-xs py-1 text-white mr-2">
                  Verified
                </p>
                <p>Jese Leos</p>
              </div>
            </div>
          </div>
          <div>
            <h5>This is excellent</h5>
            <p>
              Excellent as always but I am asking you to bring back your relief
              blend for those of us that like to drink your coffee daily
            </p>
            <img
              className="rounded-md w-24"
              src="https://judgeme.imgix.net/port-of-mokha/1598196095__image__original.jpg?auto=format&w=160"
              alt=""
            />
          </div>
        </div>
        <div className="py-4">
          <div className="flex items-center mb-1 space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={imageUrl || "url_gambar_default.png"}
              alt=""
            />
            <div>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <time datetime="2022-01-20 19:00" className="mx-2">
                  01/05/2023
                </time>
              </div>
              <div className="font-medium flex">
                <p className="bg-slate-500 px-3 text-xs py-1 text-white mr-2">
                  Verified
                </p>
                <p>Jese Leos</p>
              </div>
            </div>
          </div>
          <div>
            <h5>This is excellent</h5>
            <p>
              Excellent as always but I am asking you to bring back your relief
              blend for those of us that like to drink your coffee daily
            </p>
          </div>
        </div>
        <div className="py-4">
          <div className="flex items-center mb-1 space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src={imageUrl || "url_gambar_default.png"}
              alt=""
            />
            <div>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <time datetime="2022-01-20 19:00" className="mx-2">
                  01/05/2023
                </time>
              </div>
              <div className="font-medium flex">
                <p className="bg-slate-500 px-3 text-xs py-1 text-white mr-2">
                  Verified
                </p>
                <p>Jese Leos</p>
              </div>
            </div>
          </div>
          <div>
            <h5>This is excellent</h5>
            <p>
              Excellent as always but I am asking you to bring back your relief
              blend for those of us that like to drink your coffee daily
            </p>
          </div>
        </div>
        <nav aria-label="Page navigation example" className="mx-auto">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Previous</span>
                <FaChevronLeft className="w-2.5 h-2.5" />
              </a>
            </li>
            {/* ... */}
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span className="sr-only">Next</span>
                <FaChevronRight className="w-2.5 h-2.5" />
              </a>
            </li>
          </ul>
        </nav>
      </article>
    </>
  );
}
