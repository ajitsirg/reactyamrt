import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { categoryGet } from "../../../../api/category";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const BasicInfo = ({ formik }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState([]);

  const token = useSelector((state) => state.auth.token);
  const isLoad = useSelector((state) => state.loader.isLoad);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await categoryGet(token);
      setCategory(res.data);
    })();
    setIsLoading(false);
  }, [isLoad, token]);

  return (
    <div className="max-w-xl">
      <div className="w-full flex flex-col gap-4">
        <input
          required
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Product Name"
        />
        <p className="text-primary pl-3 text-sm -mt-2">
          You must enter a product name
        </p>
        <textarea
          rows="4"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          className="w-full resize-none text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Descriptions"
        ></textarea>

        <select
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
          className="w-full resize-none text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
        >
          <option>Select Category</option>
          {category ? (
            category.map((item, index) => {
              return (
                <option key={new Date().getTime() + index} value={item.id}>
                  {item.name}
                </option>
              );
            })
          ) : (
            <></>
          )}
        </select>

        {/* <CreatableSelect
          className="shadow-sm"
          isMulti
          options={options}
          onChange={(e) => {
            console.log(e);
          }}
          placeholder="Select Multiple Categories"
        /> */}

        {/* <CreatableSelect
          className="shadow-sm"
          isMulti
          options={options}
          onChange={setCategories}
          placeholder="Select Multiple Tags"
        /> */}

        <input
          required
          name="tags"
          type="text"
          value={formik.values.tags}
          onChange={formik.handleChange}
          className="w-full text-darken border border-gray-200 focus:ring-primary focus:ring-1  focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm"
          placeholder="Enter Tags"
        />
      </div>
    </div>
  );
};

export default BasicInfo;
