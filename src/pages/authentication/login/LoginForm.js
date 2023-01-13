import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormCheckBox,
  FormInputComp,
  FormInputPasswordComp,
  FormLabel,
  FormSubmitButton,
  LoadingBtn,
} from "../../../components/AuthPageComponents";
import apple from "../../../asset/images/icons/apple.png";
import google from "../../../asset/images/icons/google.png";
import facebook from "../../../asset/images/icons/facebook.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../../api/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/features/authSlice";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (data, action) => {
    setIsLoading(true);
    const res = await login(data);

    if (res?.code)
      if (res?.code === "ERR_BAD_REQUEST") {
        setIsLoading(false);
        toast.error(res.response.data.message);
      }

    if (res?.response?.status === 404) {
      setIsLoading(false);
      toast.error(res?.response?.data?.errors?.non_field_errors[0]);
    }

    if (res?.status === 200) {
      toast.success(res.data?.status);
      navigate(`/`);
      dispatch(setToken(res.data.token.access));
      setIsLoading(false);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required("This is required!"),
      password: Yup.string()
        .required("This is required!")
        .min(8, "Min Length 8"),
    }),

    onSubmit: (values, action) => {
      handleLogin(values, action);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <FormLabel text={"Mobile"} />
        <FormInputComp
          type="tel"
          onChange={handleChange}
          value={values.username}
          placeholder="Enter Mobile"
          name="username"
        />
        {errors && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
      </div>

      <div>
        <FormLabel text={"Password"} />
        <FormInputPasswordComp
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
          value={values.password}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        {errors && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
      </div>
      <div className="flex items-center justify-between text-sm text-muted font-medium tracking-wide">
        <div className="flex items-center gap-2 ">
          <FormCheckBox id="remember-me" name="checkbox" />
          <label htmlFor="remember-me" className="cursor-pointer">
            Remember me
          </label>
        </div>
        <Link to="/forgot-password" className="text-primary font-medium">
          Forgot Password?
        </Link>
      </div>
      <div className="pt-2">
        {isLoading ? <LoadingBtn /> : <FormSubmitButton text="Sign In" />}
      </div>
      <div>
        <div className="flex items-center gap-5 pt-2">
          <p className="h-[1px] w-full bg-gray-300 rounded-full"></p>
          <p className="flex-shrink-0 text-gray-600 text-sm tracking-wide">
            Or continue with
          </p>
          <p className="h-[1px] w-full bg-gray-300 rounded-full"></p>
        </div>
        <div className="flex items-center justify-center mt-5 gap-3">
          <img src={google} className="h-8 cursor-pointer" alt="" />
          <img src={apple} className="h-9 cursor-pointer" alt="" />
          <img src={facebook} className="h-8 cursor-pointer" alt="" />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
