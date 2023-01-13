import React, { useState } from "react";
import BasicInfo from "./tabs/BasicInfo";
import ImageUpload from "./tabs/ImageUpload";
import Inventory from "./tabs/Inventory";
import Pricing from "./tabs/Pricing";
// import Shipping from "./tabs/Shipping";
const ProductDetailsTabs = ({ formik }) => {
  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(0);
  const blocks = [
    { id: 0, name: "Basic Info", icons: "" },
    { id: 1, name: "Product Images", icons: "" },
    { id: 2, name: "Pricing", icons: "" },
    { id: 3, name: "Inventory", icons: "" },
    // { id: 4, name: "Shipping", icons: "" },
  ];
  const handleActive = (index) => {
    setActive(index);
    setClicked(index);
  };
  return (
    <div className=" px-4 py-3 min-h-[300px] w-full bg-white border rounded-lg border-gray-200">
      <nav className="flex items-center gap-10 border-b border-gray-200 ">
        {blocks.map((block, index) => (
          <button
            key={block.id}
            onClick={() => handleActive(index)}
            className={` text-base font-sans-pro  pb-3 px-2 border-b-2 ${
              index === clicked
                ? "border-primary text-primary font-semibold "
                : "border-transparent text-gray-500"
            }`}
          >
            {block.name}
          </button>
        ))}
      </nav>
      <div className="mt-8 mb-5">
        {active === 0 && <BasicInfo formik={formik} />}
        {active === 1 && <ImageUpload formik={formik} />}
        {active === 2 && <Pricing formik={formik} />}
        {active === 3 && <Inventory formik={formik} />}
        {/* {active === 4 && <Shipping />} */}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
