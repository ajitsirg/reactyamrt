import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { PageTitle } from "../../../components/ECommercePageComponents";
import ECommerceLayout from "../../../components/layouts/ECommerceLayout";
import ProductsTable from "./ProductsTable";
import ModalComponent from "../../../components/Modal";
import { TextInput, Label, Select, FileInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoryGet, categoryPost } from "../../../api/category";
import { setIsLoad } from "../../../redux/features/LoaderSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const [isShowCreateCategoryModal, setIsShowCreateCategoryModal] =
    useState(false);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const isLoad = useSelector((state) => state.loader.isLoad);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateCategory = async (data) => {
    try {
      setIsLoading(true);
      const res = await categoryPost(data, token);
      if (res?.status === 201) {
        setIsShowCreateCategoryModal(false);
        dispatch(setIsLoad(!isLoad));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formikCategory = useFormik({
    initialValues: {
      name: "",
      parent: "",
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Please Atleast enter 3 character!")
        .required("This is required"),
      image: Yup.mixed().required("This is required"),
    }),
    onSubmit: (values, action) => {
      action.resetForm();
      handleCreateCategory(values);
    },
  });

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await categoryGet(token);
      setCategory(res.data);
    })();
    setIsLoading(false);
  }, [isLoad, token]);

  return (
    <ECommerceLayout>
      <div className="pt-10 max-w-6xl mx-auto mb-10">
        <div className="flex items-center justify-between">
          <PageTitle title={"Products"} />
          <div className="flex items-center gap-5">
            <div className="w-80 relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-[13px] text-gray-400 left-3.5"
              />
              <input
                type="text"
                className={
                  "w-full  pl-10 border border-gray-200 focus:ring-primary focus:ring-2 text-darken focus:border-transparent rounded-full shadow-sm appearance-none placeholder:text-sm placeholder:text-gray-400"
                }
                placeholder="Search Products..."
              />
            </div>
            <Link
              to="/product-details"
              className="bg-primary hover:bg-indigo-500 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-4 text-sm  "
            >
              <span>Add</span> <FontAwesomeIcon className="" icon={faPlus} />
            </Link>
            <button
              onClick={() => setIsShowCreateCategoryModal(true)}
              className="bg-primary hover:bg-indigo-500 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-4 text-sm  "
            >
              <span>Category</span>
              <FontAwesomeIcon className="" icon={faPlus} />
            </button>
          </div>
        </div>
      </div>

      <ModalComponent
        popup={false}
        isShow={isShowCreateCategoryModal}
        onClose={setIsShowCreateCategoryModal}
        onSubmit={formikCategory.handleSubmit}
        isLoading={isLoading}
        heading="Create Category"
      >
        <div id="create_category">
          <div className="mb-2 block flex-1">
            <Label value="Category" htmlFor="category" />
            <TextInput
              id="catgory"
              type="text"
              name="name"
              placeholder="Breakfast"
              value={formikCategory.values.name}
              required={true}
              onChange={formikCategory.handleChange}
              onBlur={formikCategory.handleBlur}
            />
            <span className="text-red-600 text-sm">
              {formikCategory.errors ? formikCategory.errors.name : ""}
            </span>
          </div>
          <div className="mb-2 block flex-1">
            <Label value="Select Parent Category" htmlFor="parent" />
            <Select
              id="parent"
              name="parent"
              value={formikCategory.values.parent}
              required={true}
              onChange={formikCategory.handleChange}
              onBlur={formikCategory.handleBlur}
            >
              <option>Select Parent Category</option>
              {Array.isArray(category) ? (
                category.map((item, index) => {
                  return (
                    <option key={new Date().getTime() + index} value={item.id}>
                      {item.name.toLocaleUpperCase()}
                    </option>
                  );
                })
              ) : (
                <></>
              )}
            </Select>
            <span className="text-red-600 text-sm">
              {formikCategory.errors ? formikCategory.errors.parent : ""}
            </span>
          </div>
          <div className="mb-2 block flex-1">
            <Label value="Category Image" htmlFor="image" />
            <FileInput
              id="image"
              name="image"
              accept=".jpg,.jpeg,.png"
              required={true}
              onChange={(e) =>
                formikCategory.setFieldValue("image", e.target.files[0])
              }
              onBlur={formikCategory.handleBlur}
            />
            <span className="text-red-600 text-sm">
              {formikCategory.errors ? formikCategory.errors.image : ""}
            </span>
          </div>
        </div>
      </ModalComponent>

      <div className="pb-10">
        <ProductsTable />
      </div>
    </ECommerceLayout>
  );
};

export default Products;
