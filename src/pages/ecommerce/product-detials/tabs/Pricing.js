import React from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormInputComp } from "../../../../components/AuthPageComponents";

const Pricing = ({ formik }) => {
  return (
    <div className="max-w-xl">
      <div className="w-full flex flex-col gap-4">
        <FormInputComp
          placeholder="Discount Price ₹"
          type="text"
          name="discount_price"
          onChange={formik.handleChange}
          value={formik.values.discount_price}
        />
        <FormInputComp
          placeholder="Price ₹"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.price}
          name="price"
        />
        {/* <FormInputComp placeholder="Tax Rate ₹" type="text" name="TaxRate" />
        <FormInputComp
          placeholder="Compared Price ₹"
          type="text"
          name="ComparePrice"
        /> */}
        <p className="text-sm text-gray-500 -mt-2 ml-3 flex items-center gap-2">
          <FontAwesomeIcon className="text-yellow-500" icon={faInfoCircle} />
          Add a compare price to show next to the real price
        </p>
      </div>
    </div>
  );
};

export default Pricing;
