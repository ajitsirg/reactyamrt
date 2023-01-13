import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormCheckBox,
  FormInputComp,
  FormInputPasswordComp,
  FormLabel,
  FormSubmitButton,
  LoadingBtn,
} from "../../../components/AuthPageComponents";
import { signup } from "../../../api/auth";
import { toast } from "react-toastify";

// import useRegistrationFormValidation from "../../../hooks/useRegistrationFormValidation";
const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //   const { phoneErr, passErr, loading, handleFormSubmit } =
  //     useRegistrationFormValidation();

  const handleLogin = async (data, action) => {
    setIsLoading(true);
    const res = await signup(data);

    if (res?.code)
      if (res?.code === "ERR_BAD_REQUEST") {
        setIsLoading(false);
        toast.error(res.response.data.message);
      }

    if (res?.response?.status === 400) {
      setIsLoading(false);
      toast.error(`Email ${res?.response?.data?.errors?.email[0]}`);
      toast.error(`Mobile ${res?.response?.data?.errors?.username[0]}`);
    }

    if (res?.status === 201) {
      toast.success(res.data?.status);
      navigate(`/verify-otp/${data.username}`);
      setIsLoading(false);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
      confirm_password: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("This is required!"),
      username: Yup.string()
        .required("This is required!")
        .min(10, "Only Enter Number!"),
      password: Yup.string()
        .required("This is required!")
        .min(8, "Atleast 8 character"),
      confirm_password: Yup.string()
        .required("This field is required!")
        .min(8, "Atleast 8 character")
        .oneOf(
          [Yup.ref("password"), null],
          "Password and confirm password should be match!"
        ),
      email: Yup.string()
        .required("This is required!")
        .email("Please Enter valid mail!"),
    }),

    onSubmit: (values, action) => {
      handleLogin(values, action);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <div>
        <FormLabel text={"Full Name"} />
        <FormInputComp
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
          placeholder="Enter Full Name"
        />
      </div>
      <div>
        <FormLabel text={"Email Address"} />
        <FormInputComp
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          placeholder="Enter Email Address"
        />
        {errors && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
      </div>
      <div>
        <FormLabel text={"Phone Number"} />
        <FormInputComp
          type="tel"
          name="username"
          onChange={handleChange}
          value={values.username}
          placeholder="Enter Phone Number"
        />
        {errors && (
          <p className="text-red-600 text-sm mt-2">{errors.username}</p>
        )}
      </div>
      <div>
        <FormLabel text={"Password"} />
        <FormInputPasswordComp
          type="password"
          name="password"
          placeholder="Enter password"
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onChange={handleChange}
          value={values.password}
        />
        {errors && (
          <p className="text-red-600 text-sm mt-2">{errors.password}</p>
        )}
      </div>
      <div>
        <FormLabel text={"Confirm Password"} />
        <FormInputPasswordComp
          type="password"
          name="confirm_password"
          onChange={handleChange}
          value={values.confirm_password}
          placeholder="Enter Confirm password"
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
        />
        {errors && (
          <p className="text-red-600 text-sm mt-2">{errors.confirm_password}</p>
        )}
      </div>
      <div className="flex items-center gap-2 text-sm text-muted tracking-wide">
        <FormCheckBox id="agree-with-condition" name="checkbox" />
        <label
          htmlFor="agree-with-condition"
          className="cursor-pointer flex items-center gap-1"
        >
          I agree with
          <Link
            to="/terms-and-conditions"
            className="text-primary font-medium "
          >
            Terms
          </Link>
          and
          <Link to="/privacy-and-policy" className="text-primary font-medium ">
            Privacy Policy
          </Link>
        </label>
      </div>
      <div className="pt-2">
        {isLoading ? <LoadingBtn /> : <FormSubmitButton text="Sign up" />}
      </div>
    </form>
  );
};

export default RegistrationForm;
