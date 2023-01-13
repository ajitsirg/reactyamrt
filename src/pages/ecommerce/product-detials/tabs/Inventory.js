import React from "react";
import { FormInputComp } from "../../../../components/AuthPageComponents";

const Inventory = ({ formik }) => {
  return (
    <div className="max-w-xl">
      <div className="w-full flex flex-col gap-4">
        <FormInputComp
          placeholder="SKU"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.total_available}
          name="total_available"
        />

        <select
          className="w-full resize-none text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          name="availablity"
          value={formik.values.availablity}
          onChange={formik.handleChange}
        >
          <option value="IN STOCK">In Stock</option>
          <option value="OUT OF STOCK">Out of Stock</option>
        </select>
      </div>
    </div>
  );
};

export default Inventory;
