import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../asset/images/brand-logo.png";

export const FormInputClass =
  "w-full text-darken border border-gray-200 focus:ring-primary focus:ring-2 text-darken focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm";
export const FormInputClass2 =
  "w-full h-[42px] px-3 outline-none text-darken border border-gray-200 focus:ring-primary focus:ring-2 text-darken focus:border-transparent rounded-md shadow-sm appearance-none placeholder:text-sm";

export const FormLabel = ({ text }) => {
  return (
    <label className="block mb-1.5  text-muted text-sm font-medium tracking-wide">
      {text}
    </label>
  );
};

export const FormInputComp = ({ type, placeholder, name, onChange, value }) => {
  return (
    <input
      required
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      className={FormInputClass}
      placeholder={placeholder}
    />
  );
};

export const FormInputPasswordComp = ({
  type,
  placeholder,
  name,
  showPassword,
  setShowPassword,
  onChange,
  value,
}) => {
  return (
    <div className="relative">
      <input
        required
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        className={FormInputClass}
        placeholder={placeholder}
      />
      <FontAwesomeIcon
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
        icon={showPassword ? faEyeSlash : faEye}
      />
    </div>
  );
};

export const FormCheckBox = ({ id, name, onChange }) => {
  return (
    <input
      required
      name={name}
      type="checkbox"
      id={id}
      onChange={onChange}
      className="w-3.5 h-3.5 rounded border-gray-300 text-primary focus:ring-primary"
    />
  );
};

export const FormSubmitButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full rounded-full py-2 bg-primary hover:bg-indigo-500 duration-300 text-white"
    >
      {text}
    </button>
  );
};

export const LoadingBtn = () => {
  return (
    <button
      disabled
      className="w-full cursor-wait flex items-center justify-center rounded-full py-2 bg-indigo-500 duration-300 text-white"
    >
      <div className="w-6 h-6  rounded-full animate-spin border-y-2 border-solid border-white border-t-transparent shadow-md"></div>
    </button>
  );
};

export const AuthPageTopInfo = ({ title, subtitle, linkText, path }) => {
  return (
    <div className="mb-7 ">
      <img src={logo} className="h-20 relative -left-2 mb-3" alt="" />
      <h2 className="text-4xl tracking-wide text-darken font-bold font-sans-pro">
        {title}
      </h2>
      <p className="text-sm text-gray-600 mt-1 ">
        {subtitle}
        <Link to={path} className="text-primary font-medium">
          {linkText}
        </Link>
      </p>
    </div>
  );
};
