import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

export default function Hero() {
  const imgs = [
    {
      id: 0,
      value:
        "https://portofmokha.com/cdn/shop/products/FOR_SHOPIFY_TRILOGY_01_1024x1024.png?v=1583258977",
    },
    {
      id: 1,
      value:
        "https://portofmokha.com/cdn/shop/products/FOR_SHOPIFY_TRILOGY_02_1024x1024.png?v=1583258977",
    },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 mt-10 px-4">
        <div className="sticky top-0">
          <img
            src={sliderData.value}
            className="mx-auto"
            style={{ height: "300px", width: "500px" }}
            alt="Slider Image"
          />
          <div className="flex justify-center p-5">
            {imgs.map((data, i) => (
              <img
                key={data.id}
                src={data.value}
                onClick={() => handleClick(i)}
                className="mx-4 h-20 w-28 cursor-pointer"
                alt={`Thumbnail ${i}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 mt-10 px-4">
        <div className="bg-slate-900 mr-[30rem] text-center">
          <p className="text-white rounded-sm px-2">sold out</p>
        </div>
        <h1 className="font-bold text-2xl">THE YEMEN TRILOGY - 3X 4OZ BOXES</h1>
        <div className="flex items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span className="ml-1">290 views</span>
        </div>
        <div className="text-2xl">$188.00</div>
        <div className="mt-4">
          <p>
            The Trilogy Box includes three 4oz bags featuring coffee from
            Al-Khanshali I and III. Grown at staggering heights, these varieties
            are molded by the challenging terrain, offering you various flavor
            profiles brilliantly layered with brimming sweetness and bright
            fruit notes.
          </p>
          <br />
          <br />
          <p>
            Al-Khanshali I is the flagship farm of Al-Khanshali Estates. While
            our partner estates undoubtedly produce exceptional coffees,
            Al-Khanshali I is the only estate that we have complete control over
            each step in the production. Located in West Haraz, it's both
            accessible and desirable for its unique microclimate and extreme
            high elevation. Our future plans for this flagship farm include an
            onsite coffee lab, a complete processing facility, and an onsite
            mill. This farm gives us an unprecedented opportunity for
            experimental processing techniques, genetic R&D, and so much more.
            We couldn't be more excited for this project to take shape.
          </p>
          <br />
          <br />
          <p>
            Al-Khanshali III, located in West Haraz, is both unique and
            excellent for a number of reasons. First, the Haraz region—of all
            the coffee producing regions in Yemen—has easily the most experience
            producing high quality, traceable coffee. Our work would have never
            been possible if it weren't for the vision and dedication of Bohra
            communities of Eastern Haraz who built mills, collection centers,
            and many other vital coffee infrastructure before anyone.
          </p>
          <br />
          <br />
          <p>
            Al-Khanshali III, located in West Haraz, is both unique and
            excellent for a number of reasons. First, the Haraz region—of all
            the coffee producing regions in Yemen—has easily the most experience
            producing high quality, traceable coffee. Our work would have never
            been possible if it weren't for the vision and dedication of Bohra
            communities of Eastern Haraz who built mills, collection centers,
            and many other vital coffee infrastructure before anyone.
          </p>
          <br />
          <br />
          <p>
            <b>
              <i>Trilogy Box Flavor Profiles</i>
            </b>
          </p>
          <p>
            Al-Khanshali I: Lot 17 (Sundried Natural) – Peach Nectar, Honey,
            Clove.
          </p>
          <p>
            Al-Khanshali III: Lot 10 (Sundried Natural) – Prune, Mango, Palm
            Sugar
          </p>
          <p>
            Al-Khanshali I: Lot 2 (9 Days Anaerobic) – Passion Fruit, Rum,
            Baking Spice
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            For international orders, Port of Mokha is not liable for custom
            fees. Please see our shipping policy for more details.
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
}
